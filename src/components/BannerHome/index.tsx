import { Flex, Box, Heading, Text, Image } from "@chakra-ui/react";

export function BannerHome() {
  return (
    <Flex 
      h={368} 
    >
      <Box
        bgImage="url('/images/background.png')"
        bgPosition="center"
        bgRepeat="no-repeat"
        bgSize="cover"
        w="100%"
        h={335}
        position="absolute"
        left={0}
      >
      </Box>
      <Flex
          w={1160}
          mx="auto"
          align="center"
          justify="space-between"
        >
          <Flex color="white" flexDir="column" maxWidth={524} position="relative">
            <Heading fontSize="36px" lineHeight="56px">5 Continentes, infinitas possibilidades.</Heading>
            <Text fontSize="20px" lineHeight="40px" marginTop="5">Chegou a hora de tirar do papel a viagem que você sempre sonhou.</Text>
          </Flex>
          <Image src="/images/airplane.png" w={417} h={270} position="relative" bottom={-12} />
        </Flex>
    </Flex>
  );
}