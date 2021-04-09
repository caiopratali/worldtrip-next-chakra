import { Flex, Heading, Image, Text } from "@chakra-ui/react";

interface CityCardProps {
  city: string;
  country: string;
  banner: string;
  flag: string;
}

export function CityCard({ banner, city, country, flag }: CityCardProps) {
  return (
    <Flex flexDir="column" w="256px" h="279px" shadow="xl" borderRadius="8" >
      <Image src={banner} h="173px" w="100%" borderTopRadius="8" />
      <Flex p="26px" h="100%" justify="space-between" align="center" border="1px" borderColor="#ffba0880" borderBottomRadius="8">
        <Flex flexDir="column"  h="60px" justifyContent="space-between">
          <Heading fontSize="20px" fontWeight="semibold"  >{city}</Heading>
          <Text fontSize="16px" color="gray.500" >{country}</Text>
        </Flex>
        <Image src={flag} w="30px" h="30px" borderRadius="50%"/>
      </Flex>
    </Flex>
  );
}