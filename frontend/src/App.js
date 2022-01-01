import { useState, useEffect } from "react";
import AboutUs from "./components/About/aboutUs/AboutUs";
import Blog from "./components/Blog/Blog";
import { Route, Routes } from "react-router-dom";
import FashionDetail from "./components/Blog/fashion/FashionDetail";
import Account from "./components/Auth/Create/Account";
import Login from "./components/Auth/Login";
import Forgot from "./components/Auth/Forgot";
import AuthContext from './context/auth'
import http, { addJwt } from './Util'
import Details from "./components/ProductDetail/Details";
import CartProvider from "./context/CartProvider"
// import Logout from "./components/Auth/Logout";
import ProductList from "./components/Products/ProductLists/ProductLists";
import Home from './page/Home';
import Layout from './components/layout'
// import { Navigate } from "react-router";
export default function App() {
  const [authUser, setAuthUser] = useState(null);
  const [checkingAuthUserDone, setCheckingAuthUserDone] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      setCheckingAuthUserDone(true);
      return;
    }
    http
      .get("/auth/secret", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        setAuthUser(response.data.user);
        addJwt(token);
      })
      .catch(err => {
        console.log(err);
      })
      .finally(() => {
        setCheckingAuthUserDone(true);
      });
  }, []);
  if (!checkingAuthUserDone) {
    return (
      <div style={{ textAlign: "center" }}>
        {" "}
        Checking signed-in user status...
      </div>
    );
  }
  // console.log(authUser)
  return (
    <div className="App">
      <AuthContext.Provider value={{ user: authUser, setUser: setAuthUser }}>
        <CartProvider >
          <Layout>
            <Routes>
              {/* {
                authUser ? (
                  <> */}
              <Route path="/home" element={<Home />}></Route>
              <Route path="/forgot" element={<Forgot />}></Route>
              <Route path="/register" element={<Account />}></Route>
              <Route path="/" element={<Login />} />
              <Route path="/about-us" element={<AboutUs />} />
              <Route path="/blog/fashion" element={<Blog />} />
              <Route path="/blog/fashion/:id" element={<FashionDetail />} />
              <Route path="/product/:param" element={<ProductList />} />
              <Route path="/detail/" element={<Details />} />
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

            </Routes >
          </Layout>
        </CartProvider>
      </AuthContext.Provider >
    </div >
  );
}


