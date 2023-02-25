import { Drawer, DrawerCloseButton, DrawerContent, DrawerHeader, DrawerOverlay, Flex, Link, useDisclosure, Divider, DrawerBody, Button, DrawerFooter, Text } from '@chakra-ui/react'
import { GiHamburgerMenu } from 'react-icons/gi'

import Logo from '../Logo'
import { MenuList } from './MenuList'

export function DrawerMenu() {
  const { isOpen, onOpen, onClose } = useDisclosure()
  
  return (
    <>
      <Flex color="gray.300" _hover={{ color: "gray.50" }} align="center" >
        <Link
          onClick={onOpen} >
          <GiHamburgerMenu size="1.5rem" />
        </Link>
      </Flex>
      
      <Drawer
        isOpen={isOpen}
        placement='left'
        onClose={onClose}
      >
        <DrawerOverlay />
        <DrawerContent bgColor="gray.900">
          <DrawerCloseButton
            color="gray.100"
            _hover={{ color: "gray.50" }}
            _focus={{ boxShadow: "none" }}
          />

          <DrawerHeader>
            <Flex justify="center" align="center">
              <Logo/>
            </Flex>
          </DrawerHeader>

          <Divider />
          
          <DrawerBody color="gray.100">

            <Flex flexDirection="column">
              <MenuList title="Início" adress="/" />
              <MenuList title="A Comunidade" adress="/comunidade" />
              <MenuList title="Baluartes" adress="/baluartes" />
              <MenuList title="Downloads" adress="/downloads" />
              <MenuList title="Blog" adress="/blog" />
              <MenuList title="Contato" adress="/contato" />
            </Flex>

          
            <Flex flexDirection="column" gap="4" mt="6" color="gray.800">
              <Button as={Link} _focus={{ boxShadow: "none" }} _hover={{ bgColor: "yellow.500" }} href="https://escola.comunidadeignis.com.br/" target="_blank" style={{ textDecoration:"none" }} >
                  Escola de Formação
              </Button>
              <Button as={Link} _focus={{ boxShadow: "none" }} _hover={{ bgColor: "yellow.500" }} href="https://edicoes-ignis.lojaintegrada.com.br/" target="_blank" style={{ textDecoration:"none" }} >
                Edições Ignis
              </Button>
            </Flex>
          </DrawerBody>

          <DrawerFooter>
            <Flex align="center" justify="center" color="gray.300" w="100%" fontSize="0.75rem">
              <Text textAlign="center">
                Todos os direitos reservados a <br/> Comunidade Católica Missionária Ignis
              </Text>
            </Flex>
          </DrawerFooter>

        </DrawerContent>
      </Drawer>
    </>
  )
}