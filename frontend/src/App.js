import AboutUs from './components/About/aboutUs/AboutUs';
import Blog from './components/Blog/Blog';
import { Route, Routes } from 'react-router-dom';
import FashionDetail from './components/Blog/fashion/FashionDetail';
import Account from './components/Auth/Create/Account';
import Login from './components/Auth/Login';
import Forgot from './components/Auth/Forgot';
import CartProvider from './context/CartProvider';
// import Logout from "./components/Auth/Logout";
import ProductList from './components/Product/MainProduct/ProductLists/ProductLists';
import Home from './page/Home';
import ProductDetail from './page/ProductDetail';
import Layout from './components/layout';
import Cart from './page/Cart';
import CheckoutPage from './page/CheckoutPage';
import ProductProvider from './context/ProductProvider';
import AuthProvider from './context/AuthProvider';
// import { Navigate } from "react-router";
export default function App() {
  return (
    <AuthProvider>
      <ProductProvider>
        <CartProvider>
          <Layout>
            <Routes>
              {/* {
                authUser ? (
                  <> */}
              <Route path="/" element={<Home />}></Route>
              <Route path="/forgot" element={<Forgot />}></Route>
              <Route path="/register" element={<Account />}></Route>
              <Route path="/login" element={<Login />} />
              <Route path="/about-us" element={<AboutUs />} />
              <Route path="/blog/fashion" element={<Blog />} />
              <Route path="/blog/fashion/:id" element={<FashionDetail />} />
              <Route path="/collection/:param" element={<ProductList />} />
              <Route path="/products/:id" element={<ProductDetail />} />
              <Route path="/checkouts/:id:type" element={<CheckoutPage />} />
              <Route path="/cart" element={<Cart />} />
              {/* </>
                ) : (
                  <> */}

              {/* </>
                )
              } */}

              {/* <Route
          path="/logout"
          render={() => {
            return localStorage.getItem('accessToken') ? (
              <Logout />
            ) : (
              <Navigate replace to="/" />
            );
          }}

              ></Route> */}
            </Routes>
          </Layout>
        </CartProvider>
      </ProductProvider>
    </AuthProvider>
  );
}
