import { toast } from 'react-toastify';

import Api from '../../utils/api';
import {
  getUsers,
  loading,
  loginFail,
  loginSuccess,
  logoutSuccess,
  stopLoading,
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
    dispatch(logoutSuccess());
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

export const getChangePasswordAction = (credentials) => async (dispatch) => {
  dispatch(loading());
  try {
    const res = await Api.put('/change-password', credentials);
    toast.success(res.message);
    dispatch(stopLoading());
  } catch (error) {
    toast.error(error?.response?.data?.message);
    dispatch(loginFail({ changePassword: error?.response?.data?.message }));
  }
};

export const getUpdateProfileAction = (credentials) => async (dispatch) => {
  dispatch(loading());
  try {
    const res = await Api.put('/update-profile', credentials);
    dispatch(getWhoAmIAction());
    toast.success(res.message);
    dispatch(stopLoading());
  } catch (error) {
    toast.error(error?.response?.data?.message);
    dispatch(loginFail({ updateProfile: error?.response?.data?.message }));
  }
};

export const getUpdateProfilePictureAction = (file) => async (dispatch) => {
  dispatch(loading());
  try {
    const res = await Api.put('/update-profile-picture', file);
    dispatch(getWhoAmIAction());
    toast.success(res.message);
    dispatch(stopLoading());
  } catch (error) {
    toast.error(error?.response?.data?.message);
    toast.error(error?.response?.data?.message);
  }
};

export const getAdminUsersAction = () => async (dispatch) => {
  dispatch(loading());
  try {
    const res = await Api.get('/admin/users');
    console.log(res);
    dispatch(getUsers(res.users));
    dispatch(stopLoading());
  } catch (error) {
    console.log(error);
    dispatch(loginFail({ adminUsers: error?.response?.data?.message }));
  }
};

export const getAdminDeleteUserAction = (id) => async (dispatch) => {
  dispatch(loading());
  try {
    const res = await Api.delete(`/admin/user/${id}`);
    dispatch(getAdminUsersAction());
    toast.success(res.message);
    dispatch(stopLoading());
  } catch (error) {
    console.log(error);
    dispatch(loginFail({ adminDeleteUser: error?.response?.data?.message }));
  }
};

export const getAdminUpdateUserRoleAction = (id) => async (dispatch) => {
  dispatch(loading());
  try {
    const res = await Api.put(`/admin/user/${id}`);
    dispatch(getAdminUsersAction());
    toast.success(res.message);
    dispatch(stopLoading());
  } catch (error) {
    console.log(error);
    dispatch(loginFail({ adminUpdateUser: error?.response?.data?.message }));
  }
};
