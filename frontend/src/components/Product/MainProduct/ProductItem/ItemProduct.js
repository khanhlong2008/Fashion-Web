/* eslint-disable jsx-a11y/alt-text */
import './ItemProduct.css';
import { useNavigate } from 'react-router-dom';

export default function ItemProduct({ products }) {
  let navigate = useNavigate();
  return (
    <div
      className="ItemProduct"
      onClick={() => {
        const id = products._id;

        navigate(`/detail/${id}`);
      }}
    >
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
