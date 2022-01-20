import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://raisetech-memo-api.herokuapp.com/api',
  headers: { 'Content-Type': 'application/json' },
});

axios.defaults.headers.get['Authorization:'] = 'Bearer';
axios.defaults.headers.post['content-Type'] = 'application/json';

export default axiosInstance;
