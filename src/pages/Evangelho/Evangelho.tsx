import { Box, Button, Flex, Heading, Image, Link, Text } from "@chakra-ui/react";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";

import Prismic from '@prismicio/client';
import { RichText } from 'prismic-dom';
import { getPrismicClient } from "../../services/prismic";
import { useEffect, useState } from "react";

type evangelii = {
  slug: string;
  title: string;
  tag: string;
  banner: {
    url: string;
  };
  excerpt: string;
  updatedAt: string
};

interface evangeliisProps {
  evangeliis: evangelii[]
}

export function Evangelho() {
  const [evangeliis, setevangeliis] = useState<evangelii[]>([])
  const [pageSize, setPageSize] = useState(5);

  const getBlogevangeliis = async () => {
    const prismic = getPrismicClient()

    const response = await prismic.query([
      Prismic.predicates.at('document.type', 'evangelii')
    ], {
      fetch: ['evangelii.title', 'evangelii.banner', 'evangelii.tag', 'evangelii.content'],
      pageSize: pageSize,
      orderings:'[document.last_publication_date desc]'
    })

    const formattedevangeliis = response.results.map(evangelii => {
      return {
        slug: evangelii.uid!,
        banner: {
          url: evangelii.data.banner.url,
        },
        tag: evangelii.data.tag,
        title: RichText.asText(evangelii.data.title),
        excerpt: evangelii.data.content.find((content: { type: string }) => content.type === 'paragraph')?.text ?? '',
        updatedAt: evangelii.last_publication_date ? new Date(evangelii.last_publication_date).toLocaleDateString('pt-BR', { 
          day: '2-digit',
          month: 'short',
          year: 'numeric'
        })
        : ''
      }
    })
    setevangeliis(formattedevangeliis)
  }
  
  useEffect(() => {
    getBlogevangeliis()
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
            
              {evangeliis.map(evangelii => (
                <Box key={evangelii.slug} display={{ lg: "flex", md: "flex", base: "table-column" }} lineHeight="1.5rem" pb="1.875rem" borderBottom="1px" borderColor="gray.200"  >
                  <Flex bgColor="black" w={{ lg: "295px", md: "295px", base: "100%" }} minW={{ lg: "295px", md: "295px", base: "100%" }} h="185px">
                    <Link href={`/blog/${evangelii.slug}`} target="_blank" >
                    <Image w="100%" h="100%" objectFit="cover" src={evangelii.banner.url} _hover={{ opacity: 0.7 }} transition="opacity 0.5s"
                    />
                    </Link>
                  </Flex>
                  <Flex as={Link} href={`/evangelho/${evangelii.slug}`}
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
                        {evangelii.tag}
                      </Text>
                    </Flex>
                    <Heading color="gray.900" fontSize="1.375rem" my="0.5rem" lineHeight="1.6875rem" mb=".375rem">
                      {evangelii.title}
                    </Heading>
                    <Text color="gray.600" fontSize="1.0625rem" lineHeight="1.5625rem" white-space="nowrap" text-overflow="ellipsis" maxW="100%" overflow="hidden" display="-webkit-box" letterSpacing="-0.025rem" noOfLines={5}  >
                      {evangelii.excerpt}...
                    </Text>
                  </Flex>
                </Box>
              ))}
                <Button onClick={() => setPageSize(pageSize + 5)} fontSize="1.125rem" p="1.3125rem" h="60px" bgColor="gray.600" color="gray.50" _hover={{ bgColor:"yellow.700"}} >
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