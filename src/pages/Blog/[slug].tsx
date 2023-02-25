import { Flex, Heading, Text, Image, Wrap, WrapItem } from "@chakra-ui/react";

import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";

import styles from './post.module.scss'

export function Post() {
  return (

    <Flex direction="column" align="center" justify="center">
      <Header />
      <title>Comunidade Ignis | Post </title>

      <Flex direction="column" >
        <Flex mb="48px" direction="column" >
          <Flex>
            <Wrap >
              <WrapItem >
                <Flex direction="column" align="center" justify="center">
                  <Flex  direction="column" w="100vw" h={{ base: "320px", lg: "450px" }} justify="center" align="center" bgColor="#000" zIndex="hide">
                    <Image className={styles.container} bgPosition="0% 15%" bgImage="/Lepanto.jpg" maxW="1350px" w="100%" h="100%" bgSize="cover"
                    />
                  </Flex>
                  <Flex direction="column" w={{ base: "90%", lg: "48.75rem" }}  >
                      <Flex direction="column" align="center" justify="center">
                        <Heading
                          color="gray.850" mt="36px" fontFamily="Gentium" fontSize={{ base: "1.5rem", lg: "2.25rem" }} textAlign="center">
                          O martírio de São Vicente
                        </Heading>
                        <Text mt=".5rem" fontStyle="italic" color="gray.300" fontWeight="600" fontSize=".875rem" mb="6" >
                        Padre Paulo Ricardo | 17.Jan.2023
                        </Text >
                      </Flex>
                    <Text className={styles.postContent} color="gray.800" fontSize={{ base: "16px", lg: "18px" }} lineHeight={{ base: "28px", lg: "32px" }}  letterSpacing=".1008px"
                    >
                      São Vicente foi um dos mais célebres mártires da Espanha. Nascido em Saragoça, de uma das melhores famílias daquela cidade, desde a sua juventude foi colocado sob a direção de Valério, bispo daquela igreja, que o instruiu com abundância nos dogmas da religião e também nas humanidades. Como Vicente se tornasse muito sábio, Valério ordenou-o diácono; e por ter o prelado uma limitação na fala, deu-lhe a missão de pregar. E o nosso santo cumpriu bem o seu ofício, convertendo grande número de pecadores, e até de pagãos.
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