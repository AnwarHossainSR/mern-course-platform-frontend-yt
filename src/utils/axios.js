import axios from 'axios';

const token = localStorage.getItem('token');

const api = axios.create({
  baseURL: import.meta.env.baseURL,
  headers: {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${token}`,
    post: {
      'Content-Type': 'multipart/form-data',
    },
  },
});

export default api;
