import React, { useContext } from 'react';
import CartCtx from '../../context/CartProvider/CartCtx';

const ProductItem = ({ id, name, originPrice, price, back, front, star }) => {
  const link = `/products/${name.toLowerCase().split(' ').join('-')}`;
  const { addItemToCart, handleShowModal } = useContext(CartCtx);

  const stars = [];
  for (let i = 1; i <= 5; i++) {
    if (i <= star) {
      stars.push(<i className="bi bi-star-fill yellow"></i>);
    } else stars.push(<i className="bi bi-star-fill"></i>);
  }
  return (
    <div className="product-item__card">
      <div className="product-item__card-img">
        <img src={front} alt="product" />
        <img src={back} alt="product" />
        <div className="star-container">{stars}</div>
        <a href={link} target="_blank" rel="noreferrer">
          {link}
        </a>
      </div>
      <a
        className="text-center d-block fw-bold mt-3 mb-0"
        href={link}
        target="_blank"
        rel="noreferrer"
      >
        {name}
      </a>
      <p className="text-center text-primary">
        {originPrice > 0 && <span>{`$${originPrice.toFixed(2)}`}</span>}
        {`$${price.toFixed(2)}`}
      </p>
      <div className="icon__wrapper">
        <div
          className="icon__container"
          onClick={handleShowModal.bind(null, {
            id,
            name,
            price,
            front,
            star,
            back,
          })}
        >
          <i className="bi bi-eye-fill"></i>
        </div>
        <div className="icon__container">
          <i className="bi bi-heart"></i>
        </div>
        <div
          className="icon__container"
          onClick={addItemToCart.bind(null, {
            id,
            name,
            price,
            front,
            quantity: 1,
          })}
        >
          <i className="bi bi-cart3"></i>
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
