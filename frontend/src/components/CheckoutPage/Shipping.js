import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import AuthCtx from '../../context/AuthProvider/AuthCtx';
import InfoCtx from '../../context/InfoProvider/InfoCtx';
import CartCtx from '../../context/CartProvider/CartCtx';

const Shipping = () => {
  const navigate = useNavigate();
  const { info } = useContext(InfoCtx);
  const { user } = useContext(AuthCtx);
  const { postOrder, items, totalPrice } = useContext(CartCtx);

  const handleOrder = () => {
    const { firstName, lastName, address, apartment, city } = info;
    postOrder({
      information: { firstName, lastName, address, apartment, city },
      items,
      totalPrice,
    });
  };

  return (
    <div className="shipping__container">
      <div className="info__container">
        <div className="info-detail">
          <p>Contact</p>
          <p>{user.email}</p>
          <p
            className="text-primary"
            onClick={() =>
              navigate(`/checkouts/${user._id}?step=contact_information`)
            }
          >
            Change
          </p>
        </div>
        <div className="info-detail">
          <p>Ship to</p>
          <p>
            {info.address}, {info.apartment}, {info.city}
          </p>
          <p
            className="text-primary"
            onClick={() =>
              navigate(`/checkouts/${user._id}?step=contact_information`)
            }
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
        <button
          className="btn btn-primary me-2"
          type="submit"
          onClick={handleOrder}
        >
          Order
        </button>
        <button
          className="btn btn-light"
          onClick={() =>
            navigate(`/checkouts/${user._id}?step=contact_information`)
          }
        >
          Return to information
        </button>
      </div>
    </div>
  );
};

export default Shipping;
