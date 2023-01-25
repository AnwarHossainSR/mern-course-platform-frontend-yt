import get from '../../utils/api';
import {
  courseError,
  courseLoading,
  getCourses,
} from '../reducers/CourseSlice';

export const getCoursesAction = (params) => async (dispatch) => {
  try {
    dispatch(courseLoading());
    const res = await get('/courses', { params });
    console.log(res);
    dispatch(getCourses(res.data));
  } catch (error) {
    dispatch(courseError(error.response.data));
  }
};
