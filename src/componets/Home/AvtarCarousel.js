import React from "react";
import Slider from "react-slick";
import { Box, Typography } from "@mui/material";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { man } from "../../assets";

const AvtarCarousel = () => {
  const settings = {
    dots: true,
    arrows: true,
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

  return (
    <Slider {...settings}>
      {/* {[2, 3].map(() => ( */}
      <>
        <div className="bg-white center pt-50">
          <Typography variant="body1">
            આ કાળઝાળ સમયમાં સામયિક શરૂ કરવા બદલ તેમજ સામયિકના એક ઉત્તમ, બેનમૂન
            પ્રોડક્શન બદલ દિલથી અભિનંદન. અંકમાંથી પસાર થયો, ખાસ તો ‘આજીવન
            પ્રગતિની રાહે...’માં પંચમહાભૂતની વિગતોથી પ્રભાવિત થવાયું છે. સુજ્ઞ
            વાચકો માટે ઓછામાં ઘણું કહેવાયું છે. આવું કહેવું એ પણ સૂઝ-સમજ સાથેની
            એક આગવી કળા છે. આ સિવાય લગભગ તમામ આર્ટિકલ વાંચ્યા. લેખકો, સામે
            પત્રકાર, સર્વેએ સારું લખ્યું છે. દરેક લેખ નવોન્મેષથી ભરપૂર હોવાથી
            વાચકને અસર કરે એવા છે.
          </Typography>
        </div>
        <div className="center">
          <img
            alt="Remy Sharp"
            src={man}
            className="slider-text center avtar"
          />
        </div>
        <Typography variant="h6" className="center mt-10 c-blue">
          ધૈવત ત્રિવેદી
        </Typography>
        <Typography variant="body1" className="center c-white">
          વરિષ્ઠ પત્રકાર, નવલકથાકાર (અમદાવાદ)
        </Typography>
      </>
      {/* ))} */}
    </Slider>
  );
};

export default AvtarCarousel;
