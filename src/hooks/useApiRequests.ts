import { useCallback, useState } from 'react';
import dayjs from 'dayjs';
import toast from 'react-hot-toast';
import { AxiosResponse } from 'axios';
import { createAxiosTokenInstance } from '../libs/axiosInstance';
import useCurreNote from './useCurrentNote';
import useAuth from './useAuth';
import useNotes from './useNotes';
import useMypage from './useMyPage';
import type NoteType from '../types/NoteType';

// 新規登録用のtype
type newNoteType = Omit<NoteType, 'id'>;

const useApiRequests = () => {
  const { setPageId } = useMypage();
  const { updateCurrentNote } = useCurreNote();
  const { logout } = useAuth();
  const [isLoading, setIsLoading] = useState(false);
  const { updateNotes } = useNotes();

  const axiosTokenInstance = createAxiosTokenInstance();
  const closeSettion = useCallback(() => {
    logout('再ログインしてください');
  }, []);

  // バックエンドからノートを取得してグローバルステートに格納
  const fetchNotes = useCallback(async () => {
    try {
      setIsLoading(true);
      const result: AxiosResponse = await axiosTokenInstance.get('/memos');
      updateNotes(result.data);
      setIsLoading(false);
    } catch (error) {
      closeSettion();
    }
  }, []);

  // 新規ノートを作成してノート画面を表示
  const createNote = useCallback(async () => {
    const today = dayjs().format('YYYY/MM/DD');
    const newNote: newNoteType = {
      title: 'Untitled',
      category: undefined,
      description: '',
      date: today,
      mark_div: 0,
    };
    try {
      setIsLoading(true);
      const result = await axiosTokenInstance.post('/memo', newNote);
      fetchNotes();
      updateCurrentNote(result.data);
      setPageId('note');
      setIsLoading(false);
      toast.success('新しいノートを追加しました');
    } catch (error) {
      closeSettion();
    }
  }, []);

  const deleteNote = useCallback(async (noteData: NoteType) => {
    try {
      setIsLoading(true);
      await axiosTokenInstance.delete(`/memo/${noteData.id}`);
      fetchNotes();
      setIsLoading(false);
      toast.success(`「${noteData.title}」を削除しました`);
    } catch (error) {
      closeSettion();
    }
  }, []);

  const saveNote = useCallback(
    async (id: string, title: string, description: string) => {
      const newData: NoteType = {
        id,
        title,
        category: undefined,
        description,
        date: undefined,
        mark_div: undefined,
      };
      try {
        setIsLoading(true);
        await axiosTokenInstance.put(`/memo/${id}`, newData);
        fetchNotes();
        updateCurrentNote(newData);
        setIsLoading(false);
        toast.success(`「${newData.title}」を更新しました`);
      } catch (error) {
        closeSettion();
      }
    },
    [],
  );

  return {
    isLoading,
    createNote,
    deleteNote,
    saveNote,
    fetchNotes,
  };
};

export default useApiRequests;
