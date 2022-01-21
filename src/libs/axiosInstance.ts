import axios, { AxiosRequestConfig } from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://raisetech-memo-api.herokuapp.com/api',
  headers: {
    'Content-Type': 'application/json',
    // Authorization:
    //   'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTYsImlhdCI6MTY0MjcyMzk4MSwiZXhwIjoxNjQyODEwMzgxfQ.M22ECX3F4qfzXRNG4fFifJ_rx0t-ZHnAsx9QZS7UmU4',
  },
});

// axios.defaults.headers.get['Authorization:'] = 'Bearer';
// axios.defaults.headers.common['Content-Type'] = 'application/json';

export default axiosInstance;
