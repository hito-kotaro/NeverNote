/* eslint-disable consistent-return */
import React from 'react';
import { useRecoilState } from 'recoil';
import pageIdState from '../../../store/pageIdState';
import HomeLayout from '../templates/HomeLayout';
import HomeBody from '../../PageBody/HomeBody';
import NoteBody from '../../PageBody/NoteBody';

const Mypage = () => {
  const [pageId, setPageId] = useRecoilState(pageIdState);
  console.log(pageId);

  const getPage = () => {
    if (pageId === 'note') return <NoteBody />;
    return <HomeBody />;
  };

  return <HomeLayout>{getPage()}</HomeLayout>;
};

export default Mypage;
