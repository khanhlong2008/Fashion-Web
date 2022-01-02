import React from 'react';

const CartItem = ({ front, quantity, title, totalPrice }) => {
  return (
    <div className="product-info">
      <div className="product-thumbnail">
        <div className="product-img">
          <img src={front} alt="" />
        </div>
        <span className="quantity">{quantity}</span>
      </div>
      <div>
        <p>{title}</p>
        <p className="text-primary">L / Red</p>
      </div>
      <p>${totalPrice.toFixed(2)}</p>
    </div>
  );
};

export default CartItem;
