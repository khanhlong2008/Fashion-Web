import React from 'react';
import { Link } from 'react-router-dom';

const CheckoutProcess = ({ status: { info, shipping, payment }, search }) => {
  return (
    <div className="checkout-process">
      <Link to="/cart">Cart</Link>
      <span>{' > '}</span>
      {search === 'contact_information' ? (
        <strong>Information</strong>
      ) : info ? (
        <Link to="/checkouts/id?step=contact_information">Infomation</Link>
      ) : (
        <span>Information</span>
      )}

      <span>{' > '}</span>
      {search === 'shipping_method' ? (
        <strong>Shipping</strong>
      ) : shipping ? (
        <Link to="/checkouts/id?step=shipping_method">Infomation</Link>
      ) : (
        <span>Shipping</span>
      )}

      {/* <span>{' > '}</span>
      {search === 'payment_method' ? (
        <strong>Payment</strong>
      ) : payment ? (
        <a href="/checkouts/61cc662277177893679d56d5?step=payment_method">
          Infomation
        </a>
      ) : (
        <span>Payment</span>
      )} */}
    </div>
  );
};

export default CheckoutProcess;
