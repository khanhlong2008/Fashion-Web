import React from 'react';
import '@dotlottie/player-component';
import { useNavigate } from 'react-router-dom';

const NotFound = () => {
  const navigate = useNavigate();

  const handleReturn = () => {
    navigate('/');
  };
  return (
    <div className="notfound__container container d-block">
      <dotlottie-player
        src="../image/404notfound.lottie"
        autoplay
        loop
        style={{ height: '60vh', margin: '0 auto' }}
      />
      <div className="text-center mt-5">
        <button className="btn btn-primary" onClick={handleReturn}>
          Return to home
        </button>
      </div>
    </div>
  );
};

export default NotFound;
