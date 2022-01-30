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

export const createPutNoteInstance = (id: string) => {
  const putNoteInstance = axios.create({
    baseURL: `https://raisetech-memo-api.herokuapp.com/api/memo/${id}`,
    headers: {
      Authorization: `Bearer ${localStorage.getItem('token')}`,
      'Content-Type': 'application/json',
    },
  });
  return putNoteInstance;
};

export const createDeleteNoteInstance = () => {
  const deleteNoteInstance = axios.create({
    baseURL: `https://raisetech-memo-api.herokuapp.com/api/memo/`,
    headers: {
      Authorization: `Bearer ${localStorage.getItem('token')}`,
    },
  });
  return deleteNoteInstance;
};
