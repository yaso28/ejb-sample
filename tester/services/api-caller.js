import axios from 'axios';

const get = async (url, baseURL) => {
  const response = await axios.get(url, {
    baseURL
  });
  return response?.data;
};

export const getUi1Info = () => get('/info', process.env.UI1_BASE_URL);
