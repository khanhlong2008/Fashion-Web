import React, { useReducer } from 'react';
import AuthCtx from './AuthCtx';
import AuthReducer from './AuthReducer';
import axiosInstance from '../../Util';
const initialState = {
  token: localStorage.getItem('token'),
  isAuthenticated: null,
  loading: true,
  user: null,
  checking: false,
  msg: null,
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
      } catch (err) {
        dispatch({ type: 'NOT_LOGIN_YET' });
      }
    } else dispatch({ type: 'NOT_LOGIN_YET' });
  };

  // Update User

  const updateUser = async form => {
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };
    try {
      await axiosInstance.put(`/user/${state.user._id}`, form, config);
      dispatch({ type: 'UPDATE_SUCCESS' });
      loadUser();
    } catch (error) {
      dispatch({ type: 'UPDATE_ERROR', msg: error.response.data.msg });
    }
  };

  const clearMessage = () => {
    dispatch({ type: 'CLEAR_MESSAGE' });
  };

  // Register User
  const register = async formData => {
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };

    try {
      const response = await axiosInstance.post(
        '/auth/signup',
        formData,
        config
      );

      dispatch({
        type: 'REGISTER_SUCCESS',
        payload: response.data.token,
      });

      loadUser();
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
  const logout = () => {
    dispatch({ type: 'LOGOUT' });
    setTimeout(() => {
      dispatch({ type: 'NOT_LOGIN_YET' });
    }, 500);
  };
  return (
    <AuthCtx.Provider
      value={{
        ...state,
        register,
        loadUser,
        login,
        logout,
        updateUser,
        clearMessage,
      }}
    >
      {props.children}
    </AuthCtx.Provider>
  );
};

export default AuthProvider;