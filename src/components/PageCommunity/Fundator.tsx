import { Flex, Heading, Text, Image } from "@chakra-ui/react";

interface FundatorProps {
  title: string;
  description: string;
  image: string;
}

export function Fundator({ title, description, image }: FundatorProps) {
  return (
  <Flex direction="column" maxW="1320px" w="100%" mt="1rem" py="2rem" align="center" px={{ base: "3rem", lg: "6rem" }} bgColor="gray.900" >
    <Flex direction={{ base:"column-reverse", lg:"row-reverse" }} align="center" >
      <Flex direction="column" w={{ base:"100%", lg:"50%"}} mt={{ base:"2rem", md:"2rem", lg:"none" }}>
        <Heading fontSize="2rem" my="0.5rem" lineHeight="1.6875rem" mb=".5rem" color="yellow.800" textAlign={{ base:"center", md: "center", lg:"inherit" }}>
          {title}
        </Heading>

        <Text fontSize="1.0625rem" lineHeight="1.5625rem" color="gray.50" >
          {description}
        </Text>
      </Flex>

      <Flex align="center" maxW={{ base:"100vw", md:"500px", lg:"500px" }} w="100%" >
        <Image src={image} h={{ base:"250px", md:"300px"}} w="500px" objectFit="cover" mr={{ base:"none", lg:"3rem" }} />
      </Flex>
    </Flex>
    </Flex>
  )
}