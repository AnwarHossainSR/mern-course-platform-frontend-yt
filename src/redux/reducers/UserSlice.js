import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  user : {},
  isAuth : false,
  isLoading : false,
  error : null,
};

const userSlice = createSlice({
  name : 'user',
  initialState,
  reducers : {
    loading : (state) => { state.isLoading = true; },
    clearError : (state) => { state.error = null; },
    loginSuccess : (state, action) => {
      state.isLoading = false;
      state.isAuth = true;
      state.user = action.payload;
    },
    loginFail : (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    registerSuccess : (state, action) => {
      state.isLoading = false;
      state.isAuth = true;
      state.user = action.payload;
    },
    registerFail : (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    logoutSuccess : (state) => {
      state.isLoading = false;
      state.isAuth = false;
      state.user = {};
    },
    logoutFail : (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    whoami : (state, action) => {
      state.isLoading = false;
      state.isAuth = true;
      state.user = action.payload;
    },
  },
});

export const {
  loading,
  clearError,
  loginSuccess,
  loginFail,
  registerSuccess,
  registerFail,
  logoutSuccess,
  logoutFail,
  whoami,
} = userSlice.actions;

export default userSlice.reducer;
