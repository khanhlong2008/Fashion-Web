import React, { useContext, useState } from 'react';
import CartCtx from '../../context/CartProvider/CartCtx';
import CartItem from './CartItem';
import InputGroup from './InputGroup';

const CartContainer = () => {
  const [giftCard, setGiftCard] = useState('');
  const { items, totalPrice } = useContext(CartCtx);

  return (
    <div className="cart__container">
      <div className="list-product">
        {items.map((item, index) => (
          <CartItem {...item} key={item.id + index} />
        ))}
      </div>
      <div className="discount-code">
        <InputGroup
          label="Gift Card"
          id="gift"
          value={giftCard}
          onChange={e => setGiftCard(e.target.value)}
        />
        <button className="btn btn-primary" disabled={giftCard ? false : true}>
          Apply
        </button>
      </div>
      <div className="sub-total">
        <p>
          Subtotal <span>${totalPrice.toFixed(2)}</span>
        </p>
        <p>
          Shipping <span>$20.00</span>
        </p>
      </div>
      <div className="total">
        <p>
          Total{' '}
          <span>
            USD <strong>${(totalPrice + 20).toFixed(2)}</strong>
          </span>
        </p>
      </div>
    </div>
  );
};

export default CartContainer;
