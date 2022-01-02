import React, { useContext, useState, useEffect } from 'react';
import CartCtx from '../../../context/CartProvider/CartCtx';

import ImageCarousel from './ImageCarousel';

const ProductModal = () => {
  const {
    showModal,
    handleCloseModal,
    addItemToCart,
    modal: { id, title, imgList, price, star, size, color, stock },
  } = useContext(CartCtx);
  const [showCollapse, setShowCollapse] = useState(false);
  const [quantity, setQuantity] = useState(1);
  const [imgSrc, setImgSrc] = useState('');
  const [selectedSize, setSelectedSize] = useState('');
  const [selectedColor, setSelectedColor] = useState('');
  const [isSoldout, setSoldout] = useState(false);

  const handleChangeSize = e => {
    setSelectedSize(e.target.value);
    setSoldout(!(size[e.target.value] && color[selectedColor] && stock >= 1));
  };

  const handleChangeColor = e => {
    setSelectedColor(e.target.value);
    setSoldout(!(size[selectedSize] && color[e.target.value] && stock >= 1));
  };

  const changeQuantity = e => {
    const quantityInput = +e.target.value;
    if (quantityInput === 0 || isNaN(quantityInput)) setQuantity(1);
    if (quantityInput > stock) setQuantity(stock);
  };

  useEffect(() => {
    setImgSrc(imgList[0].imgItem);
    setSelectedSize(Object.keys(size)[0]);
    setSelectedColor(Object.keys(color)[0]);
    setSoldout(
      !(Object.values(size)[0] && Object.values(color)[0] && stock >= 1)
    );
  }, [size, color, imgList, stock]);

  const handleImage = src => {
    setImgSrc(src);
  };

  const addToCart = () => {
    if (quantity === '' || quantity < 1) return;
    addItemToCart({ id, title, front: imgList[0].imgItem, price, quantity });
  };

  const closeModal = () => {
    setQuantity(1);
    setShowCollapse(false);
    handleCloseModal();
  };

  const handleInputQuantity = e => {
    if (parseFloat(e.target.value) >= 0 && parseFloat(e.target.value) % 1 === 0)
      setQuantity(parseFloat(e.target.value));
    if (e.target.value === '') setQuantity(e.target.value);
    if (e.target.value === '-') return;
  };

  const handleQuantity = type => {
    if (type === 'increase') setQuantity(state => +state + 1);
    else setQuantity(state => +state - 1);
  };

  const handleCollapse = () => {
    setShowCollapse(state => !state);
  };

  const sizesSelector = [];

  for (let s in size) {
    sizesSelector.push(
      <>
        <input
          type="radio"
          name="size"
          value={s}
          id={s}
          checked={s === selectedSize ? true : false}
          onChange={handleChangeSize}
        />
        <label htmlFor={s} className="square size">
          {s.toUpperCase()}
        </label>
      </>
    );
  }

  const colorsSelector = [];

  for (let c in color) {
    colorsSelector.push(
      <>
        <input
          type="radio"
          name="color"
          value={c}
          id={c}
          checked={c === selectedColor ? true : false}
          onChange={handleChangeColor}
        />
        <label
          htmlFor={c}
          className="square color"
          style={{ backgroundColor: c }}
        ></label>
      </>
    );
  }

  const stars = [];
  for (let i = 1; i <= 5; i++) {
    if (i <= star) {
      stars.push(<i className="bi bi-star-fill yellow"></i>);
    } else stars.push(<i className="bi bi-star-fill"></i>);
  }

  return (
    <section className={`product-modal__wrapper ${showModal ? 'show' : ''}`}>
      <div className="product-modal__container">
        <div
          className="d-flex justify-content-end close-btn"
          onClick={closeModal}
        >
          <button>X</button>
        </div>
        <div className="backdrop" onClick={closeModal}></div>
        <div className="product-modal__content">
          <div className="product-image">
            <div>
              <img src={imgSrc} alt="" />
            </div>
            <ImageCarousel listImage={imgList} handleImage={handleImage} />
          </div>
          <div className="product-info">
            <p className="h2">{title}</p>
            <p className="price fw-bold">${price.toFixed(2)}</p>
            <div className="star-container">{stars}</div>

            <p className="info-1">
              Faded short sleeves t-shirt with high neckline. Soft and stretchy
              material for a comfortable fit. Accessorize with a straw hat and
              you're ready for summer!
            </p>
            <div className={`collapse-content ${showCollapse ? 'show' : ''}`}>
              <p>Sample Unordered List</p>
              <ul>
                <li>Comodous in tempor ullamcorper miaculis</li>
                <li>Pellentesque vitae neque mollis urna mattis laoreet.</li>
                <li>Divamus sit amet purus justo.</li>
                <li>
                  Proin molestie egestas orci ac suscipit risus posuere loremou.
                </li>
              </ul>
              <p>Sample Ordered Lista</p>
              <ol>
                <li>Comodous in tempor ullamcorper miaculis</li>
                <li>Pellentesque vitae neque mollis urna mattis laoreet.</li>
                <li>Divamus sit amet purus justo.</li>
                <li>
                  Proin molestie egestas orci ac suscipit risus posuere loremous
                </li>
              </ol>
              <p>Sample Paragraph Text</p>
              <p className="info-2">
                Faded short sleeves t-shirt with high neckline. Soft and
                stretchy material for a comfortable fit. Accessorize with a
                straw hat and you're ready for summer!Faded short sleeves
                t-shirt with high neckline. Soft and stretchy material for a
                comfortable fit. Accessorize with a straw hat and you're ready
                for summe!
              </p>
            </div>
            <p className="collapse-btn" onClick={handleCollapse}>
              {showCollapse ? 'Read Less' : 'Read More'}
            </p>
            <p className="option-label">Size</p>
            <div>{sizesSelector}</div>
            <p className="option-label">Color</p>
            <div>{colorsSelector}</div>
            <div className="quantity-input mt-3">
              <button
                disabled={quantity === 1 || isSoldout ? true : false}
                onClick={handleQuantity.bind(null, 'decrease')}
              >
                -
              </button>
              <input
                type="number"
                step="1"
                value={quantity}
                onChange={handleInputQuantity}
                onBlur={changeQuantity}
                disabled={isSoldout}
              />
              <button
                disabled={isSoldout || quantity === stock ? true : false}
                onClick={handleQuantity.bind(null, 'increase')}
              >
                +
              </button>
            </div>
            <button
              className="btn btn-primary"
              onClick={addToCart}
              disabled={isSoldout}
            >
              {isSoldout ? 'SOLD OUT' : 'ADD TO CART'}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductModal;
