import axios from './axios';

export default {
  async get(url) {
    const { data } = await axios.get(url);
    return data;
  },

  async post(url, content) {
    const { data } = await axios.post(url, content);
    return data;
  },

  async put(url, content) {
    const { data } = await axios.put(url, content);
    return data;
  },

  async delete(url) {
    const { data } = await axios.delete(url);
    return data;
  },
};
