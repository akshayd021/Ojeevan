import React from "react";
import Slider from "react-slick";
import { Chip, Box } from "@mui/material";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Carousel = () => {
  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 7,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000,
    rtl: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const chips = [
    "સાહિત્યિક ઓટલો",
    "વિશેષ",
    "વેબ સ્ટોરીઝ",
    "ફિલ્મોસોફી",
    "લાઈફસ્ટાઇલ",
    "કોલમ",
  ];

  return (
    <Slider {...settings}>
      {chips.map((chip, index) => (
        <Box key={index} sx={{ margin: "0px" }}>
          <Chip
            label={chip}
            sx={{
              fontSize: 14,
              gap: 20,
              maxWidth: 200,
              width: "95%",
              margin: " 0 10px",
              backgroundColor: "#fff",
              color: "#92288d",
              "&:hover": {
                backgroundColor: "#92288d",
                color: "#fff",
                borderColor: "#fff",
                border: "2px solid",
              },
            }}
          />
        </Box>
      ))}
    </Slider>
  );
};

export default Carousel;
