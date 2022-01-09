import React from 'react';

const Policy = () => {
  return (
    <section className="policy__container container py-5">
      <div className="d-flex">
        <div className="icon-container">
          <img src="image/clock.png" alt="" />
        </div>
        <div>
          <p>ORDER BEFORE 16:00</p>
          <p>Next business day at home</p>
        </div>
      </div>
      <div className="d-flex">
        <div className="icon-container">
          <img src="image/moneyback.png" alt="" />
        </div>
        <div>
          <p>MONEY BACK</p>
          <p>14 days to change your mind</p>
        </div>
      </div>
      <div className="d-flex">
        <div className="icon-container">
          <img src="image/addproduct.png" alt="" />
        </div>
        <div>
          <p>1000 PRODUCT ADD</p>
          <p>Products added every day</p>
        </div>
      </div>
    </section>
  );
};

export default Policy;
