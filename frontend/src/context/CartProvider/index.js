import React, { useReducer } from 'react';
import CartCtx from './CartCtx';
import cartReducer from './cartReducer';

const initialState = {
  changed: false,
  items: [],
  totalQuantity: 0,
  totalPrice: 0,
  message: '',
  showModal: false,
  modal: {
    id: '',
    name: '',
    price: 0,
    front: '',
    star: 0,
    back: '',
  },
};

const CartProvider = props => {
  const [state, dispatch] = useReducer(cartReducer, initialState);

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

  const handleCloseModal = item => {
    dispatch({
      type: 'CLOSE_MODAL',
    });
  };

  const removeItemFromCart = id => {
    dispatch({
      type: 'REMOVE_ITEM',
      payload: id,
    });
  };

  return (
    <CartCtx.Provider
      value={{
        ...state,
        addItemToCart,
        removeItemFromCart,
        handleShowModal,
        handleCloseModal,
      }}
    >
      {props.children}
    </CartCtx.Provider>
  );
};

export default CartProvider;
