/* eslint-disable jsx-a11y/alt-text */
import "./ItemProduct.css";
import { Navigate } from "react-router-dom";



export default function ItemProduct({ products }) {
  // console.log(products);

  return (
    <div className="ItemProduct" >
      <div className="itemProduct-img">
        <img src={products.img.imgList[0].imgItem} alt="" />

      </div>
      <div className="itemproduct-title">
        <h2>{products.price} $</h2>
        <p>{products.title}</p>
      </div>
    </div>
  );
}
