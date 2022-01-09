import React from 'react';
import { useNavigate } from 'react-router-dom';

const FSItemSlider = ({
  _id: id,
  title,
  price,
  off = '25%',
  sold = 1,
  img: { imgList },
  limit = 3,
  buyBtn,
}) => {
  const navigate = useNavigate();
  const width = `${(sold / limit) * 100}%`;
  return (
    <div
      className="flashsale-item__container"
      onClick={() => navigate(`/products/${id}`)}
    >
      <div className="image-container">
        <img src={imgList[0].imgItem} alt="" />
      </div>
      <p>{title}</p>
      <p>
        <span>${price}</span> ${price * ((100 - off.replace('%', '')) / 100)}
      </p>
      <div class="progress">
        <div
          class="progress-bar"
          role="progressbar"
          style={{ width }}
          aria-valuenow={sold}
          aria-valuemin="0"
          aria-valuemax={limit}
        ></div>
        <span>{sold} SOLD</span>
      </div>
      <div className="stamp">
        <p>
          {off} <span>OFF</span>
        </p>
      </div>
      {buyBtn && (
        <div className="text-center">
          <button className="btn btn-primary">Buy now</button>
        </div>
      )}
    </div>
  );
};

export default FSItemSlider;
