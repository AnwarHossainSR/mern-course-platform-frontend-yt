import Api from '../../utils/api';
import {
  getPayment,
  paymentError,
  paymentLoading,
  stopLoading,
} from '../reducers/PaymentSlice';

export const getSubscribeAction = (plan) => async (dispatch) => {
  try {
    dispatch(paymentLoading());
    const res = await Api.post('/subscribe', plan);
    console.log(res);
    dispatch(getPayment(res));
    dispatch(stopLoading());
  } catch (error) {
    console.log(error.response.data);
    dispatch(paymentError(error.response.data));
  }
};
