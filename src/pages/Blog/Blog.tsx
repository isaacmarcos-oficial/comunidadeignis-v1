import { Box, Flex, Heading, Image, Text } from "@chakra-ui/react";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";


export function Blog() {
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
          <Box display={{ lg:"flex", md:"flex", base:"table-column"}} lineHeight="1.5rem" pb="1.875rem" borderBottom="1px" borderColor="gray.200" >
            <Image display="block" w={{ lg:"295px", md:"295px", base:"100%" }} h="182px" mr="25px" objectFit="cover" src="https://arquivos.padrepauloricardo.org/uploads/destaque_do_blog/imagem/2038/cardeal-pell-relacionados.jpg" 
             />
            <Flex flexDirection="column" p="0.5rem" >
              <Flex fontSize="0.75rem" w="100%" >
                <Text color="yellow.800" fontWeight="700" mr="0.625rem" textTransform="uppercase" >
                  DOUTRINA  
                </Text>
                <Text color="gray.700"fontWeight="500" fontSize="0.8125rem" textTransform="lowercase" >
                  | 17.jan.2023  
                </Text>    
              </Flex>
              <Heading color="gray.900" fontSize="1.375rem" my="0.5rem" lineHeight="1.6875rem" mb=".375rem">
              O Cardeal Pell sobre o Céu e o Inferno
              </Heading>
              <Text color="gray.600" fontSize="1.0625rem" lineHeight="1.5625rem">
                “Toda a nossa atividade sacerdotal é determinada pelo número de pessoas que acreditamos que serão salvas. Se não há punição e todos serão salvos, por que deveríamos nos preocupar? Por que Jesus se incomodou com a Cruz?”
              </Text>
            </Flex>
          </Box>

          <Box display={{ lg:"flex", md:"flex", base:"table-column"}} lineHeight="1.5rem" pb="1.875rem" borderBottom="1px" >
            <Image display="block" w={{ lg:"295px", md:"295px", base:"100%" }} h="182px" mr="25px" objectFit="cover" src="https://arquivos.padrepauloricardo.org/uploads/destaque_do_blog/imagem/2038/cardeal-pell-relacionados.jpg" 
            />
            <Flex flexDirection="column">
              <Heading fontSize="1.375rem" my="0.5rem" lineHeight="1.6875rem" mb=".375rem">
              O Cardeal Pell sobre o Céu e o Inferno
              </Heading>
              <Text fontSize="1.0625rem" lineHeight="1.5625rem">
                “Toda a nossa atividade sacerdotal é determinada pelo número de pessoas que acreditamos que serão salvas. Se não há punição e todos serão salvos, por que deveríamos nos preocupar? Por que Jesus se incomodou com a Cruz?”
              </Text>
            </Flex>
          </Box>

          <Box display={{ lg:"flex", md:"flex", base:"table-column"}} lineHeight="1.5rem" pb="1.875rem" borderBottom="1px" >
            <Image display="block" w={{ lg:"295px", md:"295px", base:"100%" }} h="182px" mr="25px" objectFit="cover" src="https://arquivos.padrepauloricardo.org/uploads/destaque_do_blog/imagem/2038/cardeal-pell-relacionados.jpg" 
            />
            <Flex flexDirection="column">
              <Heading fontSize="1.375rem" my="0.5rem" lineHeight="1.6875rem" mb=".375rem">
              O Cardeal Pell sobre o Céu e o Inferno
              </Heading>
              <Text fontSize="1.0625rem" lineHeight="1.5625rem">
                “Toda a nossa atividade sacerdotal é determinada pelo número de pessoas que acreditamos que serão salvas. Se não há punição e todos serão salvos, por que deveríamos nos preocupar? Por que Jesus se incomodou com a Cruz?”
              </Text>
            </Flex>
          </Box>
          
        </Flex>
        
            <Box display={{lg:"flex", md:"none", base:"none" }} w="450px" h="700px" bgImage="/Lepanto.jpg" bgSize="cover" bgPosition="center" objectFit="contain" bgColor="gray.500" ml="50px" />
          <Flex>

        </Flex>
      </Flex>
      
    </Flex>


      </Flex>
      <Footer />
    </Flex>
  )
}