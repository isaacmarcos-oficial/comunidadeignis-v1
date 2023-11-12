import { Flex, Heading, Text, Image, Wrap, WrapItem } from "@chakra-ui/react";

import styles from "../../Styles/post.module.scss";

import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";

import { RichText } from "prismic-dom";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getPrismicClient } from "../../services/prismic";
import ReactHtmlParser from "react-html-parser";

export function EvangelhoPost() {
  const params = useParams();
  const slug = params.slug;

  const [evangelhoData, setEvangelhoData] = useState({
    slug: "",
    title: "",
    subtitle: "",
    banner: {
      url: "",
    },
    content: "",
    updatedAt: "",
  });

  const getEvangelho = async () => {
    const prismic = getPrismicClient();

    const response = await prismic.getByUID("evangelii", String(slug), {});
    setEvangelhoData({
      slug: response.uid!,
      banner: {
        url: response.data.banner.url,
      },
      title: RichText.asHtml(response.data.title),
      subtitle: RichText.asHtml(response.data.subtitle),
      content: RichText.asHtml(response.data.content),
      updatedAt: response.last_publication_date
        ? new Date(response.last_publication_date).toLocaleDateString("pt-BR", {
            day: "2-digit",
            month: "short",
            year: "numeric",
          })
        : "",
    });
  };

  useEffect(() => {
    getEvangelho();
  });

  return (
    <Flex direction="column" align="center" justify="center">
      <Header />
      <title>Comunidade Ignis | Post </title>

      <Flex mt="65px" mb="3rem" direction="column" align="center">
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
            bgImage={evangelhoData.banner.url}
            maxW="1350px"
            w="100%"
            h="100%"
            bgSize="cover"
          />
        </Flex>
        <Flex direction="column" w={{ base: "90%", lg: "780px" }}>
          <Flex direction="column" align="center" justify="center">
            <Heading
              color="gray.850"
              mt="2.25rem"
              fontFamily="Gentium"
              fontSize={{ base: "24px", lg: "36px" }}
              textAlign="center"
            >
              {ReactHtmlParser(evangelhoData.title)}
            </Heading>
            <Text
              mt=".5rem"
              fontStyle="italic"
              textAlign="center"
              color="gray.300"
              fontWeight="600"
              fontSize="14px"
              mb="6"
            >
              {ReactHtmlParser(evangelhoData.subtitle)}
            </Text>
          </Flex>
          <Text
            className={styles.postContent}
            color="gray.800"
            fontSize={{ base: "1rem", lg: "1.125rem" }}
            lineHeight={{ base: "1.75rem", lg: "2rem" }}
            letterSpacing=".0063rem"
          >
            {ReactHtmlParser(evangelhoData.content)}
          </Text>
        </Flex>
      </Flex>

      <Footer />
    </Flex>
  );
}
