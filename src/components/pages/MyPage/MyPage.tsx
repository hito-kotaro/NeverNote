import React, { useEffect } from 'react';
import HomeLayout from '../templates/HomeLayout';
import HomeBody from '../../PageBody/HomeBody';
import NoteBody from '../../PageBody/NoteBody';
import useApiRequests from '../../../hooks/useApiRequests';
import useMypage from '../../../hooks/useMyPage';

const Mypage = () => {
  const { pageId } = useMypage();
  const { fetchNotes, isLoading } = useApiRequests();

  useEffect(() => {
    // バックエンドからノートを取得してグローバルステートnotesに保存
    void fetchNotes();
  }, []);

  // const getPage = () => {
  //   // ページIDをローカルストレージから取得して、IDに対応したコンポーネントを返す
  //   if (pageId === 'note') return <NoteBody />;
  //   return <HomeBody isLoading={isLoading} />;
  // };

  return (
    <HomeLayout>
      {pageId === 'note' ? <NoteBody /> : <HomeBody isLoading={isLoading} />}
    </HomeLayout>
  );
};

export default Mypage;
