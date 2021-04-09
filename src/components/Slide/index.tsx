import SwiperCore, { Navigation, Pagination, Scrollbar } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Box, color, Flex, Heading, Img, Link, Text } from '@chakra-ui/react';

import 'swiper/swiper.min.css';
import "swiper/components/navigation/navigation.min.css";
import "swiper/components/pagination/pagination.min.css";
import { NavLink } from '../NavLink';

SwiperCore.use([Navigation, Pagination, Scrollbar]);

interface SlideProps {
  continents: Continent[];
}

interface Continent {
  id: number;
  name: string;
  subtitle: string;
  banner: string;
}

export function Slide({ continents }: SlideProps) {
  return (
   <Box w={1300} h={450}>
      <Swiper
      slidesPerView={1}
      navigation
      spaceBetween={0}
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      {
        continents.map(continent => (
          <SwiperSlide key={continent.id}>
          <Img src={continent.banner} objectFit="cover"  boxSize="100%" position="absolute"/>
          <Flex position="relative" justify="center" align="center" height={450} flexDir="column">
            <NavLink url={`/continents/${continent.id}`}>
              {continent.name}
            </NavLink>
            <Text fontSize="24px" fontWeight="bold" color="gray.100">{continent.subtitle}</Text>
          </Flex>
        </SwiperSlide>
        ))
      }
    </Swiper>
   </Box>
  );
};