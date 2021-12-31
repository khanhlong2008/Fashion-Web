import "./Right.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import { useState } from "react";
import { Card, Col, Row } from "react-bootstrap"
const ProductRight = () => {
    const [quantity, setQuantity] = useState(1);
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
    return (
        <div>
            <div className="right-text">
                <h1>Aloha Shirt For Men</h1>
            </div>
            <div className="right-review">
                <span className="right-review-icon" style={{ color: "gray" }}>
                    <i class="bi bi-star-fill"></i>
                    <i class="bi bi-star-fill"></i>
                    <i class="bi bi-star-fill"></i>
                    <i class="bi bi-star-fill"></i>
                    <i class="bi bi-star-fill"></i>
                </span>
                <span className="right-review-yet">
                    <p>No review yet</p>
                </span>
                <span className="right-review-write">
                    <a href="/">Write Review</a>
                    <i class="bi bi-pencil-fill" style={{ color: "gray", marginLeft: "0.5rem" }}></i>
                </span>
            </div>
            <div className="right-price">
                <s className="last-price" style={{ color: "gray", fontSize: "18px" }}>$38.00</s>
                <span className="head-price" style={{ fontSize: "24px" }}>$34.00</span>
            </div>
            <div>
                <p>Vendor : Aveda</p>
            </div>
            <div>
                <p>Product Type : fashion</p>
            </div>
            <div className="right-chart">
                <span>
                    <i class="bi bi-heart-fill" style={{ color: "gray" }}></i>
                </span>
                <span style={{ paddingLeft: "1rem" }}>
                    <p>Add To Wishlist</p>
                </span>
                <span style={{ paddingLeft: "1rem" }}>
                    <i class="bi bi-rulers" style={{ color: "gray" }}></i>
                </span>
                <span style={{ paddingLeft: "1rem" }}>
                    <p>Sizechart</p>
                </span>
            </div>
            <div className="body-one">
                <div>
                    <legend style={{ fontSize: "14px" }}>Size</legend>
                    <span className="right-box">
                        <label className="box-L">L</label>
                        <label className="box-M">M</label>
                        <label className="box-XL">XL</label>
                    </span>
                </div>
                <div>
                    <legend style={{ fontSize: "14px" }}>Color</legend>
                    <span className="right-color">
                        <label className="box-a"></label>
                        <label className="box-b"></label>
                        <label className="box-c"></label>
                    </span>
                </div>
                <div>
                    <legend style={{ marginBottom: "1rem", fontSize: "14px" }}>Quatity</legend>
                    <span className="btn-increase" style={{ marginBottom: "1.5rem" }}>

                        <button
                            className="btn-tru"
                            disabled={quantity === 1 ? true : false}
                            onClick={handleQuantity.bind(null, 'decrease')}
                        >
                            -
                        </button>
                        <input
                            className="in-quali"
                            type="number"
                            step="1"
                            value={quantity}
                            onChange={handleInputQuantity}
                        />
                        <button onClick={handleQuantity.bind(null, 'increase')} className="btn-cong">+</button>
                    </span>
                </div>
            </div>
            <div className="btn-body">
                <button className="btn-add">ADD TO CART</button>
                <button className="btn-add btn-buy">BUY IT NOW</button>
            </div>
            <div className="main-reassurance">
                <Row className="row">
                    <Col className="reassurance">
                        <div className="reassurance-img">
                            <img src="https://cdn.shopify.com/s/files/1/0054/0567/1479/files/serviceicon1_5751f14d-5e26-48aa-b03b-f3f5d9817389.png?v=1632227750" alt="/" />
                        </div>
                        <div className="reassurance-text">
                            <div className="reassurance-title">Free Delivery</div>
                            <div className="reassurance-desc">Lorem Ipsum dummy</div>
                        </div>
                    </Col>
                    <Col className="reassurance">
                        <div className="reassurance-img">
                            <img src="https://cdn.shopify.com/s/files/1/0054/0567/1479/files/serviceicon2_e90da2f5-c3ca-437f-aeb7-ee334261083a.png?v=1632227764" alt="/" />
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
                            <img src="https://cdn.shopify.com/s/files/1/0054/0567/1479/files/serviceicon3_c7220254-a265-4348-98bf-b3a6ec0ca729.png?v=1632227775" alt="/" />
                        </div>
                        <div className="reassurance-text">
                            <div className="reassurance-title">Free Delivery</div>
                            <div className="reassurance-desc">Lorem Ipsum dummy</div>
                        </div>
                    </Col>
                    <Col className="reassurance">
                        <div className="reassurance-img">
                            <img src="https://cdn.shopify.com/s/files/1/0054/0567/1479/files/serviceicon4.png?v=1632227783" alt="/" />
                        </div>
                        <div className="reassurance-text">
                            <div className="reassurance-title">Free Delivery</div>
                            <div className="reassurance-desc">Lorem Ipsum dummy</div>
                        </div>
                    </Col>
                </Row>
            </div>
            <div className="logo-img" style={{ marginTop: "2rem", marginBottom: "2rem" }}>
                <img src="https://cdn.shopify.com/s/files/1/0054/0567/1479/files/Trustedimage_73a6da00-06b0-497f-a8a5-b974089b9419.png?v=1632227833" alt="/" />
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
        </div >
    )
}
export default ProductRight;