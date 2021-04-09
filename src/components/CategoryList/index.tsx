import { Box, Flex, Heading, Image } from "@chakra-ui/react";

export function CategoryList() {
  return (
    <Flex 
      w={1160}
      h={145}
      align="center"
      justify="space-between"
      my="80px"
      mx="auto"
    >
      <Flex align="center" justify="center" flexDir="column"  >
        <Image src="/images/cocktail.svg" w={85} h={85} />
        <Heading fontSize="24px" fontWeight="semibold" mt="24px">vida noturna</Heading>
      </Flex>
      <Flex align="center" justify="center" flexDir="column" >
        <Image src="/images/surf.svg" w={85} h={85} />
        <Heading fontSize="24px" fontWeight="semibold" mt="24px">praia</Heading>
      </Flex>
      <Flex align="center" justify="center" flexDir="column" >
        <Image src="/images/building.svg" w={85} h={85} />
        <Heading fontSize="24px" fontWeight="semibold" mt="24px">moderno</Heading>
      </Flex>
      <Flex align="center" justify="center" flexDir="column" >
        <Image src="/images/museum.svg" w={85} h={85} />
        <Heading fontSize="24px" fontWeight="semibold" mt="24px">clássico</Heading>
      </Flex>
      <Flex align="center" justify="center" flexDir="column" >
        <Image src="/images/earth.svg" w={85} h={85} />
        <Heading fontSize="24px" fontWeight="semibold" mt="24px">e mais...</Heading>
      </Flex>
    </Flex>
  );
}