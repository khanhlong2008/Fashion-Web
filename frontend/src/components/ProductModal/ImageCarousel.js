import React from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import ImageItem from './ImageItem';

const ImageCarousel = ({ listImage, handleImage }) => {
  const settings = {
    arrows: true,
    slidesToShow: 2,
    slidesToScroll: 1,
  };

  return (
    <section className="slider__container">
      <Slider {...settings}>
        {listImage.map((src, index) => (
          <ImageItem src={src} key={index} handleImage={handleImage} />
        ))}
      </Slider>
    </section>
  );
};

export default ImageCarousel;
