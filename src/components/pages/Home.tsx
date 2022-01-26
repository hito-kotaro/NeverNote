import React, { VFC, useEffect, useState } from 'react';
import useApiRequests from '../../hooks/useApiRequests';
// import type Note from '../../types/Note';
import useResponsive from '../../hooks/useResponsive';
import Sidebar from '../Sidebar/Sidebar';
import Note from '../Note/NoteListItem';
import NoteWrap from '../Note/NoteWrap';
import Button from '../Button/Button';
import useNotes from '../../hooks/useNotes';

const Home = () => {
  const { query } = useResponsive();
  const { getNotes, getStatus, postNote } = useApiRequests();
  const { notes } = useNotes();
  const userName = localStorage.getItem('userName');
  const middleColoe = 'bg-gray-800';
  const textColor = 'text-white';
  const lightColoe = 'bg-gray-700';

  useEffect(() => {
    getNotes();
  }, []);

  return (
    <div className="flex h-full  ">
      <Sidebar />
      <div id="home-main" className="h-full w-5/6 mx-auto">
        {query.isLaptop ? (
          <div className="">
            <div className="flex justify-end mt-2">
              <p className={`font-bold ${textColor}`}>
                {userName}さん。お疲れ様です。
              </p>
            </div>
            <div className="">
              <div className={`mx-5 mt-10 w-ful p-2 rounded-md ${middleColoe}`}>
                <NoteWrap
                  notes={notes}
                  wrapMsg="最近使用したノート"
                  textColor={textColor}
                  color={lightColoe}
                />
              </div>
              <div className={`mx-5 mt-10 w-ful p-2 rounded-md ${middleColoe}`}>
                <NoteWrap
                  notes={notes}
                  wrapMsg="最近削除したノート"
                  textColor={textColor}
                  color={lightColoe}
                />
              </div>
            </div>
          </div>
        ) : (
          // </div>
          ''
        )}
      </div>
    </div>
  );
};

export default Home;
