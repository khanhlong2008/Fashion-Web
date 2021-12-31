import React, { useContext, useState, useEffect } from 'react';
import CartCtx from '../../context/CartProvider/CartCtx';
import ImageCarousel from './ImageCarousel';

const ProductModal = () => {
  const {
    showModal,
    handleCloseModal,
    addItemToCart,
    modal: { id, name, front, price, star, back },
  } = useContext(CartCtx);
  const [showCollapse, setShowCollapse] = useState(false);
  const [quantity, setQuantity] = useState(1);
  const [imgSrc, setImgSrc] = useState('');

  useEffect(() => {
    setImgSrc(front);
  }, [front]);

  const handleImage = src => {
    setImgSrc(src);
  };

  const addToCart = () => {
    if (quantity === '' || quantity < 1) return;
    addItemToCart({ id, name, front, price, quantity });
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
            <ImageCarousel
              listImage={[front, back]}
              handleImage={handleImage}
            />
          </div>
          <div className="product-info">
            <p className="h2">{name}</p>
            <p className="price fw-bold">
              <span>$38.00</span> ${price.toFixed(2)}
            </p>
            <div className="star-container">{stars}</div>

            <p className="info-1">
              Faded short sleeves t-shirt with high neckline. Soft and stretchy
              material for a comfortable fit. Accessorize with a straw hat and
              you're ready for summer!
            </p>
            <div class={`collapse-content ${showCollapse ? 'show' : ''}`}>
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
            <div>
              <input type="radio" name="size" value="M" id="size-0" />
              <label for="size-0" className="square size">
                M
              </label>
              <input type="radio" name="size" value="L" id="size-1" />
              <label for="size-1" className="square size">
                L
              </label>
              <input type="radio" name="size" value="XL" id="size-2" />
              <label for="size-2" className="square size">
                XL
              </label>
            </div>
            <p className="option-label">Color</p>
            <div>
              <input type="radio" name="color" value="red" id="color-0" />
              <label
                for="color-0"
                className="square color"
                style={{ backgroundColor: 'red' }}
              ></label>
              <input type="radio" name="color" value="yellow" id="color-1" />
              <label
                for="color-1"
                className="square color"
                style={{ backgroundColor: 'yellow' }}
              ></label>
              <input type="radio" name="color" value="black" id="color-2" />
              <label
                for="color-2"
                className="square color"
                style={{ backgroundColor: 'black' }}
              ></label>
            </div>
            <div className="quantity-input mt-3">
              <button
                disabled={quantity === 1 ? true : false}
                onClick={handleQuantity.bind(null, 'decrease')}
              >
                -
              </button>
              <input
                type="number"
                step="1"
                value={quantity}
                onChange={handleInputQuantity}
              />
              <button onClick={handleQuantity.bind(null, 'increase')}>+</button>
            </div>
            <button className="btn btn-primary" onClick={addToCart}>
              ADD TO CART
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductModal;
