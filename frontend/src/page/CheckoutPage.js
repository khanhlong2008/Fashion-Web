import React, { useContext, useEffect } from 'react';
import CheckoutProcess from '../components/CheckoutPage/CheckoutProcess';
import ContactInformation from '../components/CheckoutPage/ContactInformation';
import {
  Navigate,
  useLocation,
  useNavigate,
  useParams,
} from 'react-router-dom';
import CartContainer from '../components/CheckoutPage/CartContainer';
import CartCtx from '../context/CartProvider/CartCtx';
import Shipping from '../components/CheckoutPage/Shipping';
import AuthCtx from '../context/AuthProvider/AuthCtx';
import InfoCtx from '../context/InfoProvider/InfoCtx';
import LoadingSpinner from '../components/layout/LoadingSpiner';

const CheckoutPage = () => {
  const { items, isLoading, isOrdered } = useContext(CartCtx);
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const search = queryParams.get('step');
  const { id } = useParams();
  const { user, loading } = useContext(AuthCtx);
  const { info, isLoading: isLoadingInfo } = useContext(InfoCtx);
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
    document.body.click();
  }, []);

  if (search === 'shipping_method' && !info && !isLoadingInfo && user) {
    navigate(`/checkouts/${user._id}?step=contact_information`);
  }

  if (search === 'shipping_method' && isLoadingInfo) {
    return <LoadingSpinner />;
  }

  if (!user && !loading) {
    return <LoadingSpinner />;
  }

  return items.length === 0 && !isLoading && !isOrdered ? (
    <Navigate to="/cart" />
  ) : (
    <section className="checkout-wrapper container d-block">
      <div className="checkout-container">
        <div className="left-container">
          <h1>Aveda Sectioned Shopify Theme</h1>
          <div className="checkout-info">
            {!user ? (
              <div className="mt-5">
                <p>
                  The checkout page you’re looking for does not exist The URL
                  you entered may be deleted or not available.
                  <br /> Return to the home page to continue shopping.
                </p>
                <button
                  className="btn btn-primary"
                  onClick={() => navigate('/')}
                >
                  Return to home
                </button>
              </div>
            ) : user && id !== user._id ? (
              <div className="mt-5">
                <p>
                  The checkout page you’re looking for does not exist The URL
                  you entered may be deleted or not available.
                  <br /> Return to the home page to continue shopping.
                </p>
                <button
                  className="btn btn-primary"
                  onClick={() => navigate('/')}
                >
                  Return to home
                </button>
              </div>
            ) : (
              <>
                <CheckoutProcess search={search} />
                {search === 'contact_information' || !search ? (
                  <ContactInformation />
                ) : null}
                {search === 'shipping_method' && info && <Shipping />}
              </>
            )}
          </div>
        </div>
        {user && id === user._id ? <CartContainer /> : null}
      </div>
    </section>
  );
};

export default CheckoutPage;
