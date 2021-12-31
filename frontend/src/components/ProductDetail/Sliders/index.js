import { useState } from "react";
import "./Sliders.css"
import Carousel from "./Carousel";
const listImage = [
    'https://cdn.shopify.com/s/files/1/0054/0567/1479/products/17_68723c12-1e46-471d-9b43-21834d6931ad_576x.png?v=1605252566',
    'https://cdn.shopify.com/s/files/1/0054/0567/1479/products/18_9f8cd3d5-6a98-4ae0-ac12-25fd56bedfe1_576x.png?v=1605252568',
    'https://cdn.shopify.com/s/files/1/0054/0567/1479/products/19_1ae7e69e-650e-4620-8da2-1aafd4bd5872_576x.png?v=1605252569',
    'https://cdn.shopify.com/s/files/1/0054/0567/1479/products/20_931348f4-4f4c-4672-8104-f01e6b471a33_576x.png?v=1605252569',
    'https://cdn.shopify.com/s/files/1/0054/0567/1479/products/1_4b761a2f-9e79-427f-897a-006a4f692583_576x.png?v=1605252574',
    'https://cdn.shopify.com/s/files/1/0054/0567/1479/products/2_3bb95e29-70b6-4ab6-806d-1cf52f79834c_576x.png?v=1605252575',
    'https://cdn.shopify.com/s/files/1/0054/0567/1479/products/3_a37a85df-b658-434e-9be6-0d8e4d6d03f6_576x.png?v=1605252575',
];
const Sliders = () => {
    const [imgSrc, setImgSrc] = useState(listImage[0]);
    const handleImage = src => {
        setImgSrc(src);
    };
    return (
        <div className="card-item">
            <div className="product-image">
                <div style={{ marginBottom: "2rem" }}>
                    <img src={imgSrc} alt="" />
                </div>
                <Carousel listImage={listImage} handleImage={handleImage} />
            </div>
        </div>
    )
}
export default Sliders;