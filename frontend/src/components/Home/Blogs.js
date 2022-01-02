import React from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import BlogItem from '../Blog/BlogItemHomePage';
const blogList = [
  {
    id: 'b1',
    title: 'Proin faucibus tristique',
    cover: 'image/blog1.png',
    date: '06 November',
    comments: 0,
    text: "Faded short sleeves t-shirt with high neckline. Soft and stretchy material for a comfortable fit. Accessorize with a straw hat and you're ready for summer!",
  },
  {
    id: 'b2',
    title: 'Viderer voluptatum te eum',
    cover: 'image/blog2.png',
    date: '06 November',
    comments: 0,
    text: "Faded short sleeves t-shirt with high neckline. Soft and stretchy material for a comfortable fit. Accessorize with a straw hat and you're ready for summer!",
  },
  {
    id: 'b3',
    title: 'Nec intellegat deseruisse',
    cover: 'image/blog3.png',
    date: '06 November',
    comments: 0,
    text: "Faded short sleeves t-shirt with high neckline. Soft and stretchy material for a comfortable fit. Accessorize with a straw hat and you're ready for summer!",
  },
  {
    id: 'b4',
    title: 'Upon of seasons earth',
    cover: 'image/blog4.png',
    date: '06 November',
    comments: 0,
    text: "Faded short sleeves t-shirt with high neckline. Soft and stretchy material for a comfortable fit. Accessorize with a straw hat and you're ready for summer!",
  },
  {
    id: 'b5',
    title: 'Lorem ipsum dolor sit amet',
    cover: 'image/blog5.png',
    date: '06 November',
    comments: 0,
    text: "Faded short sleeves t-shirt with high neckline. Soft and stretchy material for a comfortable fit. Accessorize with a straw hat and you're ready for summer!",
  },
  {
    id: 'b6',
    title: 'Scelerisque vestibulum urna',
    cover: 'image/blog6.png',
    date: '06 November',
    comments: 0,
    text: "Faded short sleeves t-shirt with high neckline. Soft and stretchy material for a comfortable fit. Accessorize with a straw hat and you're ready for summer!",
  },
];

const Blogs = () => {
  const settings = {
    dots: false,
    arrows: true,
    infinite: true,
    autoplay: true,
    speed: 500,
    cssEase: 'linear',
    autoplaySpeed: 8000,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  return (
    <section className="blog__wrapper container py-5 d-block">
      <p className="h3 text-center">LASTEST NEWS</p>
      <Slider {...settings}>
        {blogList.map(blog => (
          <BlogItem key={blog.id} {...blog} />
        ))}
      </Slider>
    </section>
  );
};

export default Blogs;
