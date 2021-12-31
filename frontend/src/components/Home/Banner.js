import React from 'react';

const Banner = () => {
  return (
    <section className="banner__wrapper pb-5 container">
      <a
        className="banner__container"
        href="/collections/men"
        target="_blank"
        rel="noreferrer"
      >
        <img src="image/menwear.png" alt="" />
      </a>
      <a
        className="banner__container"
        href="/collections/women"
        target="_blank"
        rel="noreferrer"
      >
        <img src="image/womentop.png" alt="" />
      </a>
    </section>
  );
};

export default Banner;
