/* eslint-disable no-param-reassign */
import { useCallback } from 'react';
import { AxiosResponse } from 'axios';
import { useCookies } from 'react-cookie';
import axiosInstance from '../libs/axiosInstance';

const useFetchNotes = () => {
  const [cookie] = useCookies(['access_token']);
  const fetchNotes = useCallback(async () => {
    try {
      const result: AxiosResponse = await axiosInstance.get('/memos', {
        headers: { Authorization: `Bearer ${cookie.access_token}` },
      });
      console.log(result);
    } catch (error) {
      console.log(error);
    }
  }, []);
  return { fetchNotes };
};

export default useFetchNotes;
