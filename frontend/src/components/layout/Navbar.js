import React, { useContext, useEffect, useState } from 'react';
import { NavLink, Link, useNavigate } from 'react-router-dom';
import AuthCtx from '../../context/AuthProvider/AuthCtx';
import CartCtx from '../../context/CartProvider/CartCtx';
import CartPopUp from '../Cart/CartPopUp';

const Navbar = () => {
  const [onActiveMenu, setActiveMenu] = useState(false);
  const [onSearch, setOnSearch] = useState(false);
  const [onShowCart, setShowCart] = useState(false);
  const [onAuthMenu, setAuthMenu] = useState(false);
  const { totalQuantity } = useContext(CartCtx);
  const { user, logout } = useContext(AuthCtx);
  const navigate = useNavigate();

  useEffect(() => {
    document.querySelector('body').addEventListener('click', e => {
      const searchContainer = document.querySelector('#searchBar');

      if (
        !searchContainer.isEqualNode(e.target) &&
        !searchContainer.contains(e.target)
      )
        setOnSearch(false);

      if (user) {
        const cart = document.querySelector('.cart-wrapper');
        const menuAuth = document.querySelector('.profile-container');
        if (cart && !cart.isEqualNode(e.target) && !cart.contains(e.target))
          setShowCart(false);
        if (
          menuAuth &&
          !menuAuth.isEqualNode(e.target) &&
          !menuAuth.contains(e.target)
        )
          setAuthMenu(false);
      }
    });

    window.addEventListener('scroll', () => {
      const header = document.querySelector('header');
      if (header) {
        if (window.scrollY > 90) {
          document.querySelector('header').classList.add('fixed');
        } else {
          document.querySelector('header').classList.remove('fixed');
        }
      }
    });

    return () => {
      setAuthMenu(false);
      setShowCart(false);
      setOnSearch(false);
    };

    //eslint-disable-next-line
  }, []);

  const activeHandler = () => {
    setActiveMenu(state => !state);
  };

  const activeAuthMenu = e => {
    e.stopPropagation();
    setAuthMenu(state => !state);
    setShowCart(false);
    setOnSearch(false);
  };

  const offMenuMobile = link => {
    setActiveMenu(false);
    navigate(link);
  };

  const handleSearchBar = e => {
    e.stopPropagation();
    setOnSearch(state => !state);
    setShowCart(false);
  };

  const handleShowCart = e => {
    e.stopPropagation();
    setShowCart(state => !state);
    setOnSearch(false);
  };

  return (
    <header>
      <nav className="container navbar my-0">
        <div className="menu-mb d-flex align-items-center d-lg-none">
          <div
            className={`sign-container ${onActiveMenu ? 'active' : ''}`}
            onClick={activeHandler}
          >
            <div className="sign"></div>
          </div>
        </div>
        <Link to="/" className="h2 nav-logo">
          Aveda <span className="text-secondary">.</span>
        </Link>
        <div className={`menu-list ${onActiveMenu ? 'show' : ''}`}>
          <div className="menu-collapse">
            <p className="exit-btn d-lg-none" onClick={activeHandler}>
              X
            </p>
            <ul>
              <li onClick={offMenuMobile.bind(null, '/collection/men')}>
                <NavLink to="/collection/men">Men</NavLink>
              </li>
              <li onClick={offMenuMobile.bind(null, '/collection/women')}>
                <NavLink to="/collection/women">Women</NavLink>
              </li>
              <li onClick={offMenuMobile.bind(null, '/blog/fashion')}>
                <NavLink to="/blog/fashion">Blogs</NavLink>
              </li>
              <li onClick={offMenuMobile.bind(null, '/about-us')}>
                <NavLink to="/about-us">About us</NavLink>
              </li>
              <li onClick={offMenuMobile.bind(null, '/pages/contact')}>
                <NavLink to="/pages/contact">Contact</NavLink>
              </li>
            </ul>
          </div>
          <div className="back-drop" onClick={activeHandler}></div>
        </div>
        <div className="icon-container">
          <i className="h5 bi bi-search" onClick={handleSearchBar}></i>
          <div
            id="searchBar"
            className={`input-group input-group-sm search-container ${
              onSearch ? 'show' : ''
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
          {user && (
            <div className="cart-icon">
              <i className="bi bi-cart2" onClick={handleShowCart}></i>
              <p className="total-quantity">{totalQuantity}</p>
            </div>
          )}

          <CartPopUp show={onShowCart} />
          {!user && (
            <div className="auth-container">
              <NavLink to="/login">Login</NavLink>
              <NavLink to="/register">Register</NavLink>
            </div>
          )}

          {user && (
            <div className="profile-container" onClick={activeAuthMenu}>
              <div className="avt-container">
                <img
                  src="data:image/jpeg;base64,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"
                  alt=""
                />
              </div>
              <ul className={`profile-menu ${onAuthMenu ? 'show' : ''}`}>
                <li>My account</li>
                <li>My purchase</li>
                <li onClick={logout}>Logout</li>
              </ul>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
