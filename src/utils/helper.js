import {useLocation} from 'react-router-dom';
export const useQuery =
    () => { return new URLSearchParams(useLocation().search);};

export const getQueryUrl = (params) => {
  return Object.keys(params).map((key) => `${key}=${params[key]}`).join('&');
};

export const getCourseFromId = (courses, id) => {
  const course = courses.find((course) => course._id === id);
  console.log('course', course);
};
