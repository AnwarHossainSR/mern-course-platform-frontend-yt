import { toast } from 'react-toastify';

import Api from '../../utils/api';
import {
  courseDelete,
  courseDetails,
  courseError,
  courseLoading,
  getCourses,
  stopLoading,
} from '../reducers/CourseSlice';

import { getWhoAmIAction } from './UserAction';

export const getCoursesAction = (params) => async (dispatch) => {
  try {
    dispatch(courseLoading());
    if (!params) params = '';
    const res = await Api.get(`/courses${params}`);
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

export const removeFromPlaylistAction = (courseId) => async (dispatch) => {
  try {
    dispatch(courseLoading());
    const res = await Api.delete(`/remove-from-playlist?id=${courseId}`);
    dispatch(getWhoAmIAction());
    dispatch(stopLoading());
    toast.success(res.message);
  } catch (error) {
    dispatch(stopLoading());
    toast.error(error.response.data.message);
  }
};

export const getCourseAction = (id) => async (dispatch) => {
  try {
    dispatch(courseLoading());
    const res = await Api.get(`/course/${id}`);
    dispatch(getCourses(res.course));
  } catch (error) {
    dispatch(courseError(error.response.data));
  }
};

export const createCourseAction = (course) => async (dispatch) => {
  try {
    dispatch(courseLoading());
    const res = await Api.post('/create-course', course);
    dispatch(stopLoading());
    toast.success(res.message);
  } catch (error) {
    dispatch(stopLoading());
    toast.error(error.response.data.message);
    dispatch(courseError(error.response.data));
  }
};

export const deleteCourseAction = (courseId) => async (dispatch) => {
  try {
    dispatch(courseLoading());
    const res = await Api.delete(`/course/${courseId}`);
    dispatch(courseDelete(courseId));
    toast.success(res.message);
  } catch (error) {
    dispatch(stopLoading());
    toast.error(error.response.data.message);
    dispatch(courseError(error.response.data));
  }
};

export const getCourseLectureAction = (id) => async (dispatch) => {
  try {
    dispatch(courseLoading());
    const res = await Api.get(`/course/${id}`);
    dispatch(courseDetails(res));
  } catch (error) {
    dispatch(courseError(error.response.data));
  }
};

export const removeLectureAction = (id, courseId) => async (dispatch) => {
  try {
    dispatch(courseLoading());
    const res = await Api.delete(`/course/${id}`);
    dispatch(getCourseLectureAction(courseId));
    toast.success(res.message);
  } catch (error) {
    dispatch(courseError(error.response.data));
    toast.error(error.response.data.message);
  }
};

export const addLectureAction = (id, lecture) => async (dispatch) => {
  try {
    dispatch(courseLoading());
    const res = await Api.post(`/course/${id}`, lecture);
    dispatch(getCourseLectureAction(id));
    toast.success(res.message);
  } catch (error) {
    dispatch(courseError(error.response.data));
    toast.error(error.response.data.message);
  }
};
