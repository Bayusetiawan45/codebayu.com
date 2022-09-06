import { Box, Image } from '@chakra-ui/react';
import React from 'react'
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function AppSlider({image}) {
    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        speed: 500,
        autoplaySpeed: 2000
      };
  return (
    <Box width={{base:"20rem", lg:"35rem"}} height="100%" bg="white" alignItems="center" rounded="xl">
        <Slider {...settings}>
            {image.map((item, index) => (
                <Box key={index} padding={5} height={{base:"9rem", lg:"16rem"}} objectFit="cover" rounded="xl">
                    <Image src={item}/>
                 </Box>
            ))}
        </Slider>
    </Box>
  )
}
