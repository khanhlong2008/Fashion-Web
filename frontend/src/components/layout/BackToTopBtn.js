import React, { useEffect } from 'react';

const BackToTopBtn = () => {
  useEffect(() => {
    const backToTopBtn = document.querySelector('#btn-back-to-top');
    window.addEventListener('scroll', () => {
      if (window.scrollY > 300) {
        backToTopBtn.classList.add('show');
      } else {
        backToTopBtn.classList.remove('show');
      }
    });

    backToTopBtn.addEventListener('click', () => {
      window.scrollTo(0, 0);
    });
  }, []);
  return (
    <div id="btn-back-to-top">
      <i className="bi bi-arrow-up-circle-fill text-primary btn"></i>
    </div>
  );
};

export default BackToTopBtn;
