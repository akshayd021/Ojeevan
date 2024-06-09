import React from "react";
import Slider from "react-slick";
import { Box } from "@mui/material";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import useViewport from "../../Context/useViewPort";

const ImageCarousel = () => {
  const {isMobile} = useViewport()
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: '5%',
    centerPadding: "9%",
    autoplay: true,
    autoplaySpeed: 3000,
  };

  const images = [
    "https://ojeevan.com/assets/magazine/m10.png", 
    "https://ojeevan.com/assets/magazine/m11.png",
    "https://ojeevan.com/assets/magazine/m9.png", 
    "https://ojeevan.com/assets/magazine/m9.png",
    "https://ojeevan.com/assets/magazine/m7.png",
    "https://ojeevan.com/assets/magazine/m9.png",
    "https://ojeevan.com/assets/magazine/m6.png",
    "https://ojeevan.com/assets/magazine/m4.png",
    "https://ojeevan.com/assets/magazine/m3.png",
    "https://ojeevan.com/assets/magazine/m1.png",

  ];

  return (
    <Box sx={{ width: isMobile? '100%' : 300, margin: "auto", overflow: "hidden" }}>
      <Slider {...settings}>
        {images.map((img, index) => (
          <Box key={index} sx={{ display: "flex", justifyContent: "center" }}>
            <img src={img} alt={`Slide ${index}`} style={{ width: "100%" }} />
          </Box>
        ))}
      </Slider>
    </Box>
  );
};

export default ImageCarousel;
