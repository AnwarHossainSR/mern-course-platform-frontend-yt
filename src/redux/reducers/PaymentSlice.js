import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  payment : null,
  loading : false,
  error : null,
};

const paymentSlice = createSlice({
  name : 'payment',
  initialState,
  reducers : {
    paymentLoading : (state) => { state.loading = true; },
    stopLoading : (state) => { state.loading = false; },
    paymentError : (state, action) => { state.error = action.payload; },
    getPayment : (state, action) => { state.payment = action.payload; },
    clearPayment : (state) => { state.payment = null; },
  },
});

export const {
  paymentLoading,
  stopLoading,
  paymentError,
  getPayment,
  clearPayment,
} = paymentSlice.actions;

export default paymentSlice.reducer;
