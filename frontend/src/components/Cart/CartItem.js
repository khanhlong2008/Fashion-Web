import React, { useContext, useState } from 'react';
import CartCtx from '../../context/CartProvider/CartCtx';

const CartItem = ({
  front,
  price,
  title,
  quantity,
  id,
  totalPrice,
  size,
  color,
  stock,
}) => {
  const [newQuantity, setNewQuantity] = useState(quantity);
  const {
    removeItemFromCart,
    addItemToCart,
    removeOneFromItem,
    changeQuantityItem,
  } = useContext(CartCtx);

  const handleInputQuantity = e => {
    if (parseFloat(e.target.value) >= 0 && parseFloat(e.target.value) % 1 === 0)
      setNewQuantity(parseFloat(e.target.value));
    if (e.target.value === '') setNewQuantity(e.target.value);
    if (e.target.value === '-') return;
  };

  const changeQuantity = e => {
    const quantityInput = +e.target.value;
    if (quantityInput > 0)
      changeQuantityItem({
        quantity: quantityInput,
        id,
        totalPrice: price * quantityInput,
      });
    if (quantityInput === 0 || isNaN(quantityInput)) setNewQuantity(quantity);
    if (quantityInput > stock) setNewQuantity(stock);
  };

  const handleQuantity = type => {
    if (type === 'increase') {
      setNewQuantity(state => +state + 1);
      addItemToCart({
        front,
        price,
        title,
        quantity: +newQuantity,
        id,
        totalPrice,
        color,
        size,
        stock,
      });
    } else {
      setNewQuantity(state => +state - 1);
      removeOneFromItem(id);
    }
  };

  return (
    <div className="product-info">
      <div className="product-info__detail">
        <div className="image-container">
          <img src={front} alt="" />
        </div>

        <div>
          <p>{title}</p>
          <p>Size: {size.toUpperCase()}</p>
          <p>Color: {color[0].toUpperCase() + color.slice(1)}</p>
        </div>
      </div>
      <p>${price.toFixed(2)}</p>
      <div className="quantity-input">
        <button
          disabled={newQuantity === 1}
          onClick={handleQuantity.bind(null, 'decrease')}
        >
          -
        </button>
        <input
          type="number"
          step="1"
          value={newQuantity}
          onChange={handleInputQuantity}
          onBlur={changeQuantity}
        />
        <button
          onClick={handleQuantity.bind(null, 'increase')}
          disabled={newQuantity >= stock}
        >
          +
        </button>
      </div>
      <div className="total-price">
        <strong>${totalPrice.toFixed(2)}</strong>
      </div>
      <i
        className="bi bi-trash"
        onClick={removeItemFromCart.bind(null, id)}
      ></i>
    </div>
  );
};

export default CartItem;
