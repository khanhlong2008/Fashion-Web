import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const DiscountSale = () => {
  const countDownDate = new Date('2023, 1, 1 0:00:00').getTime();
  const now = new Date().getTime();
  const distance = countDownDate - now;
  const navigate = useNavigate();
  const [timer, setTime] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  const [timeLeft, setTimeLeft] = useState(distance);
  useEffect(() => {
    let timer;
    if (distance > 0) {
      timer = setInterval(function () {
        setTimeLeft(state => state - 1000);
        if (distance === 1000) clearInterval(timer);
      }, 1000);
    }

    return () => clearInterval(timer);
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

    setTime(() => ({ days, hours, minutes, seconds }));
  }, [timeLeft]);

  const { days, minutes, hours, seconds } = timer;

  return (
    <section className="discount-sale__wrapper py-5">
      <div className="container">
        <div className="discount-sale__container text-center">
          <p className="h2 text-primary">For the best</p>
          <p className="h1">Discount Sale</p>
          <p>The Big Offer Day Extra 10% Off</p>
          <div className="discount-timer">
            <div>
              <p>
                {days} <span>Days</span>
              </p>
            </div>
            <div>
              <p>
                {hours} <span>Hours</span>
              </p>
            </div>
            <div>
              <p>
                {minutes} <span>Mins</span>
              </p>
            </div>
            <div>
              <p>
                {seconds} <span>Secs</span>
              </p>
            </div>
          </div>
          <button
            className="btn btn-primary"
            onClick={() => navigate('/collection/fashion')}
          >
            View Collection
          </button>
        </div>
      </div>
    </section>
  );
};

export default DiscountSale;
