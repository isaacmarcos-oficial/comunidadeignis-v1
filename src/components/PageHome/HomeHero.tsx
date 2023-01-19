import { Flex, Image } from "@chakra-ui/react";

export function HomeHero() {
  return (
  <Flex
    align="center"
    justify="center"
    mt={{ base:"4.125rem", lg:"8rem" }}  
  >
    <Image
      maxW="1320px"
      boxSize="100%"
      src="/Hero.png"
      borderRadius={{ lg:"10px", base:"none"}}
    />      
  </Flex>
  )
}