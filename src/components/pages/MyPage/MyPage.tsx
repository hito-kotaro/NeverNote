import React, { useEffect } from 'react';
import { useRecoilState } from 'recoil';
import pageIdState from '../../../store/pageIdState';
import HomeLayout from '../templates/HomeLayout';
import HomeBody from '../../PageBody/HomeBody';
import NoteBody from '../../PageBody/NoteBody';
import useApiRequests from '../../../hooks/useApiRequests';

const Mypage = () => {
  const [pageId] = useRecoilState(pageIdState);
  const { fetchNotes, isLoading } = useApiRequests();

  useEffect(() => {
    // バックエンドからノートを取得してグローバルステートnotesに保存
    fetchNotes();
  }, []);

  const getPage = () => {
    // ページIDをローカルストレージから取得して、IDに対応したコンポーネントを返す
    if (pageId === 'note') return <NoteBody />;
    return <HomeBody isLoading={isLoading} />;
  };

  return <HomeLayout>{getPage()}</HomeLayout>;
};

export default Mypage;
