import React, { useContext, useReducer } from 'react';
import InfoCtx from './InfoCtx';
import InfoReducer from './InfoReducer';
import axiosInstance from '../../Util';
import AuthCtx from '../AuthProvider/AuthCtx';

const initialState = {
  info: {},
  isLoading: true,
  changed: false,
};

const CartProvider = props => {
  const [state, dispatch] = useReducer(InfoReducer, initialState);
  const { user } = useContext(AuthCtx);

  const getInfo = async () => {
    try {
      const res = await axiosInstance.get(`/shippinginfo/${user._id}`);
      dispatch({ type: 'GET_INFO', payload: res.data });
    } catch (error) {
      console.log('error');
    }
  };

  const sendInfo = async form => {
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };
    try {
      await axiosInstance.put(`/shippinginfo/${user._id}`, form, config);
    } catch (error) {
      console.log('error');
    }
  };

  const replaceInfo = async form => {
    dispatch({ type: 'NEW_INFO', payload: form });
  };

  return (
    <InfoCtx.Provider
      value={{
        ...state,
        getInfo,
        sendInfo,
        replaceInfo,
      }}
    >
      {props.children}
    </InfoCtx.Provider>
  );
};

export default CartProvider;
