import axios from 'axios';

const token = localStorage.getItem('token');

axios.defaults.baseURL = import.meta.env.baseURL;
axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
axios.defaults.headers.common['Content-Type'] = 'application/json';

export default axios;
