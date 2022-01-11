import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import FlashsaleSlider from '../Product/FlashSale/FlashsaleSlider';

const DiscountSale = () => {
  const promote = [9, 12, 15, 18, 21];
  let today = new Date().toLocaleString().split(',')[0];
  const timeNow = new Date().getHours();
  const target = promote.find(h => timeNow >= h && timeNow < h + 2) + 2 || 1;
  if (target === 1) {
    const dateArr = today.split('/');
    dateArr[1] = +dateArr[1] + 1;
    today = dateArr.join('/');
  }

  const countDownDate = new Date(`${today} ${target}:00`).getTime();
  const now = new Date().getTime();
  const distance = countDownDate - now;
  const navigate = useNavigate();
  const [timer, setTime] = useState({
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
    if (timeLeft > 0) {
      const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

      setTime(() => ({ days, hours, minutes, seconds }));
    }
  }, [timeLeft]);

  const { minutes, hours, seconds } = timer;

  return (
    <section className="discount-sale__wrapper">
      <div className="container d-block">
        <div className="discount-sale__container text-center">
          <p className="h1">Flash Sale</p>
          <div className="discount-timer">
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
        </div>
        <div
          className="d-flex justify-content-end mt-3"
          onClick={() => navigate('/flashsale')}
        >
          <button className="btn btn-primary">See all</button>
        </div>
        <FlashsaleSlider />
      </div>
    </section>
  );
};

export default DiscountSale;
