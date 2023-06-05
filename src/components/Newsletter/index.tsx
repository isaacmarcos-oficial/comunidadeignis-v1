import { Flex, IconButton, Input, InputGroup, InputLeftElement, InputRightElement, Text } from "@chakra-ui/react";
import { useState } from "react";
import { BsArrowRightSquareFill } from "react-icons/bs";
import { HiMail, HiUser } from "react-icons/hi";

import * as SibApiV3Sdk from '@sendinblue/client'

export function Newsletter() {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   console.log(`Email enviado: ${email}`);
  //   setEmail('');
  // }

  const handleSubmit = (e) => {
    e.preventDefault();
    const response = fetch('https://api.brevo.com/v3/contacts', {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
        'api-key': import.meta.env.VITE_BREVO_API_KEY
      },
      body: JSON.stringify({
        email,
        attributes: {
          NOME: name
        },
        listIds: [2],
      })
    });
    console.log(`Nome: ${name} | Email: ${email}`)
    setEmail('');
    setName('')
  }

  return (
    <Flex w={{ base:"100%", md:"400px"}} display="table-column" my="2rem" align="center" justify="center"  >
      
      <Text fontSize="xl" mb="2" textAlign="center" fontWeight="600" color="gray.100" w="100%">
          Assine nossa Newsletter
      </Text>
      
      <form onSubmit={handleSubmit} >
      <InputGroup maxW="400px" >
            <InputLeftElement color='gray.500' children={<HiUser />}  />
            <Input
              color="white"
              focusBorderColor="yellow.500"
              placeholder="Digite seu nome"
              _placeholder={{ color: "gray.500" }}
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              isRequired
              mr="2"
              mb="1"
            />
            
        </InputGroup>
        <InputGroup maxW="400px" >
            <InputLeftElement color='gray.500' children={<HiMail />}  />
            <Input
              color="white"
              focusBorderColor="yellow.500"
              placeholder="Digite seu email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              isRequired
              mr="2"
            />
            <InputRightElement>
              <IconButton
                icon={<BsArrowRightSquareFill size="4rem"/>}
                color="yellow.500" bg="none"
                _hover={{ color:"yellow.700", bg:"none" }}
                aria-label="SendMail"
                type="submit"
                mr="4"
              >
              </IconButton>
            </InputRightElement>
        </InputGroup>
      </form>
    </Flex>
  )
}