import React, { useContext, useEffect } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import BackToTopBtn from './BackToTopBtn';
import CartCtx from '../../context/CartProvider/CartCtx';
import AuthCtx from '../../context/AuthProvider/AuthCtx';
import ProductCtx from '../../context/ProductProvider/ProductCtx';
import Notification from '../Home/Notification';
import InfoCtx from '../../context/InfoProvider/InfoCtx';
import { useLocation } from 'react-router-dom';

const Layout = props => {
  const { getCart, items, sendCartData, changed, message } =
    useContext(CartCtx);
  const { getInfo, sendInfo, changed: infoChanged, info } = useContext(InfoCtx);
  const { isAuthenticated, checking, loadUser } = useContext(AuthCtx);
  const { getProducts } = useContext(ProductCtx);
  const location = useLocation();

  useEffect(() => {
    if (isAuthenticated) {
      getCart();
      getInfo();
    }

    // eslint-disable-next-line
  }, [isAuthenticated]);

  useEffect(() => {
    getProducts();
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    if (changed) {
      sendCartData(items);
    }
    // eslint-disable-next-line
  }, [items, changed]);

  useEffect(() => {
    if (changed) {
      sendCartData(items);
    }
    // eslint-disable-next-line
  }, [items, changed]);

  useEffect(() => {
    if (infoChanged) {
      sendInfo(info);
    }
    // eslint-disable-next-line
  }, [info, infoChanged]);

  useEffect(() => {
    loadUser();
    // eslint-disable-next-line
  }, []);
  console.log(location.pathname);

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
        {message && location.pathname !== '/cart' && <Notification />}
        <BackToTopBtn />
        <Footer />
      </>
    );
};

export default Layout;
