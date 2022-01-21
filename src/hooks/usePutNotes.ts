/* eslint-disable no-param-reassign */
import { useCallback } from 'react';
import { AxiosResponse } from 'axios';
import { useCookies } from 'react-cookie';
import axiosInstance from '../libs/axiosInstance';

const usePutNotes = () => {
  const [cookie] = useCookies(['access_token']);

  const postNotes = useCallback(async () => {
    const data = {
      title: '今日の講義について',
      category: '授業メモ',
      description: '第９回の授業メモです\\nこんなことしました。',
      date: '2021/08/01',
      mark_div: 1,
    };

    try {
      const result: AxiosResponse = await axiosInstance.post('/memo', data, {
        headers: { Authorization: `Bearer ${cookie.access_token}` },
      });
      console.log(result);
    } catch (error) {
      console.log(error);
    }
  }, []);
  return { postNotes };
};

export default usePutNotes;
