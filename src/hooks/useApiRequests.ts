/* eslint-disable consistent-return */
import { useCallback, useState } from 'react';
import { AxiosResponse } from 'axios';
import { createAxiosTokenInstance } from '../libs/axiosInstance';
import useAuth from './useAuth';
import useNotes from './useNotes';
import type Note from '../types/Note';

const useApiRequests = () => {
  const { logout } = useAuth();
  const [isLoading, setIsLoading] = useState(false);
  const { updateNotes } = useNotes();

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
      setIsLoading(true);
      const result: AxiosResponse = await axiosTokenInstance.get('/memos');
      updateNotes(result.data);
      // console.log(result.data);
      setIsLoading(false);
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

  return { getNotes, postNote, getStatus, isLoading };
};
export default useApiRequests;
