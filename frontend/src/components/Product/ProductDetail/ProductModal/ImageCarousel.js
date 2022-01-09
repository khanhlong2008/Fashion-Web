import React from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import ImageItem from './ImageItem';

const ImageCarousel = ({ listImage, handleImage }) => {
  const settings = {
    arrows: true,
    infinite: true,
    autoplay: true,
    slidesToShow: listImage.length >= 4 ? 4 : 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          arrows: false,
        },
      },
    ],
  };

  return (
    <section className="slider__container">
      <Slider {...settings}>
        {listImage.map(({ imgItem }, index) => (
          <ImageItem src={imgItem} key={index} handleImage={handleImage} />
        ))}
      </Slider>
    </section>
  );
};

export default ImageCarousel;
