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
    case 'GET_WISHLIST':
      return {
        ...state,
        loading: false,
        wishList: action.payload,
        idWishList: action.payload.map(item => item.id),
      };
    case 'ERROR_WISHLIST':
      return {
        ...state,
        loading: false,
        wishList: [],
        idWishList: [],
      };

    case 'ADD_WISHLIST':
      return {
        ...state,
        changed: true,
        wishList: [...state.wishList, action.payload],
        idWishList: [...state.idWishList, action.payload.id],
      };

    case 'REMOVE_WISHLIST':
      return {
        ...state,
        changed: true,
        wishList: state.wishList.filter(item => item.id !== action.payload),
        idWishList: state.idWishList.filter(item => item.id !== action.payload),
      };

    default:
      return state;
  }
};

export default ProductReducer;
