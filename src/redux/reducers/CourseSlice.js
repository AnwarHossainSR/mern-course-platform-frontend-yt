import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  courses: [],
  loading: false,
  error: null,
};

const courseSlice = createSlice({
  name: 'course',
  initialState,
  reducers: {
    courseLoading: (state) => {
      state.loading = true;
    },
    getCourses: (state, { payload }) => {
      state.loading = false;
      state.courses = payload;
    },
    courseError: (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    },
    courseCreate: (state, { payload }) => {
      state.loading = false;
      state.courses.push(payload);
    },
    courseUpdate: (state, { payload }) => {
      state.loading = false;
      const index = state.courses.findIndex(
        (course) => course._id === payload._id
      );
      state.courses[index] = payload;
    },
    courseDelete: (state, { payload }) => {
      state.loading = false;
      state.courses = state.courses.filter((course) => course._id !== payload);
    },
  },
});

export const {
  courseLoading,
  getCourses,
  courseError,
  courseCreate,
  courseUpdate,
  courseDelete,
} = courseSlice.actions;

export default courseSlice.reducer;
