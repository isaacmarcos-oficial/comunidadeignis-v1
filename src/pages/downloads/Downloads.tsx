import { Button, Flex, Heading, Image, Text, Wrap } from "@chakra-ui/react";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";


export function Downloads() {

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
              
              <Flex minH="450px" maxH="450px" bgColor="gray.100" style={{ textDecoration:"none" }} mb="-3rem" direction="column" align="center" maxW={{ base:"100%", md:"400px", lg:"300px" }} borderRadius="10" >
                <Image objectFit="cover" w="100%" minH="180px" maxH="180px" src="/Lepanto.jpg" borderTopRadius="10" mb="2" />
                <Flex direction="column" align="center" justify="space-between" p="1rem" h="100%"  >
                  <Flex direction="column">
                    <Heading as={Text} w="100%" fontSize="18px" lineHeight="1.5rem" align="center" mb="1rem" _hover={{ color: "yellow.800" }} cursor="pointer" >
                      A benção da Epifania do Senhor
                    </Heading>
                    <Text w="100%" textAlign="justify" _hover={{ color: "yellow.800" }} cursor="pointer" >
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quod maiores voluptates neque nihil ad rem omnis aut fugit! Ipsa architecto ullam ipsam...
                    </Text>
                  </Flex>

                  <Button bgColor="gray.600" color="gray.50" _hover={{ bgColor: "yellow.800", zoom:"1rem" }} w="100%" >
                    DOWNLOAD
                  </Button>
                </Flex>
              </Flex>
              
              <Flex minH="450px" maxH="450px" bgColor="gray.100" style={{ textDecoration:"none" }} mb="-3rem" direction="column" align="center" maxW={{ base:"100%", md:"400px", lg:"300px" }} >
                <Image objectFit="cover" w="100%" minH="180px" maxH="180px" src="/Lepanto.jpg" borderTopRadius="10" mb="2" />
                <Flex direction="column" align="center" justify="space-between" p="1rem" h="100%"  >
                  <Flex direction="column">
                    <Heading as={Text} w="100%" fontSize="18px" lineHeight="1.5rem" align="center" mb="1rem" _hover={{ color: "yellow.800" }} cursor="pointer" >
                      A benção da Epifania do Senhor
                    </Heading>
                    <Text w="100%" textAlign="justify" _hover={{ color: "yellow.800" }} cursor="pointer" >
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quod maiores voluptates neque nihil ad rem omnis aut fugit! Ipsa architecto ullam ipsam...
                    </Text>
                  </Flex>

                  <Button  mt="1rem" bgColor="gray.600" color="gray.50" _hover={{ bgColor: "yellow.800", zoom:"1rem" }} w="100%" >
                    DOWNLOAD
                  </Button>
                </Flex>
              </Flex>

              <Flex minH="450px" maxH="450px" bgColor="gray.100" style={{ textDecoration:"none" }} mb="-3rem" direction="column" align="center" maxW={{ base:"100%", md:"400px", lg:"300px" }} >
                <Image objectFit="cover" w="100%" minH="180px" maxH="180px" src="/Lepanto.jpg" borderTopRadius="10" mb="2" />
                <Flex direction="column" align="center" justify="space-between" p="1rem" h="100%"  >
                  <Flex direction="column">
                    <Heading as={Text} w="100%" fontSize="18px" lineHeight="1.5rem" align="center" mb="1rem" _hover={{ color: "yellow.800" }} cursor="pointer" >
                      A benção da Epifania do Senhor
                    </Heading>
                    <Text w="100%" textAlign="justify" _hover={{ color: "yellow.800" }} cursor="pointer" >
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quod maiores voluptates neque nihil ad rem omnis aut fugit! Ipsa architecto ullam ipsam...
                    </Text>
                  </Flex>

                  <Button  mt="1rem" bgColor="gray.600" color="gray.50" _hover={{ bgColor: "yellow.800", zoom:"1rem" }} w="100%" >
                    DOWNLOAD
                  </Button>
                </Flex>
              </Flex>

              <Flex minH="450px" maxH="450px" bgColor="gray.100" style={{ textDecoration:"none" }} mb="-3rem" direction="column" align="center" maxW={{ md:"100%", lg:"300px" }} >
                <Image objectFit="cover" w="100%" minH="180px" maxH="180px" src="/Lepanto.jpg" borderTopRadius="10" mb="2" />
                <Flex direction="column" align="center" justify="space-between" p="1rem" h="100%"  >
                  <Flex direction="column">
                    <Heading as={Text} w="100%" fontSize="18px" lineHeight="1.5rem" align="center" mb="1rem" _hover={{ color: "yellow.800" }} cursor="pointer" >
                      A benção da Epifania do Senhor
                    </Heading>
                    <Text w="100%" textAlign="justify" _hover={{ color: "yellow.800" }} cursor="pointer" >
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quod maiores voluptates neque nihil ad rem omnis aut fugit! Ipsa architecto ullam ipsam...
                    </Text>
                  </Flex>

                  <Button  mt="1rem" bgColor="gray.600" color="gray.50" _hover={{ bgColor: "yellow.800", zoom:"1rem" }} w="100%" >
                    DOWNLOAD
                  </Button>
                </Flex>
              </Flex>

              <Flex minH="450px" maxH="450px" bgColor="gray.100" style={{ textDecoration:"none" }} mb="-3rem" direction="column" align="center" maxW={{ md:"100%", lg:"300px" }} >
                <Image objectFit="cover" w="100%" minH="180px" maxH="180px" src="/Lepanto.jpg" borderTopRadius="10" mb="2" />
                <Flex direction="column" align="center" justify="space-between" p="1rem" h="100%"  >
                  <Flex direction="column">
                    <Heading as={Text} w="100%" fontSize="18px" lineHeight="1.5rem" align="center" mb="1rem" _hover={{ color: "yellow.800" }} cursor="pointer" >
                      A benção da Epifania do Senhor
                    </Heading>
                    <Text w="100%" textAlign="justify" _hover={{ color: "yellow.800" }} cursor="pointer" >
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quod maiores voluptates neque nihil ad rem omnis aut fugit! Ipsa architecto ullam ipsam...
                    </Text>
                  </Flex>

                  <Button  mt="1rem" bgColor="gray.600" color="gray.50" _hover={{ bgColor: "yellow.800", zoom:"1rem" }} w="100%" >
                    DOWNLOAD
                  </Button>
                </Flex>
              </Flex>

              

              <Flex minH="450px" maxH="450px" bgColor="gray.100" style={{ textDecoration:"none" }} mb="-3rem" direction="column" align="center" maxW={{ md:"100%", lg:"300px" }} >
                <Image objectFit="cover" w="100%" minH="180px" maxH="180px" src="/Lepanto.jpg" borderTopRadius="10" mb="2" />
                <Flex direction="column" align="center" justify="space-between" p="1rem" h="100%"  >
                  <Flex direction="column">
                    <Heading as={Text} w="100%" fontSize="18px" lineHeight="1.5rem" align="center" mb="1rem" _hover={{ color: "yellow.800" }} cursor="pointer" >
                      A benção da Epifania do Senhor
                    </Heading>
                    <Text w="100%" textAlign="justify" _hover={{ color: "yellow.800" }} cursor="pointer" >
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quod maiores voluptates neque nihil ad rem omnis aut fugit! Ipsa architecto ullam ipsam...
                    </Text>
                  </Flex>

                  <Button  mt="1rem" bgColor="gray.600" color="gray.50" _hover={{ bgColor: "yellow.800", zoom:"1rem" }} w="100%" >
                    DOWNLOAD
                  </Button>
                </Flex>
              </Flex>

            </Wrap>
          </Flex>
        </Flex>
      </Flex>


      <Footer />
    </Flex>
  )
}