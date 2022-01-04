import React, { useReducer } from 'react';
import ProductCtx from './ProductCtx';
import axiosIntance from '../../Util';
import ProductReducer from './ProductReducer';

const initialState = {
  menList: [],
  womenList: [],
  products: [],
};

const ProductProvider = props => {
  const [state, dispatch] = useReducer(ProductReducer, initialState);

  const getProducts = async () => {
    try {
      const menRes = await axiosIntance.get('/product_male');
      const womenRes = await axiosIntance.get('/product_female');

      dispatch({
        type: 'GET_PRODUCT',
        payload: { men: menRes.data.product, women: womenRes.data.product },
      });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <ProductCtx.Provider
      value={{
        ...state,
        getProducts,
      }}
    >
      {props.children}
    </ProductCtx.Provider>
  );
};

export default ProductProvider;
