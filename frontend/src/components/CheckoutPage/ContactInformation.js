import React, { useContext, useEffect } from 'react';
import InputGroup from './InputGroup';
import { useNavigate } from 'react-router-dom';
import AuthCtx from '../../context/AuthProvider/AuthCtx';
import InfoCtx from '../../context/InfoProvider/InfoCtx';
import { useReducer } from 'react';

const inputReducer = (state, action) => {
  if (action.type === 'REPLACE_FORM') {
    return {
      ...state,
      ...action.payload,
    };
  }
  return {
    ...state,
    [action.name]: action.value,
  };
};

const initialState = {
  firstName: '',
  lastName: '',
  apartment: '',
  address: '',
  city: '',
};

const ContactInfofmation = () => {
  const navigate = useNavigate();
  const [form, dispatch] = useReducer(inputReducer, initialState);
  const { user } = useContext(AuthCtx);
  const { info, replaceInfo } = useContext(InfoCtx);

  const setForm = e => {
    dispatch({ name: e.target.id, value: e.target.value });
  };

  useEffect(() => {
    dispatch({ type: 'REPLACE_FORM', payload: info });
  }, [info]);

  const handleSubmit = e => {
    e.preventDefault();
    replaceInfo(form);
    navigate(`/checkouts/${user._id}?step=shipping_method`);
  };

  return (
    <div className="contact-info__container">
      <p className="title">Contact Information</p>
      <div className="info">
        <div className="avt-container">
          <img
            src="https://haycafe.vn/wp-content/uploads/2021/11/Anh-avatar-dep-chat-lam-hinh-dai-dien.jpg"
            alt=""
          />
        </div>
        <p>
          {user.firstname + ' ' + user.lastname} ({user.email})
        </p>
      </div>
      <div className="shipping-address">
        <p>Shipping address</p>
        <form onSubmit={handleSubmit}>
          <div className="fullname">
            <InputGroup
              value={form.firstName}
              id="firstName"
              label="First name (optional)"
              onChange={setForm}
            />
            <InputGroup
              value={form.lastName}
              id="lastName"
              label="Last name"
              onChange={setForm}
              required
            />
          </div>
          <InputGroup
            value={form.address}
            id="address"
            label="Address"
            onChange={setForm}
            required
          />
          <InputGroup
            value={form.apartment}
            id="apartment"
            label="Apartment"
            onChange={setForm}
            required
          />
          <InputGroup
            value={form.city}
            id="city"
            label="City"
            onChange={setForm}
            required
          />
          <div className="btn-container">
            <button className="btn btn-primary" type="submit">
              Continue to shipping
            </button>
            <button className="btn btn-light" onClick={() => navigate('/cart')}>
              Return to cart
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactInfofmation;
