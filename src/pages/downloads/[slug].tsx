import { Flex, Heading, Text, Image, Button, Link } from "@chakra-ui/react";

import styles from './book.module.scss'

export function Book() {
  return (
    <Flex direction="column" align="center" justify="center">
      <Flex direction="column" w="100%" h={{ base:"none", lg:"80vh"}} align="center" justify="center" bgColor="#1c1c1c">
        <Flex direction={{ base:"column", lg:"row" }} mt={{ base:"5rem", lg:"15rem"}} align="center" justify="center">
          <Flex align="center" justify="center">
            <Image src="/Lepanto.jpg" borderRadius="10" h={{ base:"18rem", lg:"40rem"}} objectFit="cover" boxShadow='2xl' />
          </Flex>

          <Flex w={{ base:"90%", lg:"35%"}} ml={{ base:"none", lg:"5rem"}} >
            <Flex className={styles.postContent} direction="column" my="2rem" align="center" justify="center" >
              <Heading fontFamily="Gentium" color="#c39439" align="center" as={Text} fontSize={{ base: "1.875rem", lg: "2.625rem" }} >
                A benção da Epifania
              </Heading>
              
              <Text fontStyle="italic" color="#adadad" fontWeight="600" fontSize={{ base: "0.875rem", lg: "1rem" }}>
              escrita por Dom Antônio de Castro Mayer
              </Text>

              <Text mt="1.25rem" fontSize={{ base: "1rem", lg: "1.15rem" }} lineHeight={{ base: "1.625rem", lg: "2rem" }} color="#E8E7E8" >
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nostrum voluptatem vero, alias adipisci dolorum nobis necessitatibus omnis nemo itaque tenetur placeat saepe ab, quo esse error non voluptatibus debitis et.
              </Text>

              <Link href="/" download="exemplo.pdf" target="_blank" >
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