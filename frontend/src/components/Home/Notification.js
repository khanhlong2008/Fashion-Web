import React from 'react';
import CartCtx from '../../context/CartProvider/CartCtx';
import { useContext } from 'react';

const Notification = () => {
  const { message } = useContext(CartCtx);
  return (
    <div className="notification__wrapper show">
      <p className="fw-bold mb-0 text-primary">{message}</p>
    </div>
  );
};

export default Notification;
