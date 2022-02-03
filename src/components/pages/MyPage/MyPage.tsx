import React, { useEffect } from 'react';
import HomeLayout from '../templates/HomeLayout';
import HomeBody from '../../PageBody/HomeBody';
import NoteBody from '../../PageBody/NoteBody';
import useApiRequests from '../../../hooks/useApiRequests';
import useMypage from '../../../hooks/useMyPage';
import useNotes from '../../../hooks/useNotes';

const Mypage = () => {
  const { pageId } = useMypage();
  const { fetchNotes, isLoading } = useApiRequests();
  const { notes } = useNotes();
  useEffect(() => {
    // バックエンドからノートを取得してグローバルステートnotesに保存
    void fetchNotes();
  }, []);

  return (
    <HomeLayout>
      {pageId === 'note' ? (
        <NoteBody />
      ) : (
        <HomeBody notes={notes} isLoading={isLoading} />
      )}
    </HomeLayout>
  );
};

export default Mypage;
