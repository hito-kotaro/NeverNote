/* eslint-disable consistent-return */
import { useCallback, useState } from 'react';
import { useRecoilState } from 'recoil';
import toast from 'react-hot-toast';
import { AxiosResponse } from 'axios';
import {
  createAxiosTokenInstance,
  createPutNoteInstance,
  createDeleteNoteInstance,
} from '../libs/axiosInstance';
import currentNoteState from '../store/currentNoteState';

import useAuth from './useAuth';
import useNotes from './useNotes';

import type Note from '../types/NoteType';

const useApiRequests = () => {
  const [currentNote, setCurrentState] = useRecoilState(currentNoteState);
  const { logout } = useAuth();
  const [isLoading, setIsLoading] = useState(false);
  const { updateNotes, notes } = useNotes();

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

  const fetchNotes = useCallback(async () => {
    // バックエンドからノートを取得してグローバルステートに格納
    try {
      setIsLoading(true);
      const result: AxiosResponse = await axiosTokenInstance.get('/memos');
      console.log(result.data);
      // 取得が認証エラー(401)で失敗したらログアウト
      if (result.status === 401) closeSettion();
      updateNotes(result.data);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
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
  }, [currentNote]);

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

  const putNote = useCallback(async (noteData: Note) => {
    if (noteData) {
      const instance = createPutNoteInstance(noteData.id);

      try {
        setIsLoading(true);
        console.log(noteData);
        const result = await instance.put('', noteData);

        fetchNotes();
        console.log(result);
        setCurrentState(noteData);
        setIsLoading(false);
        toast.success(`「${noteData.title}」を更新しました`);
      } catch (error) {
        closeSettion();
        console.log(error);
      }
    }
  }, []);

  const deleteNote = useCallback(async (noteData: Note) => {
    // console.log(noteData);
    if (noteData) {
      console.log(`InstanceID:${noteData.id}`);
      const deleteInstance = createDeleteNoteInstance();

      try {
        setIsLoading(true);
        const deleteResult = await deleteInstance.delete(noteData.id);
        getNotes();
        setCurrentState(notes[0]);
        console.log(deleteResult);
        setIsLoading(false);
        toast.success(`「${noteData.title}」を削除しました`);
      } catch (error) {
        // closeSettion();
        console.log(error);
      }
    }
  }, []);

  return {
    getNotes,
    postNote,
    getStatus,
    isLoading,
    putNote,
    deleteNote,
    fetchNotes,
  };
};

export default useApiRequests;
