import axios from 'axios';

export const axiosInstance = axios.create({
  baseURL: 'https://raisetech-memo-api.herokuapp.com/api',
  headers: {
    'Content-Type': 'application/json',
  },
});

export const createAxiosTokenInstance = () => {
  const axiosTokenInstance = axios.create({
    baseURL: 'https://raisetech-memo-api.herokuapp.com/api',
    headers: {
      Authorization: `Bearer ${localStorage.getItem('token')}`,
      'Content-Type': 'application/json',
    },
  });

  return axiosTokenInstance;
};

// export default axiosInstance;
