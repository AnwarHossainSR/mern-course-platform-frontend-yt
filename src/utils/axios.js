import axios from 'axios';

const token = localStorage.getItem('token');

axios.defaults.baseURL = 'http://localhost:4000/api/v1';
axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
axios.defaults.headers.common['Content-Type'] = 'application/json';

export default axios;
