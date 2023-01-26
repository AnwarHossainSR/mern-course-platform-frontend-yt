import { toast } from 'react-toastify';
import Api from '../../utils/api';
import {
  courseError,
  courseLoading,
  getCourses,
  stopLoading,
} from '../reducers/CourseSlice';
import { getWhoAmIAction } from './UserAction';

export const getCoursesAction = (params) => async (dispatch) => {
  console.log('called');
  try {
    dispatch(courseLoading());
    if (!params) params = '';
    const res = await Api.get(`/courses${params}`);
    console.log(res);
    dispatch(getCourses(res.courses));
  } catch (error) {
    dispatch(courseError(error.response.data));
  }
};

export const addToPlaylistAction = (courseId) => async (dispatch) => {
  try {
    dispatch(courseLoading());
    const res = await Api.post('/add-to-playlist', courseId);
    dispatch(getWhoAmIAction());
    dispatch(stopLoading());
    toast.success(res.message);
  } catch (error) {
    dispatch(stopLoading());
    toast.error(error.response.data.message);
  }
};
