const InfoReducer = (state, action) => {
  switch (action.type) {
    case 'GET_INFO':
      return {
        ...state,
        changed: false,
        isLoading: false,
        info: action.payload,
      };
    case 'GET_INFO_FAIL':
      return {
        ...state,
        changed: false,
        isLoading: false,
        info: null,
      };
    case 'NEW_INFO':
      return {
        ...state,
        changed: true,
        info: action.payload,
      };

    default:
      return state;
  }
};

export default InfoReducer;
