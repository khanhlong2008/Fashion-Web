import React, { useContext } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import AuthCtx from '../../context/AuthProvider/AuthCtx';
import CartCtx from '../../context/CartProvider/CartCtx';
import CartItem from './CartItem';

const ListCart = () => {
  const { items, totalPrice } = useContext(CartCtx);
  const { user } = useContext(AuthCtx);
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
        {items.map((item, index) => (
          <CartItem {...item} key={item.id + index} />
        ))}
      </div>
      <p className="subtotal">Subtotal: ${totalPrice.toFixed(2)}</p>
      <div className="button-container">
        <button
          className="btn btn-primary"
          onClick={() =>
            navigate(`/checkouts/${user._id}?step=contact_information`)
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
