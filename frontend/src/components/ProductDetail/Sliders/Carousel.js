import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Item from "./Item";
const Carousel = ({ listImage, handleImage }) => {
  const settings = {
    arrows: true,
    infinite: true,
    autoplay: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
        },
      },
    ],
  };
  return (
    <section className="slider__container">
      <Slider {...settings}>
        {listImage.map((src, index) => (
          <Item src={src} key={index} handleImage={handleImage} />
        ))}
      </Slider>
    </section>
  );
};

export default Carousel;
