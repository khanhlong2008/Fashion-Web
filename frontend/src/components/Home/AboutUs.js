import React from 'react';
import { useNavigate } from 'react-router-dom';

const AboutUs = () => {
  let navigate = useNavigate();
  return (
    <section className="container about-us__container py-5">
      <div className="about-us__img">
        <img src="image/aboutusbanner.png" alt="about us banner" />
      </div>
      <div className="about-us__info">
        <p className="text-primary fw-bold">
          <em>ALL ABOUT US</em>
        </p>
        <p className="h1">Summer Fashion</p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum
          suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan
          lacus vel facilisis.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum
          suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan
          lacus vel facilisis.
        </p>
        <button
          className="btn btn-dark"
          onClick={() => navigate('/pages/aboutus')}
        >
          Read more
        </button>
      </div>
    </section>
  );
};

export default AboutUs;
