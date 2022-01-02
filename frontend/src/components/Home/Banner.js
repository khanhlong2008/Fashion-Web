import React from 'react';
import { Link } from 'react-router-dom';

const Banner = () => {
  return (
    <section className="banner__wrapper pb-5 container">
      <Link className="banner__container" to="/collection/men" rel="noreferrer">
        <img src="image/menwear.png" alt="" />
      </Link>
      <Link
        className="banner__container"
        to="/collection/women"
        rel="noreferrer"
      >
        <img src="image/womentop.png" alt="" />
      </Link>
    </section>
  );
};

export default Banner;
