import { Flex, Heading, Text } from "@chakra-ui/react";
import { GetStaticProps } from "next";

import { BannerHome } from "../components/BannerHome";
import { CategoryList } from "../components/CategoryList";
import { Header } from "../components/Header";
import { Slide } from "../components/Slide";

import { api } from "../services/api";

interface HomeProps {
  continents: Continent[];
}

interface Continent {
  id: number;
  name: string;
  subtitle: string;
  banner: string;
}

export default function Home({ continents }: HomeProps) {
  return (
    <Flex
      w="98vw"
      h="100vh"
      flexDirection="column"
      align="center"
    >
      <Header />
      <BannerHome />
      <CategoryList />
      <Flex w={90} h={1} background="gray.700"/>
      <Flex my="52px">
        <Heading 
          fontSize="36px" 
          fontWeight="medium" 
          textAlign="center" 
        >
          Vamos nessa? 
          <Text>Então escolha seu continente</Text>
        </Heading>
      </Flex>
      <Flex paddingBottom={10}>
        <Slide continents={continents} />
      </Flex>
    </Flex>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const data = await api.get('/continents').then(response => response.data);

  const continents = data.map(continent => {
    return {
      id: continent.id,
      name: continent.name,
      subtitle : continent.subtitle,
      banner: continent.banner
    }
  })

  console.log(continents)

  return {
    props: {
      continents
    }
  }
}