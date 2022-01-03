import React, { useContext, useEffect } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import BackToTopBtn from './BackToTopBtn';
import CartCtx from '../../context/CartProvider/CartCtx';
import AuthCtx from '../../context/AuthProvider/AuthCtx';

const Layout = props => {
  const { getCart, items, sendCartData, changed } = useContext(CartCtx);
  const { isAuthenticated, checking, loadUser } = useContext(AuthCtx);
  useEffect(() => {
    if (isAuthenticated) getCart();

    // eslint-disable-next-line
  }, [isAuthenticated]);

  useEffect(() => {
    if (changed) {
      sendCartData(items);
    }
    // eslint-disable-next-line
  }, [items, changed]);

  useEffect(() => {
    loadUser();
    // eslint-disable-next-line
  }, []);

  if (!checking) {
    return (
      <div style={{ textAlign: 'center' }}>
        {' '}
        Checking signed-in user status...
      </div>
    );
  } else
    return (
      <>
        <Navbar />
        {props.children}
        <BackToTopBtn />
        <Footer />
      </>
    );
};

export default Layout;
