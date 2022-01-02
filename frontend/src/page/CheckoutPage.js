import React, { useContext, useEffect } from 'react';
import { useState } from 'react';
import CheckoutProcess from '../components/CheckoutPage/CheckoutProcess';
import ContactInformation from '../components/CheckoutPage/ContactInformation';
import { Navigate, useLocation } from 'react-router-dom';
import CartContainer from '../components/CheckoutPage/CartContainer';
import CartCtx from '../context/CartProvider/CartCtx';
import Shipping from '../components/CheckoutPage/Shipping';

const CheckoutPage = () => {
  const [status, setStatus] = useState({
    info: false,
    shipping: false,
    payment: false,
  });
  const { items, isLoading } = useContext(CartCtx);
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const search = queryParams.get('step');

  useEffect(() => {
    window.scrollTo(0, 0);
    document.body.click();
  }, []);

  return items.length === 0 && !isLoading ? (
    <Navigate to="/cart" />
  ) : (
    <section className="checkout-wrapper container d-block">
      <div className="checkout-container">
        <div className="left-container">
          <h1>Aveda Sectioned Shopify Theme</h1>
          <div className="checkout-info">
            <CheckoutProcess status={status} search={search} />
            {search === 'contact_information' && <ContactInformation />}
            {search === 'shipping_method' && <Shipping />}
          </div>
        </div>
        <CartContainer />
      </div>
    </section>
  );
};

export default CheckoutPage;
