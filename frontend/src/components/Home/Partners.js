import React from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';

const Partners = () => {
  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    autoplay: true,
    speed: 500,
    cssEase: 'linear',
    autoplaySpeed: 8000,
    slidesToShow: 6,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 5,
          arrows: true,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 4,
          arrows: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          arrows: true,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 2,
          arrows: true,
        },
      },
    ],
  };

  return (
    <section className="container partner__container mb-5 d-block">
      <Slider {...settings}>
        <div className="partner-item">
          <img src="image/logo1.png" alt="" />
        </div>
        <div className="partner-item">
          <img src="image/logo2.png" alt="" />
        </div>
        <div className="partner-item">
          <img src="image/logo3.png" alt="" />
        </div>
        <div className="partner-item">
          <img src="image/logo4.png" alt="" />
        </div>
        <div className="partner-item">
          <img src="image/logo5.png" alt="" />
        </div>
        <div className="partner-item">
          <img src="image/logo6.png" alt="" />
        </div>
      </Slider>
    </section>
  );
};

export default Partners;
