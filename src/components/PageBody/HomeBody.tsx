import React, { useEffect } from 'react';
import useResponsive from '../../hooks/useResponsive';
import NoteWrap from '../Note/NoteWrap';
import useNotes from '../../hooks/useNotes';
import useApiRequests from '../../hooks/useApiRequests';

const HomeBody = () => {
  const { getNotes, isLoading } = useApiRequests();
  const { query } = useResponsive();
  const { notes } = useNotes();
  const userName = localStorage.getItem('userName');
  const middleColoe = 'bg-gray-800';
  const textColor = 'text-white';
  const lightColoe = 'bg-gray-700';

  useEffect(() => {
    getNotes();
  }, []);

  return (
    <div id="home-main" className="h-full w-5/6 mx-auto">
      {query.isLaptop ? (
        <div className="">
          <div className="flex justify-end mt-2">
            <p className={`font-bold ${textColor}`}>
              {userName}さん。お疲れ様です。
            </p>
          </div>
          <div className="">
            <div className={`  mx-5 mt-10  p-2 rounded-md ${middleColoe}`}>
              <NoteWrap
                isLoading={isLoading}
                notes={notes}
                wrapMsg="最近使用したノート"
                textColor={textColor}
                color={lightColoe}
              />
            </div>
            <div className={` mx-5 mt-10  p-2 rounded-md ${middleColoe}`}>
              <NoteWrap
                isLoading={isLoading}
                notes={notes}
                wrapMsg="最近削除したノート"
                textColor={textColor}
                color={lightColoe}
              />
            </div>
          </div>
        </div>
      ) : (
        //   ここにスマホ用画面を作る
        ''
      )}
    </div>
  );
};

export default HomeBody;
