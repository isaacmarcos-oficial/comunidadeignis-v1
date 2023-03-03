import { Button, Flex, Image, Input, InputGroup, InputLeftElement, InputRightElement, Link, Text } from "@chakra-ui/react";
import { HiMail } from "react-icons/hi"
import { BsArrowRightSquareFill } from "react-icons/bs";
import { AddContactToList } from 'sib-api-v3-typescript'

import axios from 'axios';
import { useState } from "react";


export function Footer() {
  const [email, setEmail] = useState("");

  const handleEmailChange = (event) => {
    setEmail(event.target.value)
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(email)
    setEmail("")
  }

  return (
    <Flex w="100%" py="3rem" mt="3rem" bgColor="blackAlpha.900" align="center" justify="center" borderY="5px solid" borderColor="yellow.700" >

      <Flex flexDirection="column">
        <Flex flexDirection={{ base:"column", md:"row", lg:"row" }} maxW="1320px" w="100%" align="center" justify="space-between" px={{ base: "4rem", lg:"none"}}>

          <Flex flexDirection={{ base:"column", md:"row", lg:"row" }} align="center" >
            <Image src="/logo.svg" h={{ base:"6rem", lg:"8rem"}} mr={{ base:"none", md:"6"}} mb={{ base:"1rem", md:"none" }} />
            <Text w={{ base:"70%", md:"50%", lg:"30%" }} fontSize={{ base:"sm", md:"md"}} textAlign={{ base:"center", md:"initial", lg:"initial" }} color="gray.300" fontFamily="Gentium" fontStyle="italic">
              Defender a Doutrina da Igreja
              com eterno amor e dar a vida 
              se preciso for
            </Text>
          </Flex>
          

          <Flex w={{ base:"100%", md:"400px"}} display="table-column" my="2rem" align="center" justify="center" >
            <form
              action="process.E"
              onSubmit={handleSubmit}
            >
              <Text fontSize="2xl" textAlign="center" fontWeight="600" color="gray.100">
                Assine nossa Newsconstter
              </Text>

              <InputGroup>
                  <InputLeftElement children={<HiMail color='gray.300'/>}  />
                  <Input
                    color= "white"
                    type="email"
                    placeholder="Digite seu email"
                    value={email}
                    onChange={handleEmailChange}
                  />
                  <InputRightElement as={Link} color="yellow.500" bg="none" fontSize="4rem" type="submit" onClick={handleSubmit}>
                    <BsArrowRightSquareFill />
                  </InputRightElement>
              </InputGroup>
            </form>
          </Flex>
          
        </Flex>
      
        <Flex maxW="1320px" w="100%" mt="3rem" align="center" justify="center">
          <Text fontSize="sm" color="yellow.800" textAlign="center">
            ©2023 – Associação Maria Auxílio dos Cristãos | Todos os Direitos Reservados<br/>
            CNPJ: 30.110.931/0001-03 | Votuporanga, SP
          </Text>
        </Flex>
      </Flex>

    </Flex>
  )
}