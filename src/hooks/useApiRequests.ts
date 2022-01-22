import { useCallback } from 'react';
import { AxiosResponse } from 'axios';
import { useCookies } from 'react-cookie';
import axiosInstance from '../libs/axiosInstance';
import type Note from '../types/Note';

const useApiRequests = () => {
  const [cookie] = useCookies(['access_token']);

  const getStatus = useCallback(async () => {
    const result: AxiosResponse = await axiosInstance.get('/memos', {
      headers: { Authorization: `Bearer ${cookie.access_token}` },
    });
    return result;
  }, []);

  const getNotes = useCallback(async () => {
    try {
      const result: AxiosResponse = await axiosInstance.get('/memos', {
        headers: { Authorization: `Bearer ${cookie.access_token}` },
      });
      console.log(result);
    } catch (error) {
      console.log(error);
    }
  }, []);

  const postNote = useCallback(async (noteData: Note) => {
    const testData = {
      title: '今日の講義について',
      category: '授業メモ',
      description: '第９回の授業メモです\\nこんなことしました。',
      date: '2021/08/01',
      mark_div: 1,
    };

    // インスタンスに定義したヘッダーに別のも追加したい時↓を参考にしたがうまくいかなかった
    // https://sapper-blog-app.vercel.app/blog/axios#axioscreate
    try {
      const result: AxiosResponse = await axiosInstance.post(
        '/memo',
        testData,
        {
          headers: { Authorization: `Bearer ${cookie.access_token}` },
        },
      );
      console.log(result.data);
    } catch (error) {
      console.log(error);
    }
  }, []);

  return { getNotes, postNote, getStatus };
};
export default useApiRequests;
