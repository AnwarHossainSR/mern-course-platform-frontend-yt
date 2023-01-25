import Api from 'utils/api';

export default {
  async get(url) {
    const { data } = await Api.get(url);
    return data;
  },

  async post(url, content) {
    const { data } = await Api.post(url, content);
    return data;
  },

  async put(url, content) {
    const { data } = await Api.put(url, content);
    return data;
  },

  async delete(url) {
    const { data } = await Api.delete(url);
    return data;
  },
};
