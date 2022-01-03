import React, { useContext, useState } from 'react';
import InputGroup from './InputGroup';
import { useNavigate } from 'react-router-dom';
import AuthCtx from '../../context/AuthProvider/AuthCtx';

const ContactInfofmation = () => {
  const navigate = useNavigate();
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [address, setAddress] = useState('');
  const [apartment, setApartment] = useState('');
  const [city, setCity] = useState('');
  const { user } = useContext(AuthCtx);

  const handleSubmit = e => {
    e.preventDefault();
    navigate('/checkouts/id?step=shipping_method');
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
          {user.firstname + user.lastname} ({user.email})
        </p>
      </div>
      <div className="shipping-address">
        <p>Shipping address</p>
        <form onSubmit={handleSubmit}>
          <div className="fullname">
            <InputGroup
              value={firstName}
              id="firstName"
              label="First name (optional)"
              onChange={e => setFirstName(e.target.value)}
            />
            <InputGroup
              value={lastName}
              id="lastName"
              label="Last name"
              onChange={e => setLastName(e.target.value)}
            />
          </div>
          <InputGroup
            value={address}
            id="address"
            label="Address"
            onChange={e => setAddress(e.target.value)}
          />
          <InputGroup
            value={apartment}
            id="apartment"
            label="Apartment"
            onChange={e => setApartment(e.target.value)}
          />
          <InputGroup
            value={city}
            id="city"
            label="City"
            onChange={e => setCity(e.target.value)}
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
