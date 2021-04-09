import { Flex, Image, Text, Box, color } from "@chakra-ui/react";
import Link from 'next/link';

interface HeaderProps {
  active?: boolean;
}

export function Header({ active = false }: HeaderProps) {
  return (
    <Flex
      align="center"
      justify="space-between"
      w="100%"
      mx="auto"
      my="20px"
      maxWidth={1160}
    >
      <Box fontSize="32px" _hover={{ color:"yellow" }}>
        <Link href="/">
          { active === true ? <a>{'<'}</a> : <p></p> }
        </Link>
      </Box>
      <Image src="/images/logo.png" />
      <Text></Text>
    </Flex>
  );
}