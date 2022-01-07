import './Right.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { useContext, useEffect, useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import CartCtx from '../../../../context/CartProvider/CartCtx';
import { useNavigate, useParams } from 'react-router-dom';
import AuthCtx from '../../../../context/AuthProvider/AuthCtx';

const ProductRight = ({
  _id: id,
  img: { imgList },
  title,
  price,
  star = 4,
  size,
  color,
  quantity: stock,
}) => {
  const [quantity, setQuantity] = useState(1);
  const { addItemToCart, handleBlockAddToCart } = useContext(CartCtx);
  const navigate = useNavigate();
  const [selectedSize, setSelectedSize] = useState('');
  const [selectedColor, setSelectedColor] = useState('');
  const [isSoldout, setSoldout] = useState(false);
  const { isAuthenticated } = useContext(AuthCtx);

  const handleChangeSize = e => {
    setSelectedSize(e.target.value);
    setSoldout(!(size[e.target.value] && color[selectedColor] && stock >= 1));
  };

  const handleChangeColor = e => {
    setSelectedColor(e.target.value);
    setSoldout(!(size[selectedSize] && color[e.target.value] && stock >= 1));
  };

  useEffect(() => {
    setSelectedSize(Object.keys(size)[0]);
    setSelectedColor(Object.keys(color)[0]);
    setSoldout(
      !(Object.values(size)[0] && Object.values(color)[0] && stock >= 1)
    );
  }, [size, color, stock]);

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

  const handleInputQuantity = e => {
    if (parseFloat(e.target.value) >= 0 && parseFloat(e.target.value) % 1 === 0)
      setQuantity(parseFloat(e.target.value));
    if (e.target.value === '') setQuantity(e.target.value);
    if (e.target.value === '-') return;
  };

  const changeQuantity = e => {
    const quantityInput = +e.target.value;
    if (quantityInput === 0 || isNaN(quantityInput)) setQuantity(1);
    if (quantityInput > stock) setQuantity(stock);
  };

  const handleBuyProduct = () => {
    if (!isAuthenticated) {
      handleBlockAddToCart();
      return;
    }
    if (quantity === '' || quantity < 1) return;

    addItemToCart({
      id,
      title,
      front: imgList[0].imgItem,
      price,
      quantity,
      stock,
      size: selectedSize,
      color: selectedColor,
    });

    navigate('/checkouts/id?step=contact_information');
  };

  const handleQuantity = type => {
    if (type === 'increase') setQuantity(state => +state + 1);
    else setQuantity(state => +state - 1);
  };

  const addToCart = () => {
    if (!isAuthenticated) {
      handleBlockAddToCart();
      return;
    }
    if (quantity === '' || quantity < 1) return;

    addItemToCart({
      id,
      title,
      front: imgList[0].imgItem,
      price,
      quantity,
      size: selectedSize,
      color: selectedColor,
      stock,
    });
  };

  const stars = [];
  for (let i = 1; i <= 5; i++) {
    if (i <= star) {
      stars.push(<i className="bi bi-star-fill yellow"></i>);
    } else stars.push(<i className="bi bi-star-fill"></i>);
  }
  return (
    <div>
      <div className="product-info">
        <p className="h2">{title}</p>
        <div className="star-container">{stars}</div>
        <p className="price fw-bold">${price.toFixed(2)}</p>
      </div>
      <p>Vendor : Aveda</p>
      <p>Product Type : fashion</p>
      <div className="body-one">
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
      </div>
      <div className="d-flex justify-content-start">
        <button
          className="btn btn-primary me-2"
          onClick={addToCart}
          disabled={isSoldout}
        >
          {isSoldout ? 'SOLD OUT' : 'ADD TO CART'}
        </button>
        {!isSoldout && (
          <button className="btn btn-dark" onClick={handleBuyProduct}>
            BUY IT NOW
          </button>
        )}
      </div>
      <div className="main-reassurance mt-4">
        <Row className="row">
          <Col className="reassurance">
            <div className="reassurance-img">
              <img
                src="https://cdn.shopify.com/s/files/1/0054/0567/1479/files/serviceicon1_5751f14d-5e26-48aa-b03b-f3f5d9817389.png?v=1632227750"
                alt="/"
              />
            </div>
            <div className="reassurance-text">
              <div className="reassurance-title">Free Delivery</div>
              <div className="reassurance-desc">Lorem Ipsum dummy</div>
            </div>
          </Col>
          <Col className="reassurance">
            <div className="reassurance-img">
              <img
                src="https://cdn.shopify.com/s/files/1/0054/0567/1479/files/serviceicon2_e90da2f5-c3ca-437f-aeb7-ee334261083a.png?v=1632227764"
                alt="/"
              />
            </div>
            <div className="reassurance-text">
              <div className="reassurance-title">Free Delivery</div>
              <div className="reassurance-desc">Lorem Ipsum dummy</div>
            </div>
          </Col>
        </Row>
        <Row className="row">
          <Col className="reassurance">
            <div className="reassurance-img">
              <img
                src="https://cdn.shopify.com/s/files/1/0054/0567/1479/files/serviceicon3_c7220254-a265-4348-98bf-b3a6ec0ca729.png?v=1632227775"
                alt="/"
              />
            </div>
            <div className="reassurance-text">
              <div className="reassurance-title">Free Delivery</div>
              <div className="reassurance-desc">Lorem Ipsum dummy</div>
            </div>
          </Col>
          <Col className="reassurance">
            <div className="reassurance-img">
              <img
                src="https://cdn.shopify.com/s/files/1/0054/0567/1479/files/serviceicon4.png?v=1632227783"
                alt="/"
              />
            </div>
            <div className="reassurance-text">
              <div className="reassurance-title">Free Delivery</div>
              <div className="reassurance-desc">Lorem Ipsum dummy</div>
            </div>
          </Col>
        </Row>
      </div>
      <div
        className="logo-img"
        style={{ marginTop: '2rem', marginBottom: '2rem' }}
      >
        <img
          src="https://cdn.shopify.com/s/files/1/0054/0567/1479/files/Trustedimage_73a6da00-06b0-497f-a8a5-b974089b9419.png?v=1632227833"
          alt="/"
        />
      </div>
      <div>
        <a href="/">
          <span>
            <ion-icon name="logo-facebook"></ion-icon>
          </span>
        </a>
        <a href="/">
          <span>
            <ion-icon name="logo-twitter"></ion-icon>
          </span>
        </a>
        <a href="/">
          <span>
            <ion-icon name="print-outline"></ion-icon>
          </span>
        </a>
        <a href="/">
          <span>
            <ion-icon name="mail"></ion-icon>
          </span>
        </a>
        <a href="/">
          <span>
            <ion-icon name="logo-pinterest"></ion-icon>
          </span>
        </a>
      </div>
    </div>
  );
};
export default ProductRight;
