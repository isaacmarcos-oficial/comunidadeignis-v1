import { Flex, Image, Box, Text, Heading, Button } from "@chakra-ui/react";

export function HomeEvangelii() {
  return (
    <Flex w="100%" bgColor="#1D1D1B" mt="5rem" align="center" justify="center" py="5rem" borderTop="5px solid" borderColor="yellow.700">
      <Flex maxW="1320px" px={8}>

        <Flex display={{ base: "table-column", md: "table-column", lg: "flex" }} w="100%" align="center" justify="center" >
          
          <Image
            src="/Lepanto.jpg"
            w={{ base:"md", lg:"450px"}}
            h={{ base:"200px", lg:"250px"}}
            objectFit="cover"
            borderRadius="15"
            shadow="dark-lg"
          />

          <Box maxW="500px" mt={{ base:"1.5rem", lg:"none"}} ml={{ base:"none", lg:8 }} lineHeight="2rem" textAlign={{ base:"center", lg:"left"}}>

            <Text color="yellow.700" fontSize="md" fontWeight="bold">
              MEDITAÇÕES DOMINICAIS
            </Text>
              
            <Heading color="white" fontFamily="Gentium">
              Primeiro domingo do advento
            </Heading>

            <Text fontSize={["sm"]} color="gray.300" fontFamily="Gentium" fontStyle="italic">
              Jesus exagera no Evangelho de  hoje quando afirma não saber o dia nem a hora em que Ele voltará.    Cristo ocasionalmente faz tais exageros para enfatizar um ponto que, de  outra forma, poderíamos perder (ver  Mateus 5:34  ;  23:9  ;  Lucas 14:26  ). 
            </Text>

            <Button mt="6" bgColor="yellow.700" _hover={{ bgColor: "yellow.700", color: "white", opacity: "85%" }}>
              Leia agora
            </Button>
          </Box>

        </Flex>

      </Flex>
    </Flex>
  )
}