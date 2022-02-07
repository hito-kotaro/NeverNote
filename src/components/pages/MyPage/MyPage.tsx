/* eslint-disable no-nested-ternary */
import React, { useEffect } from 'react';
import HomeLayout from '../templates/HomeLayout';
import HomeBody from '../../PageBody/HomeBody';
import NoteBody from '../../PageBody/NoteBody';
import useApiRequests from '../../../hooks/useApiRequests';
import useMypage from '../../../hooks/useMyPage';
import useNotes from '../../../hooks/useNotes';
import useTag from '../../../hooks/useTag';
import type NoteType from '../../../types/NoteType';

const Mypage = () => {
  const { pageId } = useMypage();
  const { fetchNotes, isLoading } = useApiRequests();
  const { notes } = useNotes();
  const { tag, updateTag } = useTag();
  useEffect(() => {
    // バックエンドからノートを取得してグローバルステートnotesに保存
    void fetchNotes();
  }, []);

  return (
    <HomeLayout tag={tag} updateTag={updateTag}>
      {pageId === 'note' ? (
        <NoteBody notes={notes} />
      ) : pageId === 'tags' ? (
        <NoteBody
          notes={notes.filter((note: NoteType) => {
            return note.category === tag;
          })}
        />
      ) : (
        <HomeBody notes={notes} isLoading={isLoading} />
      )}
    </HomeLayout>
  );
};

export default Mypage;
