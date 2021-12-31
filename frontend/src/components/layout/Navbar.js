import React, { useContext, useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import CartCtx from '../../context/CartProvider/CartCtx';
import CartPopUp from '../CartPopUp';
import AuthContext from '../../context/auth'
const Navbar = () => {
  const [onActiveMenu, setActiveMenu] = useState(false);
  const [onSearch, setOnSearch] = useState(false);
  const [onShowCart, setShowCart] = useState(false);
  const { totalQuantity } = useContext(CartCtx);
  const authCtx = useContext(AuthContext)

  useEffect(() => {
    document.querySelector("body").addEventListener("click", (e) => {
      const searchContainer = document.querySelector("#searchBar");
      const cart = document.querySelector(".cart-wrapper");

      if (
        !searchContainer.isEqualNode(e.target) &&
        !searchContainer.contains(e.target)
      )
        setOnSearch(false);
      if (!cart.isEqualNode(e.target) && !cart.contains(e.target))
        setShowCart(false);
    });

    window.addEventListener("scroll", () => {
      if (window.scrollY > 90) {
        document.querySelector("header").classList.add("fixed");
      } else {
        document.querySelector("header").classList.remove("fixed");
      }
    });
  }, []);

  // useEffect(() => {
  //   onchangeClickStatus(isShowMen);
  // });

  const activeHandler = () => {
    setActiveMenu((state) => !state);
  };

  const handleSearchBar = (e) => {
    e.stopPropagation();
    setOnSearch((state) => !state);
    setShowCart(false);
  };

  const handleShowCart = (e) => {
    e.stopPropagation();
    setShowCart((state) => !state);
    setOnSearch(false);
  };

  return (
    <header>
      <nav className="container navbar my-0">
        <div className="menu-mb d-flex align-items-center d-lg-none">
          <div
            className={`sign-container ${onActiveMenu ? "active" : ""}`}
            onClick={activeHandler}
          >
            <div className="sign"></div>
          </div>
        </div>
        <a href="/" className="h2 nav-logo">
          Aveda <span className="text-secondary">.</span>
        </a>
        <div className={`menu-list ${onActiveMenu ? "show" : ""}`}>
          <div className="menu-collapse">
            <p className="exit-btn d-lg-none" onClick={activeHandler}>
              X
            </p>
            <ul>
              {
                authCtx.user ? (
                  <>
                    <li>
                      <NavLink to="/product/men">Men</NavLink>
              </li>
              <li>
                      <NavLink to="/product/women">Women</NavLink>
              </li>
              <li>
                <NavLink to="/blog/fashion">Blogs</NavLink>
              </li>
              <li>
                <NavLink to="/about-us">About us</NavLink>
              </li>
              <li>
                <NavLink to="/pages/contact">Contact</NavLink>
              </li>
                  </>
                ) : (
                  <>
                    <li>
                      <NavLink to="/">Login</NavLink>
                    </li>
                    <li>
                      <NavLink to="/register">Register</NavLink>
                    </li>
                  </>
                )

              }


            </ul>
          </div>
          <div className="back-drop" onClick={activeHandler}></div>
        </div>
        <div className="icon-container">
          <i className="h5 bi bi-search" onClick={handleSearchBar}></i>
          <div
            id="searchBar"
            className={`input-group input-group-sm search-container ${
              onSearch ? "show" : ""
            }`}
          >
            <input
              type="text"
              className="form-control me-1"
              placeholder="Search"
              aria-label="Sizing example input"
              aria-describedby="inputGroup-sizing-sm"
            />
            <i className="bi bi-search"></i>
          </div>

          <div className="cart-icon">
            <i className="bi bi-cart2" onClick={handleShowCart}></i>
            <p className="total-quantity">{totalQuantity}</p>
          </div>
          <CartPopUp show={onShowCart} />
          <i className="bi bi-person" style={{ marginLeft: 15 }}></i>
          {authCtx.user ? (<span style={{ marginLeft: 5 }}> {authCtx.user}</span>) : null}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
