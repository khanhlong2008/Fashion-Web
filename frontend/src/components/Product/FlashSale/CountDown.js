import React, { useState, useEffect } from 'react';

const CountDown = ({ today, target }) => {
  const countDownDate = new Date(`${today} ${target}:00`).getTime();
  const now = new Date().getTime();
  const distance = countDownDate - now;

  const [timer, setTime] = useState({
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  const [timeLeft, setTimeLeft] = useState(distance);
  useEffect(() => {
    setTimeLeft(distance);
    // eslint-disable-next-line
  }, [target]);

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

  useEffect(() => {}, []);

  const { minutes, hours, seconds } = timer;
  return (
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
  );
};

export default CountDown;
