import React, { useReducer } from 'react';
import AuthCtx from './AuthCtx';
import AuthReducer from './AuthReducer';
import axiosInstance, { addJwt } from '../../Util';
const initialState = {
  token: localStorage.getItem('token'),
  isAuthenticated: null,
  loading: true,
  user: null,
  checking: false,
};
const AuthProvider = props => {
  const [state, dispatch] = useReducer(AuthReducer, initialState);
  // Load User
  const loadUser = async () => {
    if (localStorage.token) {
      try {
        const res = await axiosInstance.get('/auth/secret', {
          headers: {
            Authorization: `Bearer ${localStorage.token}`,
          },
        });
        dispatch({ type: 'USER_LOADED', payload: res.data.user });
        addJwt(localStorage.token);
      } catch (err) {
        console.log(err);
        dispatch({ type: 'NOT_LOGIN_YET' });
      }
    } else dispatch({ type: 'NOT_LOGIN_YET' });
  };

  // Register User
  const register = async formData => {
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };

    try {
      await axiosInstance.post('/auth/signup', formData, config);

      login({ email: formData.email, password: formData.password });
    } catch (err) {
      console.log(err);
    }
  };
  // Login User
  const login = async formData => {
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };

    try {
      const response = await axiosInstance.post(
        '/auth/signin',
        formData,
        config
      );
      dispatch({
        type: 'LOGIN_SUCCESS',
        payload: response.data.token,
      });

      loadUser();
    } catch (err) {
      console.log(err);
    }
  };
  // Logout
  const logout = () => dispatch({ type: 'LOGOUT' });

  return (
    <AuthCtx.Provider
      value={{
        ...state,
        register,
        loadUser,
        login,
        logout,
      }}
    >
      {props.children}
    </AuthCtx.Provider>
  );
};

export default AuthProvider;
