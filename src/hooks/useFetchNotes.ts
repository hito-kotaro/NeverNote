/* eslint-disable no-param-reassign */
import { useCallback } from 'react';
import axios, { AxiosResponse } from 'axios';
import { useCookies } from 'react-cookie';
import toast from 'react-hot-toast';
import axiosInstance from '../libs/axiosInstance';

const useFetchNotes = () => {
  const [cookie] = useCookies(['access_token']);

  const fetchNotes = useCallback(async () => {
    // ここでインスタンスの再設定
    axios.interceptors.request.use(
      (config) => {
        if (config.headers)
          config.headers.Authorization = `Bearer ${cookie.access_token}`;
        return config;
      },
      (error) => {
        return Promise.reject(error);
      },
    );
    try {
      const result: AxiosResponse = await axiosInstance.get('/memo');
      console.log(result);
      //   localStorage.setItem('userName', 'email');
    } catch (error) {
      console.log(error);
      toast.error('ログインできません');
    }
  }, []);
  return { fetchNotes };
};

export default useFetchNotes;
