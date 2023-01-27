import {configureStore} from '@reduxjs/toolkit';

import CourseSlice from './reducers/CourseSlice';
import PaymentSlice from './reducers/PaymentSlice';
import UserSlice from './reducers/UserSlice';

export default configureStore({
  reducer : {
    user : UserSlice,
    course : CourseSlice,
    payment : PaymentSlice,
  },
});
