import { Box, Flex, Grid, Heading, Image, Text, Tooltip } from '@chakra-ui/react';
import { GetStaticPaths, GetStaticProps } from 'next';
import { CityCard } from '../../components/CityCard';

import { Header } from '../../components/Header'
import { api } from '../../services/api';

interface ContinentProps {
  continent: Continent;
}

interface Continent {
  id: string;
  name: string;
  banner: string;
  description: string;
  countries: string;
  languages: string;
  cities: Cities[];
}

interface Cities {
  id: number;
  name: string;
  country: string;
  banner: string;
  flag: string;
}

export default function Continent({ continent }: ContinentProps) {
  return (
    <Box pb="80px">
      <Header active />
      <Flex h={500} bg="black" opacity="10">
        <Flex bg="black" opacity="60%">
          <Image src={continent.banner} h={500} w="100vw" position="absolute" />
        </Flex>
        <Flex position="relative" w={1160} h={500} align="flex-end" mx="auto" py="72px">
          <Heading color="gray.50" fontSize="48px" fontWeight="semibold">{continent.name}</Heading>
        </Flex>
      </Flex>
      <Flex w={1160} mx="auto" justify="space-between" align="center" py="80px">
        <Text w={600} fontSize="24px" align="justify">{continent.description}</Text>
        <Flex w={490} justify="space-between">
          <Flex flexDir="column" align="center">
            <Heading color="yellow" fontFamily="48px" fontWeight="semibold">{continent.countries}</Heading>
            <Text fontSize="24px" fontWeight="semibold">países</Text>
          </Flex>
          <Flex flexDir="column" align="center">
            <Heading color="yellow" fontFamily="48px" fontWeight="semibold">{continent.languages}</Heading>
            <Text fontSize="24px" fontWeight="semibold">línguas</Text>
          </Flex>
          <Flex flexDir="column" align="center">
            <Heading color="yellow" fontFamily="48px" fontWeight="semibold">{continent.cities.length}</Heading>
            <Flex w="186px" justify="space-between">
              <Text fontSize="24px" fontWeight="semibold">cidades +100</Text>
              <Tooltip label="Cidades +100 são as que estão entre as 100 cidades mais visitadas do mundo" aria-label="A tooltip">
                <Image src="/images/info.svg"/>
              </Tooltip>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
      <Flex w={1166} mx="auto" flexDir="column" justifyContent="center">
        <Heading mb="40px" fontSize="36px" fontWeight="medium">Cidades +100</Heading>
        <Grid  templateColumns="repeat(4, 1fr)" gap={10}>
        {
          continent.cities.map(city => (
            <CityCard
              key={city.id} 
              banner={city.banner} 
              city={city.name} 
              flag={city.flag} 
              country={city.country}
          />
          ))
        }
        </Grid>
      </Flex>
    </Box>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: 'blocking'
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { id } = params;   
  

  const response = await api.get(`continents/${id}`).then(data => data.data);

  const continent = {
    id,
    name: response.name,
    banner: response.banner,
    description: response.description,
    countries: response.countries,
    languages: response.languages,
    cities: response.cities
  }

  return {
    props: {
      continent
    },
  }
}