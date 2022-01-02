import React, { useContext, useEffect } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import BackToTopBtn from './BackToTopBtn';
import CartCtx from '../../context/CartProvider/CartCtx';

const Layout = props => {
  const { getCart, items, sendCartData, changed } = useContext(CartCtx);
  useEffect(() => {
    getCart();
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    if (changed) {
      sendCartData(items);
    }
    // eslint-disable-next-line
  }, [items, changed]);

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
