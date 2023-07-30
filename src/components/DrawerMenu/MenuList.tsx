import { Divider, Flex, Text } from "@chakra-ui/react";
import { NavLink, useLocation } from "react-router-dom";

interface AdressListProps {
  title: string;
  address?: string;
}

export function MenuList({ title, address = "" }: AdressListProps) {
  const location = useLocation();

  const isActive = location.pathname === address

  return (
    <Flex display="column" color="gray.300" _hover={{ color: "gray.50" }} lineHeight="3rem">
      <NavLink to={address}>
        <Text
          color={ isActive ?"yellow.600" : "gray.200"}
          fontSize="1.125rem"
          fontWeight="600"
          mt="2"
          transition=".15s"
          _hover={{ color: "yellow.600", ml:"2"}}
        >
          {title}
        </Text>
      </NavLink>

      <Divider opacity="10%" />
    </Flex>
  )
}