import React, { useContext } from 'react';
import '@dotlottie/player-component';
import CartCtx from '../../context/CartProvider/CartCtx';
import { useNavigate } from 'react-router-dom';

const OrderSuccess = () => {
  const { isOrdered, returnToHome } = useContext(CartCtx);
  const navigate = useNavigate();

  if (!isOrdered) {
    navigate('/');
  }

  const handleReturn = () => {
    returnToHome();
    navigate('/');
  };

  return (
    <div className="order-success__container container d-block">
      <dotlottie-player
        src="../image/ordersuccess.lottie"
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

export default OrderSuccess;
