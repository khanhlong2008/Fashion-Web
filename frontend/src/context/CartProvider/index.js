import React, { useContext, useReducer } from 'react';
import CartCtx from './CartCtx';
import cartReducer from './cartReducer';
import axiosInstance from '../../Util';
import AuthCtx from '../AuthProvider/AuthCtx';
import { useNavigate } from 'react-router-dom';

const initialState = {
  changed: false,
  items: [],
  totalQuantity: 0,
  totalPrice: 0,
  message: '',
  showModal: false,
  modal: {
    id: '',
    title: '',
    price: 0,
    imgList: [{ imgItem: '' }],
    star: 0,
    color: {},
    size: {},
    stock: 0,
  },
  isLoading: true,
  orders: [],
  isOrdered: false,
};

const CartProvider = props => {
  const [state, dispatch] = useReducer(cartReducer, initialState);
  const { user } = useContext(AuthCtx);
  const navigate = useNavigate();

  const getCart = async () => {
    try {
      const res = await axiosInstance.get(`/cart/${user._id}`);
      dispatch({ type: 'GET_CART', payload: res.data.cart });
    } catch (error) {
      dispatch({ type: 'ERROR' });
    }
  };

  const getOrders = async () => {
    try {
      const res = await axiosInstance.get(`/order/${user._id}`);
      dispatch({ type: 'GET_ORDER', payload: res.data });
    } catch (error) {
      dispatch({ type: 'ERROR' });
    }
  };

  const postOrder = async order => {
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };
    try {
      await axiosInstance.post(`/order/${user._id}`, order, config);
      await dispatch({ type: 'ORDER_SUCCESS' });
      navigate('/ordersuccess');
      document.body.addEventListener('click', returnToHome, { once: true });
    } catch (error) {
      console.log('error');
    }
  };

  const sendCartData = async cart => {
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };
    try {
      await axiosInstance.put(`/cart/${user._id}`, cart, config);
    } catch (error) {
      console.log('error');
    }
  };

  const addItemToCart = item => {
    dispatch({
      type: 'ADD_ITEM',
      payload: item,
    });
    setTimeout(() => dispatch({ type: 'CLEAR_MESSAGE' }), 2000);
  };

  const handleShowModal = item => {
    dispatch({
      type: 'SHOW_MODAL',
      payload: item,
    });
  };

  const handleCloseModal = () => {
    dispatch({
      type: 'CLOSE_MODAL',
    });
  };

  const removeItemFromCart = item => {
    dispatch({
      type: 'REMOVE_ITEM',
      payload: item,
    });
  };

  const removeOneFromItem = item => {
    dispatch({
      type: 'REMOVE_ONE',
      payload: item,
    });
  };

  const changeQuantityItem = item => {
    dispatch({
      type: 'CHANGE_QUANTITY',
      payload: item,
    });
  };

  const handleBlockAddToCart = () => {
    dispatch({
      type: 'SEND_MESSAGE',
      payload: 'Please login first',
    });

    setTimeout(() => dispatch({ type: 'CLEAR_MESSAGE' }), 2000);
  };

  const returnToHome = () => {
    console.log('clcik');
    dispatch({ type: 'RETURN' });
  };

  return (
    <CartCtx.Provider
      value={{
        ...state,
        addItemToCart,
        removeItemFromCart,
        handleShowModal,
        handleCloseModal,
        removeOneFromItem,
        changeQuantityItem,
        getCart,
        sendCartData,
        handleBlockAddToCart,
        getOrders,
        postOrder,
        returnToHome,
      }}
    >
      {props.children}
    </CartCtx.Provider>
  );
};

export default CartProvider;
