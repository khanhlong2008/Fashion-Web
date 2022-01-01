import './Right.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { useContext, useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import CartCtx from '../../../context/CartProvider/CartCtx';
import { useNavigate } from 'react-router-dom';
const ProductRight = ({
  _id: id,
  img: { imgList },
  title,
  price,
  star = 4,
}) => {
  const [quantity, setQuantity] = useState(1);
  const { addItemToCart } = useContext(CartCtx);
  const navigate = useNavigate();

  const handleInputQuantity = e => {
    if (parseFloat(e.target.value) >= 0 && parseFloat(e.target.value) % 1 === 0)
      setQuantity(parseFloat(e.target.value));
    if (e.target.value === '') setQuantity(e.target.value);
    if (e.target.value === '-') return;
  };

  const handleBuyProduct = () => {
    if (quantity === '' || quantity < 1) return;

    addItemToCart({
      id,
      title,
      front: imgList[0].imgItem,
      price,
      quantity,
    });

    navigate('/checkouts/id?step=contact_information');
  };

  const handleQuantity = type => {
    if (type === 'increase') setQuantity(state => +state + 1);
    else setQuantity(state => +state - 1);
  };

  const addToCart = () => {
    if (quantity === '' || quantity < 1) return;

    addItemToCart({ id, title, front: imgList[0].imgItem, price, quantity });
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
      <div className="right-chart">
        <span>
          <i class="bi bi-heart-fill" style={{ color: 'gray' }}></i>
        </span>
        <span className="ms-2">
          <p>Add To Wishlist</p>
        </span>
      </div>
      <div className="body-one">
        <p className="option-label">Size</p>
        <div>
          <input type="radio" name="size" value="M" id="size-0" />
          <label htmlFor="size-0" className="square size">
            M
          </label>
          <input type="radio" name="size" value="L" id="size-1" />
          <label htmlFor="size-1" className="square size">
            L
          </label>
          <input type="radio" name="size" value="XL" id="size-2" />
          <label htmlFor="size-2" className="square size">
            XL
          </label>
        </div>
        <p className="option-label">Color</p>
        <div>
          <input type="radio" name="color" value="red" id="color-0" />
          <label
            htmlFor="color-0"
            className="square color"
            style={{ backgroundColor: 'red' }}
          ></label>
          <input type="radio" name="color" value="yellow" id="color-1" />
          <label
            htmlFor="color-1"
            className="square color"
            style={{ backgroundColor: 'yellow' }}
          ></label>
          <input type="radio" name="color" value="black" id="color-2" />
          <label
            htmlFor="color-2"
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
      </div>
      <div className="btn-body">
        <button className="btn-add" onClick={addToCart}>
          ADD TO CART
        </button>
        <button className="btn-add btn-buy" onClick={handleBuyProduct}>
          BUY IT NOW
        </button>
      </div>
      <div className="main-reassurance mt-3">
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
