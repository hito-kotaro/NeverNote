/* eslint-disable consistent-return */
import { useCallback } from 'react';
import { AxiosResponse } from 'axios';
import { useCookies } from 'react-cookie';
import axiosInstance from '../libs/axiosInstance';
import useAuth from './useAuth';
import type Note from '../types/Note';

const useApiRequests = () => {
  const [cookie] = useCookies(['access_token']);
  const { logout } = useAuth();
  // const { checkAuthCookie2 } = useAuth();

  const closeSettion = useCallback(() => {
    logout('再ログインしてください');
  }, []);

  const getStatus = useCallback(async () => {
    try {
      await axiosInstance.get('/memos', {
        headers: { Authorization: `Bearer ${cookie.access_token}` },
      });
    } catch (error) {
      closeSettion();
    }
  }, []);

  const getNotes = useCallback(async () => {
    try {
      const result: AxiosResponse = await axiosInstance.get('/memos', {
        headers: { Authorization: `Bearer ${cookie.access_token}` },
      });
      console.log(result.data);
      return result;
    } catch (error) {
      closeSettion();
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
      await axiosInstance.post('/memo', testData, {
        headers: { Authorization: `Bearer ${cookie.access_token}` },
      });
      // console.log(result.data);
    } catch (error) {
      closeSettion();
    }
  }, []);

  return { getNotes, postNote, getStatus };
};
export default useApiRequests;
