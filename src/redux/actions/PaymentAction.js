import { toast } from 'react-toastify';

import Api from '../../utils/api';
import {
  paymentError,
  paymentLoading,
  stopLoading,
} from '../reducers/PaymentSlice';

export const getSubscribeAction = (plan) => async (dispatch) => {
  try {
    dispatch(paymentLoading());
    const res = await Api.post('/subscribe', plan);
    console.log(res);
    // redirect to payment page
    window.location.href = res.url;
    dispatch(stopLoading());
  } catch (error) {
    toast.error(error.response.data.message);
    dispatch(paymentError(error.response.data));
  }
};
