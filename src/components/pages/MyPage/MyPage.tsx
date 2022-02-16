/* eslint-disable no-nested-ternary */
import React, { useEffect } from 'react';
import HomeLayout from '../templates/HomeLayout';
import HomeBody from '../../PageBody/HomeBody';
import NoteBody from '../../PageBody/NoteBody';
import useApiRequests from '../../../hooks/useApiRequests';
import useMypage from '../../../hooks/useMyPage';
import useNotes from '../../../hooks/useNotes';
import useCategory from '../../../hooks/useCategory';
import type NoteType from '../../../types/NoteType';

const Mypage = () => {
  const { pageId } = useMypage();
  const { fetchNotes, isLoading } = useApiRequests();
  const { notes } = useNotes();
  const { category, updateCategory } = useCategory();

  useEffect(() => {
    // バックエンドからノートを取得してグローバルステートnotesに保存
    void fetchNotes();
  }, []);

  return (
    <HomeLayout updateCategory={updateCategory}>
      {pageId === 'note' ? (
        <NoteBody notes={notes} />
      ) : pageId === 'category' ? (
        <NoteBody
          notes={notes.filter((note: NoteType) => {
            return note.category === category;
          })}
        />
      ) : (
        <HomeBody notes={notes} isLoading={isLoading} />
      )}
    </HomeLayout>
  );
};

export default Mypage;
