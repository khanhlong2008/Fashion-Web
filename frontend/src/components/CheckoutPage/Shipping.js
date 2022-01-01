import React from 'react';
import { useNavigate } from 'react-router-dom';

const Shipping = () => {
  const navigate = useNavigate();
  return (
    <div className="shipping__container">
      <div className="info__container">
        <div className="info-detail">
          <p>Contact</p>
          <p>minhnguyet@gmail.com</p>
          <p
            className="text-primary"
            onClick={() => navigate('/checkouts/id?step=contact_information')}
          >
            Change
          </p>
        </div>
        <div className="info-detail">
          <p>Ship to</p>
          <p>Hiep Binh, Ho Chi Minh city</p>
          <p
            className="text-primary"
            onClick={() => navigate('/checkouts/id?step=contact_information')}
          >
            Change
          </p>
        </div>
      </div>
      <p>Shipping Method</p>
      <div className="info__container">
        <div className="info-detail">
          <input type="radio" checked></input>
          <label>International Shipping</label>
          <p>$20.00</p>
        </div>
      </div>

      <div className="btn-container">
        <button className="btn btn-primary" type="submit">
          Order
        </button>
        <button
          className="btn btn-light"
          onClick={() => navigate('/checkouts/id?step=contact_information')}
        >
          Return to information
        </button>
      </div>
    </div>
  );
};

export default Shipping;
