import { Flex, Heading, Text, Image, Button, Link } from "@chakra-ui/react";

import { useParams } from 'react-router-dom';
import { RichText } from 'prismic-dom';
import { getPrismicClient } from "../../services/prismic";
import { useEffect, useState } from "react";
import ReactHtmlParser from 'react-html-parser';

import styles from './book.module.scss'

export function Book() {
  const params = useParams()
  const slug = params.slug
  
  const [downloadData, setDownloadData] = useState({
    slug: '',
    title: '',
    banner: {
      url: '',
    },
    content: '',
    file: {
      url: ''
    },
    updatedAt: ''
  })

  console.log("USE ESSES DADOS", downloadData.file)

  const getDownload = async () => {
    const prismic = getPrismicClient()

    const response = await prismic.getByUID('download', String(slug), {})
    setDownloadData({
      slug: response.uid!,
      banner: {
        url: response.data.banner.url,
      },
      title: RichText.asHtml(response.data.title),
      content: RichText.asHtml(response.data.content),
      file: {
        url: response.data.file.url
      },
      updatedAt: response.last_publication_date ? new Date(response.last_publication_date).toLocaleDateString('pt-BR', { 
        day: '2-digit',
        month: 'short',
        year: 'numeric'
      })
        : ''
      })
    }
  
  useEffect(() => {
    getDownload()
  }, )

  return (
    <Flex direction="column" align="center" justify="center">
      <Flex direction="column" w="100%" h={{ base:"none", lg:"80vh"}} align="center" justify="center" bgColor="#1c1c1c">
        <Flex direction={{ base:"column", lg:"row" }} mt={{ base:"5rem", lg:"15rem"}} align="center" justify="center">
          <Flex align="center" justify="center">
            <Image src={downloadData.banner.url} borderRadius="10" h={{ base:"18rem", lg:"40rem"}} objectFit="cover" boxShadow='2xl' />
          </Flex>

          <Flex w={{ base:"90%", lg:"35%"}} ml={{ base:"none", lg:"5rem"}} >
            <Flex className={styles.postContent} direction="column" my="2rem" align="center" justify="center" >
              <Heading fontFamily="Gentium" color="#c39439" align="center" as={Text} fontSize={{ base: "1.875rem", lg: "2.625rem" }} >
                {ReactHtmlParser(downloadData.title)}
              </Heading>
              
              <Text fontStyle="italic" color="#adadad" fontWeight="600" fontSize={{ base: "0.875rem", lg: "1rem" }}>
              
              {/* escrita por Dom Antônio de Castro Mayer */}
              </Text>

              <Text mt="1.25rem" fontSize={{ base: "1rem", lg: "1.15rem" }} lineHeight={{ base: "1.625rem", lg: "2rem" }} color="#E8E7E8" >
                {ReactHtmlParser(downloadData.content)}
              </Text>

              <Link href={downloadData.file.url} download={downloadData.slug + ".pdf"} target="_blank" >
                <Button  mt="2rem" bgColor="#FFC632" _focus={{ boxShadow: "none" }} _hover={{ bgColor: "#bd8e00" }} >
                    Baixar E-Book
                </Button>
              </Link>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  )
}