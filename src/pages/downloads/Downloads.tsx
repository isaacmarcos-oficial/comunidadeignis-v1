import { Button, Flex, Heading, Image, Link, Text, Wrap } from "@chakra-ui/react";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";

import Prismic from '@prismicio/client';
import { getPrismicClient } from "../../services/prismic";
import { useEffect, useState } from "react";
import { RichText } from "prismic-dom";

type download = {
  slug: string;
  title: string;
  tag: string;
  banner: {
    url: string;
  };
  excerpt: string;
  updatedAt: string
};

interface downloadsProps {
  downloads: download[]
}

export function Downloads() {
  const [downloads, setDownloads] = useState<download[]>([])
  const [pageSize, setPageSize] = useState(5);

  const getBlogDownloads = async () => {
    const prismic = getPrismicClient()

    const response = await prismic.query([
      Prismic.predicates.at('document.type', 'download')
    ], {
      fetch: ['download.title', 'download.banner', 'download.tag', 'download.content'],
      pageSize: pageSize,
      orderings:'[document.last_publication_date desc]'
    })

    const formattDownloads = response.results.map(download => {
      return {
        slug: download.uid!,
        banner: {
          url: download.data.banner.url,
        },
        tag: download.data.tag,
        title: RichText.asText(download.data.title),
        excerpt: download.data.content.find((content: { type: string }) => content.type === 'paragraph')?.text ?? '',
        updatedAt: download.last_publication_date ? new Date(download.last_publication_date).toLocaleDateString('pt-BR', { 
          day: '2-digit',
          month: 'short',
          year: 'numeric'
        })
        : ''
      }
    })
    setDownloads(formattDownloads)
  }
  
  useEffect(() => {
    getBlogDownloads()
  }, [pageSize])

  return (
    <Flex direction="column" align="center" justify="center">
      <Header />

      <Flex direction="column" my="2rem" mt="8rem" align="center" justify="center">
        <Heading fontSize="2rem" my="0.5rem" lineHeight="1.6875rem" mb=".5rem" color="yellow.800" textAlign={{ base:"center", md: "center", lg:"inherit" }}>
          DOWNLOADS
        </Heading>

        <Flex my={{ base:"2rem", lg:"3rem"}} borderRadius="10" direction="column" align="center" justify="center">
          <Flex maxW="1320px" align="center" justify="center"mx="2rem" >
            <Wrap display="flex" spacing="2rem" justify={{ md:"center", lg:"stretch" }} >
              
              {downloads.map(download => (
                <Flex key={download.slug} minH="450px" maxH="450px" bgColor="gray.100" style={{ textDecoration: "none" }} mb="-3rem" direction="column" align="center" maxW={{ base: "100%", md: "400px", lg: "300px" }} borderRadius="10"
                
                >
                  <Link href={`/downloads/${download.slug}`} w="100%" minH="180px" maxH="180px" bgColor="black" borderTopRadius="10" cursor="pointer" >
                    <Image objectFit="cover" w="100%" minH="180px" maxH="180px" src={download.banner.url} _hover={{ opacity: 0.7 }} transition="opacity 0.5s" borderTopRadius="10" mb="2" />
                  </Link>
                  <Flex direction="column" align="center" justify="space-between" p="1rem" h="100%" >
                    <Link href={`/downloads/${download.slug}`} style={{ textDecoration:"none"}} sx={{
                      textDecoration: "none",
                      "&:hover h2": {
                        color: "yellow.700",
                      },
                      "& h2": {
                        transition: "color 0.2s ease-in-out "
                      }
                    }}>
                      <Heading w="100%" fontSize="18px" lineHeight="1.5rem" textAlign="center" mb="1rem" cursor="pointer" >
                        {download.title}
                      </Heading>
                      <Text w="100%" textAlign="justify" cursor="pointer" noOfLines={4} >
                        {download.excerpt}
                      </Text>
                    </Link>
                    <Button bgColor="gray.600" color="gray.50" _hover={{ bgColor: "yellow.800", zoom: "1rem" }} w="100%" >
                      <Link href={`/downloads/${download.slug}`}>
                        DOWNLOAD
                      </Link>
                    </Button>

                  </Flex>
                </Flex>
              ))}

            </Wrap>
          </Flex>
        </Flex>
      </Flex>


      <Footer />
    </Flex>
  )
}