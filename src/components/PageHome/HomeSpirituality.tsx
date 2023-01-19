
import { Flex, Icon, Text } from "@chakra-ui/react";
import { GiGothicCross } from 'react-icons/gi';

export function HomeSpirituality() {
  return (
    <Flex align="center" justify="center" >
      <Flex maxW="1320px" w="100%" justify="center" h={{ base: "150px", lg: "200px" }}>
      
        <Flex gap={{ base:"8", md:"12", lg:"20"}}>
          
          <Flex flexDirection="column" alignItems="center" justify="center">
            <Icon as={GiGothicCross} fontSize={{ base:"35", md:"40", lg:"50"}} color="yellow.600"/>
            <Text lineHeight="30px" fontSize={{ base: "18", md: "20", lg: "23" }} color="yellow.600" fontWeight="600" >
              Amor
            </Text>
          </Flex>

          <Flex flexDirection="column" alignItems="center" justify="center">
            <Icon as={GiGothicCross} fontSize={{ base:"35", md:"40", lg:"50"}} color="yellow.600"/>
            <Text lineHeight="30px" fontSize={{ base: "18", md: "20", lg: "23" }} color="yellow.600" fontWeight="600" >
              Adoração
            </Text>
          </Flex>

          <Flex flexDirection="column" alignItems="center" justify="center">
            <Icon as={GiGothicCross} fontSize={{ base:"35", md:"40", lg:"50"}} color="yellow.600"/>
            <Text lineHeight="30px" fontSize={{ base: "18", md: "20", lg: "23" }} color="yellow.600" fontWeight="600" >
              Sacrifício
            </Text>
          </Flex>

          <Flex flexDirection="column" alignItems="center" justify="center">
            <Icon as={GiGothicCross} fontSize={{ base:"35", md:"40", lg:"50"}} color="yellow.600"/>
            <Text lineHeight="30px" fontSize={{ base: "18", md: "20", lg: "23" }} color="yellow.600" fontWeight="600" >
              Missão
            </Text>
          </Flex>
        </Flex>
      
      </Flex>
      
    </Flex>
  )
}