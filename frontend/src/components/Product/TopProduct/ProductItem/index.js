import React, { useContext, useState, useEffect } from 'react';
import AuthCtx from '../../../../context/AuthProvider/AuthCtx';
import CartCtx from '../../../../context/CartProvider/CartCtx';
import ProductCtx from '../../../../context/ProductProvider/ProductCtx';

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
  const { idWishList, addItemToWishList, removeItemFromWishList } =
    useContext(ProductCtx);
  const link = `/products/${id}`;
  const { addItemToCart, handleShowModal, handleBlockAddToCart } =
    useContext(CartCtx);
  const stars = [];
  const { isAuthenticated } = useContext(AuthCtx);
  const [isLoved, setIsLoved] = useState(false);

  useEffect(() => {
    if (isAuthenticated) {
      setIsLoved(idWishList.includes(id));
    } else setIsLoved(false);
  }, [idWishList, id, isAuthenticated]);

  const handleHeart = () => {
    if (isAuthenticated) {
      if (isLoved) removeItemFromWishList(id);
      else addItemToWishList({ id, title, price, front: imgList[0].imgItem });
    } else {
      handleBlockAddToCart();
    }
  };

  const handleAddItem = () => {
    if (isAuthenticated) {
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
    } else {
      handleBlockAddToCart();
    }
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
      stars.push(<i key={`star-${i}`} className="bi bi-star-fill yellow"></i>);
    } else stars.push(<i key={`star-${i}`} className="bi bi-star-fill"></i>);
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


      <div className="">
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
            stock,
          })}
        >

          <i className="bi bi-eye-fill"></i>
        </div>
        <div className="icon__container" onClick={handleHeart}>
          <i className={`bi ${isLoved ? 'bi-heart-fill' : 'bi-heart'}`}></i>
        </div>
        <div
          className={`icon__container ${isSoldout ? 'none-add' : ''}`}
          onClick={handleAddItem}
        >
          <i className="bi bi-cart3"></i>
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
