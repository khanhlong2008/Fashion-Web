import React, { useContext } from 'react';
import CartCtx from '../../context/CartProvider/CartCtx';

const ProductItem = ({ front, price, title, quantity, id }) => {
  const { removeItemFromCart } = useContext(CartCtx);

  const handleRemove = e => {
    e.stopPropagation();
    removeItemFromCart(id);
  };
  return (
    <div className="product-info">
      <div className="col-3 product-img">
        <img src={front} alt="" />
      </div>
      <div>
        <p>{title}</p>
        <p className="text-primary">L/Red</p>
        <p className="text-primary">
          {`${quantity}`} X ${`${price.toFixed(2)}`}
        </p>
      </div>
      <div>
        <i className="bi bi-trash" onClick={handleRemove}></i>
      </div>
    </div>
  );
};

export default ProductItem;
