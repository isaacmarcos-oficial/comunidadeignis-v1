import {
  Flex,
  Heading,
  Text,
  Image,
  Wrap,
  WrapItem,
  Divider,
} from "@chakra-ui/react";

import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";

import { Helmet } from "react-helmet";
import { useParams } from "react-router-dom";
import { RichText } from "prismic-dom";
import { getPrismicClient } from "../../services/prismic";
import { useEffect, useState } from "react";
import ReactHtmlParser from "react-html-parser";

import styles from "../../Styles/post.module.scss";

export function Post() {
  const params = useParams();
  const slug = params.slug;

  const [postData, setPostData] = useState({
    slug: "",
    title: "",
    tag: "",
    author: "",
    banner: {
      url: "",
    },
    content: "",
    updatedAt: "",
    note: "",
    seoTitle: "",
  });

  const getPost = async () => {
    const prismic = getPrismicClient();

    const response = await prismic.getByUID("post", String(slug), {});
    setPostData({
      slug: response.uid!,
      banner: {
        url: response.data.banner.url,
      },
      tag: response.data.tag,
      author: RichText.asText(response.data.author),
      title: RichText.asHtml(response.data.title),
      seoTitle: RichText.asText(response.data.title),
      content: RichText.asHtml(response.data.content),
      note: RichText.asHtml(response.data.note),
      updatedAt: response.last_publication_date
        ? new Date(response.last_publication_date).toLocaleDateString("pt-BR", {
            day: "2-digit",
            month: "short",
            year: "numeric",
          })
        : "",
    });
  };

  function calculateReadingTime(content) {
    const wordsPerMinute = 200; // Número médio de palavras por minuto
    const text = content.replace(/<[^>]*>/g, ""); // Remover tags HTML para contar apenas o texto
    const wordCount = text.split(/\s+/).length; // Contar palavras
    const readingTime = Math.ceil(wordCount / wordsPerMinute);

    return readingTime;
  }

  useEffect(() => {
    getPost();
  });

  return (
    <Flex direction="column" align="center" justify="center">
      <Header />

      <Helmet>
        <title>
          {`${ ReactHtmlParser(postData.seoTitle)}` }
        </title>

        <meta 
          name={`${ ReactHtmlParser(postData.seoTitle)}`}
          content={`${ReactHtmlParser(postData.content)}`}
        />
        <meta 
          property="image"
          content={postData.banner.url}
        />

        <meta
          property="og:title"
          content={`Comunidade Ignis | ${ReactHtmlParser(postData.title)}`}
        />
        <meta
          property="og:description"
          content={`${ReactHtmlParser(postData.content)}`}
        />
        <meta property="og:type" content="article" />
        <meta
          property="og:url"
          content={`https://www.comunidadeignis.com.br/blog/${postData.slug}`}
        />
        <meta property="og:image" content={postData.banner.url} />
      </Helmet>

      <Flex mt="65px" mb="48px" direction="column" align="center">
        <Flex
          direction="column"
          w="100vw"
          h={{ base: "200px", md: "320px", lg: "450px" }}
          justify="center"
          align="center"
          bgColor="#000"
          zIndex="hide"
        >
          <Image
            className={styles.container}
            bgPosition="center"
            bgImage={postData.banner.url}
            maxW="1350px"
            w="100%"
            h="100%"
            bgSize="cover"
          />
        </Flex>
        <Flex direction="column" w={{ base: "90%", lg: "48.75rem" }} mt="36px">
          <Flex direction="column" align="center" justify="center">
            <Text
              color="yellow.800"
              fontWeight="700"
              textTransform="uppercase"
              borderBottom="3px solid"
            >
              {postData.tag}
            </Text>
            <Heading
              color="gray.850"
              mt={5}
              fontFamily="Gentium"
              fontSize={{ base: "1.75rem", lg: "2.25rem" }}
              textAlign="center"
            >
              {ReactHtmlParser(postData.title)}
            </Heading>
            <Text
              mt=".25rem"
              fontStyle="italic"
              color="gray.300"
              fontWeight="600"
              fontSize=".875rem"
              mb="6"
              textAlign="center"
            >
              {postData.author} <br />
              {postData.updatedAt} • Tempo de leitura:{" "}
              {calculateReadingTime(postData.content)} minutos
            </Text>
          </Flex>
          <Text
            className={styles.postContent}
            color="gray.800"
            fontSize={{ base: "16px", lg: "18px" }}
            lineHeight={{ base: "28px", lg: "32px" }}
            letterSpacing=".1008px"
          >
            {ReactHtmlParser(postData.content)}
          </Text>

          <Divider />

          <Text
            className={styles.postNote}
            color="gray.800"
            fontSize={{ base: "16px", lg: "18px" }}
            lineHeight={{ base: "28px", lg: "32px" }}
            letterSpacing=".1008px"
          >
            {ReactHtmlParser(postData.note)}
          </Text>
        </Flex>
      </Flex>

      <Footer />
    </Flex>
  );
}
