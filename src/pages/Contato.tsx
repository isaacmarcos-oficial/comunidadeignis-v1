import { Button, Flex, FormLabel, Heading, Icon, Input, InputGroup, InputLeftElement, Textarea, Spinner, useToast } from "@chakra-ui/react";
import { FiUser, FiMail, FiArrowRightCircle } from "react-icons/fi";

import { useEffect, useState } from "react";
import emailjs from "@emailjs/browser";

import { Footer } from "../components/Footer";
import { Header } from "../components/Header";


export function Contato() {

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  const [show, setShow] = useState(false)
  const [loading, setLoading] = useState(false)

  const toast = useToast()

  function sendEmail(e: { preventDefault: () => void; }) {
    e.preventDefault();
    
    if (name === "" || email === "" || message === "") {
      return;
    }

    const templateParams = {
      from_name: name, 
      message: message,
      email: email
    }

    emailjs.send("ignisMessage", "template_85c1x3l", templateParams, "tJRJNy0msKGjq25Q4")
      .then((response) => {
        toast({
          title: 'Mensagem enviada com sucesso',
          status: 'success',
          duration: 9000,
          isClosable: true,
      })
      setName('')
      setEmail('')
      setMessage('')
      }, (error) => {
        toast({
          title: 'Ops! Houve um erro',
          description: "Por favor verifique se as informações foram preenchidas corretamente",
          status: 'warning',
          position: 'top-right',
          duration: 9000,
          isClosable: true,
      })
    })
  }

  const formInvalid = name === '' || email === '' || message === '';

  const handleSubmit = () => {
    setLoading(!loading);
    setShow(!show)
  }

  useEffect(() => {
    if (loading) {
      setTimeout(() => {
        setLoading(false);
      }, 3000);
    }
  }, [loading]);

  return (
    <Flex direction="column" align="center" justify="center">
      <Header />

      <Flex direction="column" my="2rem" mt="8rem" align="center" justify="center">

        <Flex
          direction={{ base:"column", lg:"row" }}
          w={{ base: "90%", lg: "100%" }}
          maxW="1320px"
          align="center"
          justify="center"
          px="2"
          gap={{ lg:"6rem", base:"4"}}
        >
          
          <Flex display="column" align="center" justify="center"  >
            <Heading fontSize="2rem" my="0.5rem" lineHeight="1.6875rem" mb=".5rem" color="yellow.800" textAlign={{ base:"center", md: "center", lg:"inherit" }}>
              Fale Conosco
            </Heading>

            <Flex direction={{ lg:"column", md:"row" }} wrap="wrap" gap={3} color="gray.500" m={{ lg:"4"}} align={{ base:"center", md:"center", lg:"start" }} justify={{ base:"center", md:"center", lg:"start" }}>
              <Flex>
                <Icon as={FiArrowRightCircle} mr="0.5rem" color='gray.500' />
                  Convite para Missão
              </Flex>
              <Flex>
                <Icon as={FiArrowRightCircle} mr="0.5rem" color='gray.500' />
                  Testemunho
              </Flex>
              <Flex>
                <Icon as={FiArrowRightCircle} mr="0.5rem" color='gray.500' />
                  Sugestões
              </Flex>
              <Flex>
                <Icon as={FiArrowRightCircle} mr="0.5rem" color='gray.500' />
                  Problemas técnicos
              </Flex>
              
            </Flex>
          </Flex>

          <Flex
            flexDirection="column"
            w={{ lg:"600px", base:"100%" }}
            bgColor="gray.800"
            borderRadius="10"
            justify="center"
            px="10"
            py="10"
          >
          
            <form onSubmit={sendEmail}>
                <FormLabel fontSize="16px" htmlFor="email" fontWeight="600" color="gray.300">
                  Nome
                </FormLabel>

              <InputGroup mt="-1" >
                <InputLeftElement
                  children={<Icon as={FiUser}
                  color="gray.400"
                />}/>
                <Input
                  name="name"
                  type="text"
                  color="gray.200"
                  focusBorderColor="yellow.500"
                  placeholder="Digite seu nome"
                  onChange={(e) => setName(e.target.value)}
                  value={name}
                  required
                />
              </InputGroup>

              <FormLabel mt="4" fontSize="16px" htmlFor="email" fontWeight="600" color="gray.300">
                  E-mail
                </FormLabel>

              <InputGroup mt="-1" >
                <InputLeftElement
                  children={<Icon as={FiMail}
                  color="gray.400"
                />}/>
                <Input
                  name="email"
                  type="email"
                  color="gray.200"
                  focusBorderColor="yellow.500"
                  placeholder="Digite seu e-mail"
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                  required
                />
              </InputGroup>  
                
              <FormLabel mt="4" fontWeight="600" color="gray.300">Mensagem</FormLabel>
              <InputGroup size='md' mt="-1" >
                  
                <Textarea
                  name="messeger"
                  color="gray.200"
                  focusBorderColor="yellow.500"
                  placeholder="Escreva sua mensagem"
                  onChange={(e) => setMessage(e.target.value)}
                  value={message}
                  required

                />

              </InputGroup >
                  
              <Button
                  mt="4" width="100%"
                  border="none" bgColor="yellow.500"
                  _focus={{ boxShadow: "none" }}
                  _hover={{ bg: 'yellow.600', }}
                  cursor="pointer"
                  type="submit"
                  disabled={formInvalid}
                  onClick={ handleSubmit }
                >
                  {!loading && "Enviar" }
                  {loading && <Spinner speed='0.85s'/> }
                </Button>

              
            </form>
          </Flex>

        </Flex>

      </Flex>
      
      <Footer />
    </Flex>
  )
}