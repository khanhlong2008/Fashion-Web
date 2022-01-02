import React, { useContext } from 'react';
import CartCtx from '../../../context/CartProvider/CartCtx';

const ProductItem = ({
  _id: id,
  title,
  originPrice,
  price,
  img: { imgList },
  star = Math.floor(Math.random() * 3) + 2,
  size,
  color,
  quantity: stock,
}) => {
  const link = `/products/${id}`;
  const { addItemToCart, handleShowModal } = useContext(CartCtx);
  const stars = [];

  const handleAddItem = () => {
    addItemToCart({
      id,
      title,
      price,
      front: imgList[0].imgItem,
      quantity: 1,
      color: selectColor,
      size: selectSize,
      stock,
    });
  };

  let selectSize;
  let selectColor;
  for (let s in size) {
    if (size[s]) {
      selectSize = s;
      break;
    }
  }

  for (let c in color) {
    if (color[c]) {
      selectColor = c;
      break;
    }
  }

  const isSoldout = selectColor && selectSize && stock >= 1;

  for (let i = 1; i <= 5; i++) {
    if (i <= star) {
      stars.push(<i className="bi bi-star-fill yellow"></i>);
    } else stars.push(<i className="bi bi-star-fill"></i>);
  }
  return (
    <div className="product-item__card">
      <div className="product-item__card-img">
        <img src={imgList[0].imgItem} alt="product" />
        <img src={imgList[1].imgItem} alt="product" />
        <a href={link} target="_blank" rel="noreferrer">
          {link}
        </a>
      </div>
      <div className="star-container">{stars}</div>
      <a
        className="text-center d-block fw-bold mt-3 mb-0"
        href={link}
        target="_blank"
        rel="noreferrer"
      >
        {title}
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
            title,
            price,
            imgList,
            star,
            size,
            color,
          })}
        >
          <i className="bi bi-eye-fill"></i>
        </div>
        <div className="icon__container">
          <i className="bi bi-heart"></i>
        </div>
        {isSoldout && (
          <div className="icon__container" onClick={handleAddItem}>
            <i className="bi bi-cart3"></i>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductItem;
