import React, { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import ListCart from '../components/Cart/ListCart';
import LoadingSpinner from '../components/layout/LoadingSpiner';
import CartCtx from '../context/CartProvider/CartCtx';

const Cart = () => {
  const { items, isLoading } = useContext(CartCtx);
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
    document.body.click();
  }, []);

  return (
    <section className="container d-block shopping-cart__container">
      <h1 className="text-center">Your Shopping Cart</h1>
      {isLoading && <LoadingSpinner />}
      {items.length > 0 && <ListCart />}
      {!isLoading && items.length === 0 && (
        <div className="empty-cart">
          <p>Your cart is currently empty</p>
          <button className="btn btn-primary" onClick={() => navigate('/')}>
            CONTINUE SHOPPING
          </button>
        </div>
      )}

      <div className="support">
        <div className="support__detail d-flex align-items-center">
          <img
            src="https://cdn.shopify.com/s/files/1/0054/0567/1479/files/serviceicon1_5751f14d-5e26-48aa-b03b-f3f5d9817389.png?v=1632227750"
            alt=""
          />
          <div className="ms-2">
            <p className="fw-bold">Free Delivery</p>
            <p>Lorem Ipsum dummy</p>
          </div>
        </div>
        <div className="support__detail d-flex align-items-center">
          <img
            src="https://cdn.shopify.com/s/files/1/0054/0567/1479/files/serviceicon2_e90da2f5-c3ca-437f-aeb7-ee334261083a.png?v=1632227764"
            alt=""
          />
          <div className="ms-2">
            <p className="fw-bold">Big Savings</p>
            <p>Lorem Ipsum dummy</p>
          </div>
        </div>
        <div className="support__detail d-flex align-items-center">
          <img
            src="https://cdn.shopify.com/s/files/1/0054/0567/1479/files/serviceicon3_c7220254-a265-4348-98bf-b3a6ec0ca729.png?v=1632227775"
            alt=""
          />
          <div className="ms-2">
            <p className="fw-bold">Customer Support</p>
            <p>Lorem Ipsum dummy</p>
          </div>
        </div>
        <div className="support__detail d-flex align-items-center">
          <img
            src="https://cdn.shopify.com/s/files/1/0054/0567/1479/files/serviceicon4.png?v=1632227783"
            alt=""
          />
          <div className="ms-2">
            <p className="fw-bold">Gift Voucher</p>
            <p>Lorem Ipsum dummy</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cart;
