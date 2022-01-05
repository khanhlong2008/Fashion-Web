const ProductReducer = (state, action) => {
  switch (action.type) {
    case 'GET_PRODUCT':
      const menList = action.payload.men;
      const womenList = action.payload.women;
      return {
        ...state,
        menList,
        womenList,
        loaded: true,
        products: [...menList, ...womenList],
      };
    case 'ERROR':
      return {
        ...state,
        menList: [],
        womenList: [],
        loaded: true,
        products: [],
      };

    default:
      return state;
  }
};

export default ProductReducer;
