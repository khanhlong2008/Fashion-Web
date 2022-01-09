import React from 'react';
import { useNavigate } from 'react-router-dom';

const ComingSoonItem = ({
  _id: id,
  title,
  price,
  off = '25%',
  sold = 1,
  img: { imgList },
  limit = 3,
}) => {
  const navigate = useNavigate();
  return (
    <div
      className="flashsale-item__container"
      onClick={() => navigate(`/products/${id}`)}
    >
      <div className="image-container">
        <img src={imgList[0].imgItem} alt="" />
      </div>
      <p>{title}</p>
      <p>${price}</p>
      <div className="stamp">
        <p>
          ? % <span>OFF</span>
        </p>
      </div>
      <div className="text-center">
        <button className="btn btn-primary">View Detail</button>
      </div>
    </div>
  );
};

export default ComingSoonItem;
