import React, { useContext, useEffect } from 'react';
import AboutUs from '../components/Home/AboutUs';
import Banner from '../components/Home/Banner';
import Blogs from '../components/Home/Blogs';
import Carousel from '../components/Home/Carousel';
import ContactForm from '../components/Home/ContactForm';
import DiscountSale from '../components/Home/DiscountSale';
import Partners from '../components/Home/Partners';
import Policy from '../components/Home/Policy';
import TopProduct from '../components/Home/TopProduct';
import ProductModal from '../components/Product/ProductDetail/ProductModal';
import CartCtx from '../context/CartProvider/CartCtx';

const Home = () => {
  const { showModal } = useContext(CartCtx);

  useEffect(() => {
    if (showModal === true)
      document.querySelector('body').style.overflow = 'hidden';
    else document.querySelector('body').style.overflow = 'visible';
  }, [showModal]);

  return (
    <div>
      <Carousel />
      <AboutUs />
      <TopProduct />
      <DiscountSale />
      <Policy />
      <Banner />
      <Partners />
      <Blogs />
      <ContactForm />
      <ProductModal />
    </div>
  );
};

export default Home;
