/* eslint-disable consistent-return */
import { useCallback } from 'react';
import { AxiosResponse } from 'axios';
import { createAxiosTokenInstance } from '../libs/axiosInstance';
import useAuth from './useAuth';
import type Note from '../types/Note';

const useApiRequests = () => {
  const { logout } = useAuth();

  const axiosTokenInstance = createAxiosTokenInstance();
  const closeSettion = useCallback(() => {
    logout('再ログインしてください');
  }, []);

  const getStatus = useCallback(async () => {
    try {
      await axiosTokenInstance.get('/memos');
    } catch (error) {
      closeSettion();
    }
  }, []);

  const getNotes = useCallback(async () => {
    try {
      const result: AxiosResponse = await axiosTokenInstance.get('/memos');
      // console.log(result.data);
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
      mark_div: 0,
    };

    try {
      await axiosTokenInstance.post('/memo', testData);
      getNotes();
    } catch (error) {
      closeSettion();
    }
  }, []);

  return { getNotes, postNote, getStatus };
};
export default useApiRequests;
