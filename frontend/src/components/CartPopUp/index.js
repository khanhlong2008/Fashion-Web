import React, { useContext } from 'react';
import CartCtx from '../../context/CartProvider/CartCtx';
import ProductItem from './ProductItem';
import '@dotlottie/player-component';

const CartPopUp = ({ show }) => {
  const { items, totalPrice } = useContext(CartCtx);
  if (items.length === 0) {
    return (
      <div className={`dropdown-menu cart-wrapper ${show ? 'show' : ''}`}>
        <dotlottie-player
          src="image/empty-basket.lottie"
          autoplay
          loop
          style={{ width: '100%', marginTop: '-40px' }}
        />

        <p className="text-center fw-bold my-3">
          Your cart is currently empty!!
        </p>
      </div>
    );
  }
  return (
    <div className={`dropdown-menu cart-wrapper ${show ? 'show' : ''}`}>
      <div className="list-product pb-3">
        {items.map(item => (
          <ProductItem {...item} key={item.id} />
        ))}
      </div>
      <div className="py-3">
        <div className="d-flex justify-content-between">
          <p>Total</p>
          <p>${`${totalPrice}`}</p>
        </div>
        <p className="text-primary">
          Taxes and shipping calculated at checkout
        </p>
      </div>

      <div className="d-flex justify-content-center">
        <button className="btn btn-dark mx-2">YOUR CART</button>
        <button className="btn btn-primary mx-2">CHECK OUT</button>
      </div>
    </div>
  );
};

export default CartPopUp;
