import React, { useContext, useReducer } from 'react';
import ProductCtx from './ProductCtx';
import axiosIntance from '../../Util';
import ProductReducer from './ProductReducer';
import axiosInstance from '../../Util';
import AuthCtx from '../AuthProvider/AuthCtx';

const initialState = {
  menList: [],
  womenList: [],
  products: [],
  loaded: false,
  wishList: [],
  idWishList: [],
  changed: false,
  loading: true,
};

const ProductProvider = props => {
  const [state, dispatch] = useReducer(ProductReducer, initialState);
  const { user } = useContext(AuthCtx);

  const getProducts = async () => {
    try {
      const menRes = await axiosIntance.get('/product_male');
      const womenRes = await axiosIntance.get('/product_female');

      dispatch({
        type: 'GET_PRODUCT',
        payload: { men: menRes.data.product, women: womenRes.data.product },
      });
    } catch (err) {
      dispatch({
        type: 'ERROR',
      });
    }
  };

  const getWishList = async () => {
    try {
      const res = await axiosInstance.get(`/wishlist/${user._id}`);
      dispatch({ type: 'GET_WISHLIST', payload: res.data.list });
    } catch (error) {
      dispatch({ type: 'ERROR_WISHLIST' });
    }
  };

  const sendWishList = async wishlist => {
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };
    try {
      await axiosInstance.put(`/wishlist/${user._id}`, wishlist, config);
    } catch (error) {
      console.log('error');
    }
  };

  const removeItemFromWishList = id => {
    dispatch({ type: 'REMOVE_WISHLIST', payload: id });
  };

  const addItemToWishList = item => {
    dispatch({ type: 'ADD_WISHLIST', payload: item });
  };

  return (
    <ProductCtx.Provider
      value={{
        ...state,
        getProducts,
        getWishList,
        sendWishList,
        removeItemFromWishList,
        addItemToWishList,
      }}
    >
      {props.children}
    </ProductCtx.Provider>
  );
};

export default ProductProvider;
