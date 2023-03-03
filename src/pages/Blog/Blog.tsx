import { Box, Button, Flex, Heading, Image, Link, Text } from "@chakra-ui/react";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";

import Prismic from '@prismicio/client';
import { RichText } from 'prismic-dom';
import { getPrismicClient } from "../../services/prismic";
import { useEffect, useState } from "react";

type Post = {
  slug: string;
  title: string;
  tag: string;
  banner: {
    url: string;
  };
  excerpt: string;
  updatedAt: string
};

interface PostsProps {
  posts: Post[]
}

export function Blog() {
  const [posts, setPosts] = useState<Post[]>([])
  const [pageSize, setPageSize] = useState(5);

  const getBlogPosts = async () => {
    const prismic = getPrismicClient()

    const response = await prismic.query([
      Prismic.predicates.at('document.type', 'post')
    ], {
      fetch: ['post.title', 'post.banner', 'post.tag', 'post.content'],
      pageSize: pageSize,
      orderings:'[document.last_publication_date desc]'
    })

    const formattedPosts = response.results.map(post => {
      return {
        slug: post.uid!,
        banner: {
          url: post.data.banner.url,
        },
        tag: post.data.tag,
        title: RichText.asText(post.data.title),
        excerpt: post.data.content.find((content: { type: string }) => content.type === 'paragraph')?.text ?? '',
        updatedAt: post.last_publication_date ? new Date(post.last_publication_date).toLocaleDateString('pt-BR', { 
          day: '2-digit',
          month: 'short',
          year: 'numeric'
        })
        : ''
      }
    })
    setPosts(formattedPosts)
  }
  
  useEffect(() => {
    getBlogPosts()
  }, [pageSize])

  return (
    <Flex direction="column" align="center" justify="center">
      <Header />

      <Flex direction="column" my="2rem" mt="8rem" align="center" justify="center">
        <Heading fontSize="2rem" my="0.5rem" lineHeight="1.6875rem" mb=".5rem" color="yellow.800" textAlign={{ base:"center", md: "center", lg:"inherit" }}>
          BLOG
        </Heading>
      
        <Flex align="center" justify="center" px={{ base:"2rem" }}>
          <Flex maxW="1320px" justify="space-between" py="2rem">
            <Flex w={{ lg:"900px", md:"100%", base:"100%" }} flexDirection={{ lg:"column", base:"column" }} gap="2rem">
            
              {posts.map(post => (
                <Box key={post.slug} display={{ lg: "flex", md: "flex", base: "table-column" }} lineHeight="1.5rem" pb="1.875rem" borderBottom="1px" borderColor="gray.200"  >
                  <Flex bgColor="black" w={{ lg: "295px", md: "295px", base: "100%" }} minW={{ lg: "295px", md: "295px", base: "100%" }} h="185px">
                    <Link href={`/blog/${post.slug}`} w="100%" >
                    <Image w="100%" h="100%" objectFit="cover" src={post.banner.url} _hover={{ opacity: 0.7 }} transition="opacity 0.5s"
                    />
                    </Link>
                  </Flex>
                  <Flex as={Link} href={`/blog/${post.slug}`}
                    style={{ textDecoration: "none" }}
                    sx={{
                      textDecoration: "none",
                      "&:hover h2": {
                        color: "yellow.700",
                      },
                      "& h2": {
                        transition: "color 0.2s ease-in-out "
                      }
                    }}
                    flexDirection="column" px="0.5rem" ml="25px"
                  >
                    <Flex fontSize="0.75rem" w="100%" >
                      <Text color="yellow.800" fontWeight="700" mr="0.625rem" textTransform="uppercase">
                        {post.tag}
                      </Text>
                      <Text color="gray.700" fontWeight="500" fontSize="0.8125rem" textTransform="lowercase" >
                         | {post.updatedAt}  {/* 17.jan.2023 */}
                      </Text>
                    </Flex>
                    <Heading color="gray.900" fontSize="1.375rem" my="0.5rem" lineHeight="1.6875rem" mb=".375rem">
                      {post.title}
                    </Heading>
                    <Text color="gray.600" fontSize="1.0625rem" lineHeight="1.5625rem" white-space="nowrap" text-overflow="ellipsis" maxW="100%" overflow="hidden" display="-webkit-box" letterSpacing="-0.025rem" noOfLines={4}  >
                      {post.excerpt}
                    </Text>
                  </Flex>
                </Box>
              ))}
                <Button onClick={() => setPageSize(pageSize + 5)} fontSize="1.125rem" p="1.3125rem" h="60px" bgColor="gray.600" color="gray.50" _hover={{ bgColor:"yellow.800", color:"gray.50" }} >
                  Carregar mais
                </Button>
            </Flex>
            
            <Flex display={{ lg: "flex", md: "none", base: "none" }} direction="column" w="450px" ml="50px" align="center" >

              <Box w="100%" h="700px" bgImage="/Lepanto.jpg" bgSize="cover" bgPosition="center" objectFit="contain" bgColor="gray.500"  />

              <Text fontFamily="Gentium" mt="1rem" textAlign="center" fontSize="16px" w="90%" letterSpacing="-0.025rem">
                Dê-me, Senhor, agudeza para entender, capacidade para reter, método e faculdade para aprender, sutileza para interpretar, graça e abundância para falar. Dê-me, Senhor, acerto ao começar, direção ao progredir, e perfeição ao concluir. Amém.
              </Text>
              
            </Flex>
          </Flex>
        </Flex>
      </Flex>

      <Footer />
    </Flex>
  )
}