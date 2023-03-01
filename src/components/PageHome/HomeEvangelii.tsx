import { Flex, Image, Box, Text, Heading, Button, Link } from "@chakra-ui/react";

import Prismic from '@prismicio/client';
import { RichText } from "prismic-dom";
import { useEffect, useState } from "react";
import { getPrismicClient } from "../../services/prismic";

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

export function HomeEvangelii() {
  const [evangeliis, setevangeliis] = useState<evangelii[]>([])

  const getBlogevangeliis = async () => {
    const prismic = getPrismicClient()

    const response = await prismic.query([
      Prismic.predicates.at('document.type', 'evangelii')
    ], {
      fetch: ['evangelii.title', 'evangelii.banner', 'evangelii.tag', 'evangelii.content'],
      pageSize: 1,
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
  })

  return (
    <Flex w="100%" bgColor="#1D1D1B" mt="5rem" align="center" justify="center" py="5rem" borderTop="5px solid" borderColor="yellow.700">
      <Flex maxW="1320px" px={8}>
        {evangeliis.map(evangelii => (

          <Flex key={evangelii.slug}  display={{ base: "table-column", md: "table-column", lg: "flex" }} w="100%" align="center" justify="center" >
          
            <Image
              src={evangelii.banner.url}
              w={{ base: "md", lg: "450px" }}
              h={{ base: "200px", lg: "250px" }}
              objectFit="cover"
              borderRadius="15"
              shadow="dark-lg"
            />

            <Box maxW="500px" mt={{ base: "1.5rem", lg: "none" }} ml={{ base: "none", lg: 8 }} lineHeight="2rem" textAlign={{ base: "center", lg: "left" }}>

              <Text color="yellow.700" fontSize="md" fontWeight="bold">
                MEDITAÇÕES DOMINICAIS
              </Text>
              
              <Heading color="white" fontFamily="Gentium">
                {evangelii.title}
              </Heading>

              <Text fontSize={["sm"]} color="gray.300" fontFamily="Gentium" fontStyle="italic" noOfLines={4}>
                {evangelii.excerpt}
              </Text>

              <Button as={Link} mt="6" bgColor="yellow.700" _hover={{ bgColor: "yellow.700", color: "white", opacity: "85%" }} style={{ textDecoration:"none" }} href={`/evangelho/${evangelii.slug}`} >
                  Leia agora
              </Button>
            </Box>

          </Flex>
        ))}
      </Flex>
    </Flex>
  )
}