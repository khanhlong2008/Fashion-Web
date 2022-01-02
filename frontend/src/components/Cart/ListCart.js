import React, { useContext } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import CartCtx from '../../context/CartProvider/CartCtx';
import CartItem from './CartItem';

const ListCart = () => {
  const { items, totalPrice } = useContext(CartCtx);
  const navigate = useNavigate();
  return (
    <>
      <div className="list-cart__container">
        <div className="product-info product-title">
          <p>Product</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
        </div>
        {items.map(item => (
          <CartItem {...item} key={item.id} />
        ))}
      </div>
      <p className="subtotal">Subtotal: ${totalPrice.toFixed(2)}</p>
      <div className="button-container">
        <button
          className="btn btn-primary"
          onClick={() =>
            navigate(
              '/checkouts/61cc662277177893679d56d5?step=contact_information'
            )
          }
        >
          Checkout
        </button>
        <Link to="/">Continue to shopping</Link>
      </div>
    </>
  );
};

export default ListCart;
