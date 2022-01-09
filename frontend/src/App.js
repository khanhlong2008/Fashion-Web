import AboutUs from './components/About/aboutUs/AboutUs';
import Blog from './components/Blog/Blog';
import { Route, Routes, useLocation } from 'react-router-dom';
import FashionDetail from './components/Blog/fashion/FashionDetail';
import Login from './components/Auth/Login';
import Forgot from './components/Auth/Forgot';
import CartProvider from './context/CartProvider';
import InfoProvider from './context/InfoProvider';
// import Logout from "./components/Auth/Logout";
import ProductList from './components/Product/MainProduct';
import Home from './page/Home';
import ProductDetail from './page/ProductDetail';
import Layout from './components/layout';
import Cart from './page/Cart';
import CheckoutPage from './page/CheckoutPage';
import ProductProvider from './context/ProductProvider';
import AuthProvider from './context/AuthProvider';
import OrderSuccess from './components/CheckoutPage/OrderSuccess';
import NotFound from './page/404NotFound';
import SearchPage from './page/SearchPage';
import WishList from './page/WishList';
import { useEffect } from 'react';
import Purchase from './page/Purchase';
import Account from './page/Account';
import FlashsaleDetail from './components/Product/FlashSale/FlashsaleDetail';
// import { Navigate } from "react-router";
export default function App() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <AuthProvider>
      <ProductProvider>
        <CartProvider>
          <InfoProvider>
            <Layout>
              <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route path="/forgot" element={<Forgot />}></Route>
                <Route path="/register" element={<Account />}></Route>
                <Route path="/login" element={<Login />} />
                <Route path="/about-us" element={<AboutUs />} />
                <Route path="/blog/fashion" element={<Blog />} />
                <Route path="/blog/fashion/:id" element={<FashionDetail />} />
                <Route path="/collection/:param" element={<ProductList />} />
                <Route path="/products/:id" element={<ProductDetail />} />
                <Route path="/checkouts/:id" element={<CheckoutPage />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/ordersuccess" element={<OrderSuccess />} />
                <Route path="/search" element={<SearchPage />} />
                <Route path="/wishlist" element={<WishList />} />
                <Route path="/myaccount" element={<Account />} />
                <Route path="/mypurchase" element={<Purchase />} />
                <Route path="/flashsale" element={<FlashsaleDetail />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </Layout>
          </InfoProvider>
        </CartProvider>
      </ProductProvider>
    </AuthProvider>
  );
}
