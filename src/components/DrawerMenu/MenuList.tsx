import { Divider, Flex, Link, Text } from "@chakra-ui/react";

interface AdressListProps {
  title: string;
  adress?: string;
}

export function MenuList({title, adress}: AdressListProps) {
  return (
    <Flex display="column" color="gray.300" _hover={{ color: "gray.50" }} lineHeight="3rem">
      <Link  href={adress} style={{ textDecoration:"none" }}>
        <Text fontSize="1.125rem" fontWeight="600" mt="2">
          {title}
        </Text>
      </Link>

      <Divider opacity="10%" />

    </Flex>
  )
}