const InfoReducer = (state, action) => {
  switch (action.type) {
    case 'GET_INFO':
      return {
        ...state,
        changed: false,
        isLoading: true,
        info: action.payload,
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
