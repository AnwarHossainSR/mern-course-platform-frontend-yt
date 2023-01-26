import { toast } from 'react-toastify';

import Api from '../../utils/api';
import {
  loading,
  loginFail,
  loginSuccess,
  whoami,
} from '../reducers/UserSlice';

export const getLoginAction = (credentials) => async (dispatch) => {
  dispatch(loading());
  try {
    const res = await Api.post('/login', credentials);
    dispatch(loginSuccess(res.user));
    localStorage.setItem('token', res.token);
    toast.success(res.message);
  } catch (error) {
    dispatch(loginFail({ login: error?.response?.data?.message }));
  }
};

export const getRegisterAction = (credentials) => async (dispatch) => {
  dispatch(loading());
  try {
    const res = await Api.post('/register', credentials);
    dispatch(loginSuccess(res.user));
    localStorage.setItem('token', res.token);
    toast.success(res.message);
  } catch (error) {
    dispatch(loginFail({ register: error?.response?.data?.message }));
  }
};

export const getLogoutAction = () => async (dispatch) => {
  dispatch(loading());
  try {
    const res = await Api.get('/logout');
    dispatch(loginSuccess({}));
    localStorage.removeItem('token');
    toast.success(res.message);
  } catch (error) {
    dispatch(loginFail({ logout: error?.response?.data?.message }));
  }
};

export const getWhoAmIAction = () => async (dispatch) => {
  dispatch(loading());
  try {
    const res = await Api.get('/me');
    dispatch(whoami(res.user));
  } catch (error) {
    localStorage.removeItem('token');
    dispatch(loginFail({ whoami: error?.response?.data?.message }));
  }
};
