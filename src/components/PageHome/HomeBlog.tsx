import { Heading, Text, Image, Flex, Box, Link } from "@chakra-ui/react";

import Prismic from '@prismicio/client';
import { RichText } from "prismic-dom";

import { useEffect, useState } from "react";
import { getPrismicClient } from "../../services/prismic";

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


export function HomeBlog() {
  const [posts, setPosts] = useState<Post[]>([])

  const getBlogPosts = async () => {
    const prismic = getPrismicClient()

    const response = await prismic.query([
      Prismic.predicates.at('document.type', 'post')
    ], {
      fetch: ['post.title', 'post.banner', 'post.tag', 'post.content'],
      pageSize: 3,
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
  })

  return (
    <Flex align="center" justify="center" px={{ base:"2rem" }}>
 
      <Flex maxW="1320px" justify="space-between" py="2rem">
        <Flex w={{ lg:"900px", md:"100%", base:"100%" }} flexDirection={{ lg:"column", base:"column" }} gap="2rem">
          
          {posts.map(post => (
          
          <Box key={post.slug} display={{ lg: "flex", md: "flex", base: "table-column" }} lineHeight="1.5rem" pb="1.4375rem" borderBottom="1px" borderColor="gray.200"  >
          <Flex bgColor="black" w={{ lg: "295px", md: "295px", base: "100%" }} minW={{ lg: "295px", md: "295px", base: "100%" }} h="185px">
            <Link href={`/blog/${post.slug}`} target="_blank" >
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
            }} target="_blank"
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
          
        </Flex>
        
            <Box display={{lg:"flex", md:"none", base:"none" }} w="450px" h="700px" bgImage="/Lepanto.jpg" bgSize="cover" bgPosition="center" objectFit="contain" bgColor="gray.500" ml="50px" />
          <Flex>

        </Flex>
      </Flex>
      
    </Flex>
  )
}