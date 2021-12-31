import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import BackToTopBtn from './BackToTopBtn';

const Layout = props => {
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
