const ProductReducer = (state, action) => {
  switch (action.type) {
    case 'GET_PRODUCT':
      const menList = action.payload.men;
      const womenList = action.payload.women;
      return {
        ...state,
        menList,
        womenList,
        products: [...menList, ...womenList],
      };

    default:
      return state;
  }
};

export default ProductReducer;
