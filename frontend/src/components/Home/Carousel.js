import React from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';

const Carousel = () => {
  const settings = {
    dots: true,
    arrows: true,
    infinite: true,
    autoplay: true,
    speed: 500,
    cssEase: 'linear',
    autoplaySpeed: 8000,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          fade: true,
          arrows: false,
        },
      },
    ],
  };

  return (
    <section className="banner__container">
      <Slider {...settings}>
        <div className="banner-1">
          <div className="banner-1__info">
            <p className="h2 mb-lg-4">
              <em>T-shirts</em>
            </p>
            <p className="h1 text-primary mb-0">Men's</p>
            <p className="h1 mb-lg-4">Fashion</p>
            <p className="d-none d-lg-block mb-lg-4">
              500+ Deals On Top Brands & Big Offer On First Order
            </p>
            <button className="btn btn-primary">SHOP NOW</button>
          </div>
          <div className="banner-1__background">
            <img src="image/banner2.png" alt="banner1" />
          </div>
        </div>
        <div className="banner-2">
          <div className="banner-2__info">
            <p className="h2 mb-lg-4">
              <em>Spring</em>
            </p>
            <p className="h1 text-primary mb-0">Trendy</p>
            <p className="h1 mb-lg-4">Fashion</p>
            <p className="d-none d-lg-block mb-lg-4">
              500+ Deals On Top Brands & Big Offer On First Order
            </p>
            <button className="btn btn-primary">SHOP NOW</button>
          </div>
          <div className="banner-2__background">
            <img src="image/banner1.png" alt="banner2" />
          </div>
        </div>
      </Slider>
    </section>
  );
};

export default Carousel;
