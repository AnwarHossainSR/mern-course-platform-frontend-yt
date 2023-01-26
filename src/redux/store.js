import { configureStore } from '@reduxjs/toolkit';
import CourseSlice from './reducers/CourseSlice';
import UserSlice from './reducers/UserSlice';

export default configureStore({
  reducer: {
    user: UserSlice,
    course: CourseSlice,
  },
});
