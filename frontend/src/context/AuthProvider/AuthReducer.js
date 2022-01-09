const AuthReducer = (state, action) => {
  switch (action.type) {
    case 'REGISTER_SUCCESS':
    case 'LOGIN_SUCCESS':
      localStorage.setItem('token', action.payload);
      return {
        ...state,
        token: action.payload,
        isAuthenticated: true,
        loading: true,
        checking: false,
      };

    case 'LOGOUT':
      localStorage.removeItem('token');
      return {
        token: null,
        isAuthenticated: false,
        loading: true,
        user: null,
        checking: false,
      };
    case 'NOT_LOGIN_YET':
      return {
        token: null,
        isAuthenticated: false,
        loading: false,
        user: null,
        checking: true,
      };
    case 'USER_LOADED':
      return {
        ...state,
        isAuthenticated: true,
        loading: false,
        user: action.payload,
        checking: true,
      };
    default:
      return state;
  }
};

export default AuthReducer;
