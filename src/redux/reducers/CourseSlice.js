import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  courses : [],
  isLoading : false,
  error : null,
};

const courseSlice = createSlice({
  name : 'course',
  initialState,
  reducers : {
    courseLoading : (state) => { state.isLoading = true; },
    getCourses : (state, {payload}) => {
      state.isLoading = false;
      state.courses = payload;
    },
    courseError : (state, {payload}) => {
      state.isLoading = false;
      state.error = payload;
    },
    courseCreate : (state, {payload}) => {
      state.isLoading = false;
      state.courses.push(payload);
    },
    courseUpdate : (state, {payload}) => {
      state.isLoading = false;
      const index =
          state.courses.findIndex((course) => course._id === payload._id);
      state.courses[index] = payload;
    },
    courseDelete : (state, {payload}) => {
      state.isLoading = false;
      state.courses = state.courses.filter((course) => course._id !== payload);
    },
    stopLoading : (state) => { state.isLoading = false; },
  },
});

export const {
  courseLoading,
  getCourses,
  courseError,
  courseCreate,
  courseUpdate,
  courseDelete,
  stopLoading,
} = courseSlice.actions;

export default courseSlice.reducer;
