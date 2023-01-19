import { Flex, Image, Link } from "@chakra-ui/react";
import { DrawerMenu } from "./DrawerMenu";

export function Header() {


  return (
    <Flex w="100%" bgColor="gray.900" color="gray.50" h="4.125rem" align="center" justify="center" position="fixed" top="0" >
      <Flex w="100%" maxW="1320px" align="center" justify="space-between" p="1rem" >
        <DrawerMenu />
        <Link href="/" >
          <Image src="/Ser Ignis - Gold.png" w="40" />
        </Link>
        <Flex/>
      </Flex>
    </Flex>
  )
}