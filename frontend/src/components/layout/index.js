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
import LoadingSpiner from './LoadingSpiner';

const Layout = props => {
  const { getCart, items, sendCartData, changed, message } =
    useContext(CartCtx);
  const { getInfo, sendInfo, changed: infoChanged, info } = useContext(InfoCtx);
  const { isAuthenticated, checking, loadUser, user } = useContext(AuthCtx);
  const { getProducts } = useContext(ProductCtx);
  const location = useLocation();

  useEffect(() => {
    loadUser();
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    if (user && isAuthenticated) {
      getCart();
      getInfo();
    }

    // eslint-disable-next-line
  }, [isAuthenticated, user]);

  useEffect(() => {
    getProducts();
    getInfo();
    // eslint-disable-next-line
  }, []);

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

  if (!checking) {
    return <LoadingSpiner />;
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
