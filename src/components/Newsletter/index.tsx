import { Flex, IconButton, Input, InputGroup, InputLeftElement, InputRightElement, Spinner, Text, useToast } from "@chakra-ui/react";
import { useState } from "react";
import { BsArrowRightSquareFill } from "react-icons/bs";
import { HiMail, HiUser } from "react-icons/hi";


export function Newsletter() {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const toast = useToast();

  const [isLoading, setIsLoading] = useState(false);
  const [isInputNameActive, setIsInputNameActive] = useState(false);
  const [isInputMailActive, setIsInputMailActive] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    setIsLoading(true)
    
    try {
      const response = await fetch('https://api.brevo.com/v3/contacts', {
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

    if (response.ok) {
      toast({
        title: "Assinatura bem-sucedida!",
        status: "success",
        duration: 5000, 
        isClosable: true,
      });
    } else {
      // Exiba um toast de erro
      toast({
        title: "Falha na assinatura",
        description: "Por favor, tente novamente.",
        status: "error",
        duration: 5000,
        isClosable: true,
      });
    }
  } catch (error) {
    toast({
      title: "Erro na solicitação",
      description: "Ocorreu um erro ao processar sua solicitação. Por favor, tente novamente mais tarde.",
      status: "error",
      duration: 5000,
      isClosable: true,
    });
  }
    setIsLoading(false)
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
          <InputLeftElement
            color={isInputNameActive ? "yellow.500" : "gray.500"} 
            children={<HiUser />} 
          />
          <Input
            color="white"
            focusBorderColor="yellow.500"
            placeholder="Digite seu nome"
            _placeholder={{ color: "gray.500" }}
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            onFocus={() => setIsInputNameActive(true)}
            onBlur={() => setIsInputNameActive(false)}
            isRequired
            mr="2"
            mb="1"
          />
        </InputGroup>
        
        <InputGroup maxW="400px" >
          <InputLeftElement
            color={isInputMailActive ? "yellow.500" : "gray.500"} 
            children={<HiMail />}
          />
          <Input
            color="white"
            focusBorderColor="yellow.500"
            placeholder="Digite seu email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            onFocus={() => setIsInputMailActive(true)}
            onBlur={() => setIsInputMailActive(false)}
            isRequired
            mr="2"
          />
          <InputRightElement>
            <IconButton
              icon={ isLoading ? <Spinner size="4rem" color="yellow.500" /> : <BsArrowRightSquareFill size="4rem"/>}
              color="yellow.500" bg="none"
              _hover={{ color:"yellow.700", bg:"none" }}
              aria-label="SendMail"
              type="submit"
              mr="4"
              isLoading={isLoading}
            >
            </IconButton>
          </InputRightElement>
        </InputGroup>
      </form>
    </Flex>
  )
}