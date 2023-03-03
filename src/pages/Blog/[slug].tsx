import { Flex, Heading, Text, Image, Wrap, WrapItem } from "@chakra-ui/react";

import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";

import { Helmet } from 'react-helmet';
import { useParams } from 'react-router-dom';
import { RichText } from 'prismic-dom';
import { getPrismicClient } from "../../services/prismic";
import { useEffect, useState } from "react";
import ReactHtmlParser from 'react-html-parser';

import styles from './post.module.scss'


export function Post() {
  const params = useParams()
  const slug = params.slug
  
  const [postData, setPostData] = useState({
    slug: '',
    title: '',
    tag: '',
    author: '',
    banner: {
      url: '',
    },
    content: '',
    updatedAt: ''
  })

  const getPost = async () => {
    const prismic = getPrismicClient()

    const response = await prismic.getByUID('post', String(slug), {})
    setPostData({
      slug: response.uid!,
      banner: {
        url: response.data.banner.url,
      },
      tag: response.data.tag,
      author: RichText.asText(response.data.author),
      title: RichText.asHtml(response.data.title),
      content: RichText.asHtml(response.data.content),
      updatedAt: response.last_publication_date ? new Date(response.last_publication_date).toLocaleDateString('pt-BR', { 
        day: '2-digit',
        month: 'short',
        year: 'numeric'
      })
        : ''
      })
    }
  
  useEffect(() => {
    getPost()
  }, )

  return (
    <Flex direction="column" align="center" justify="center">
      <Header />
      
      <Helmet>
        <title>Comunidade Ignis | Post </title>
        <meta property="og:title" content={postData.title} />
        <meta property="og:image" content={postData.banner.url} />
        <meta property="og:description" content={postData.content} />
      </Helmet>

      <Flex direction="column" >
        <Flex mb="48px" direction="column" >
          <Flex>
            <Wrap >
              <WrapItem >                
                  <Flex direction="column" align="center" justify="center">
                    <Flex direction="column" w="100vw" h={{ base: "320px", lg: "450px" }} justify="center" align="center" bgColor="#000" zIndex="hide">
                      <Image className={styles.container} bgPosition="0% 15%" bgImage={postData.banner.url} maxW="1350px" w="100%" h="100%" bgSize="cover"
                      />
                    </Flex>
                    <Flex direction="column" w={{ base: "90%", lg: "48.75rem" }}  >
                      <Flex direction="column" align="center" justify="center">
                        <Heading
                          color="gray.850" mt="36px" fontFamily="Gentium" fontSize={{ base: "1.5rem", lg: "2.25rem" }} textAlign="center">
                          {ReactHtmlParser(postData.title)}
                        </Heading>
                        <Text mt=".5rem" fontStyle="italic" color="gray.300" fontWeight="600" fontSize=".875rem" mb="6" >
                          {postData.author} | {postData.updatedAt}
                        </Text >
                      </Flex>
                      <Text className={styles.postContent} color="gray.800" fontSize={{ base: "16px", lg: "18px" }} lineHeight={{ base: "28px", lg: "32px" }} letterSpacing=".1008px"
                      >
                        {ReactHtmlParser(postData.content)}
                      </Text>
                    </Flex>
                  </Flex>
              </WrapItem>
            </Wrap>
          </Flex>
        </Flex>

      </Flex>

      <Footer />
    </Flex>
  )
}