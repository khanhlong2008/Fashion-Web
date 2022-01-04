import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import AuthCtx from '../../context/AuthProvider/AuthCtx';
import InfoCtx from '../../context/InfoProvider/InfoCtx';

const CheckoutProcess = ({ search }) => {
  const { info } = useContext(InfoCtx);
  const { user } = useContext(AuthCtx);
  return (
    <div className="checkout-process">
      <Link to="/cart">Cart</Link>
      <span>{' > '}</span>
      {search === 'contact_information' ? (
        <strong>Information</strong>
      ) : info.lastName ? (
        <Link to={`/checkouts/${user._id}?step=contact_information`}>
          Infomation
        </Link>
      ) : (
        <span>Information</span>
      )}

      <span>{' > '}</span>
      {search === 'shipping_method' ? (
        <strong>Shipping</strong>
      ) : info.lastName ? (
        <Link to={`/checkouts/${user._id}?step=shipping_method`}>Shipping</Link>
      ) : (
        <span>Shipping</span>
      )}
    </div>
  );
};

export default CheckoutProcess;
