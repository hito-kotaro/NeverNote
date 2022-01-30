import React, { VFC } from 'react';
import useResponsive from '../../hooks/useResponsive';
import NoteWrap from '../Note/NoteWrap';
import useNotes from '../../hooks/useNotes';

type Props = {
  isLoading: boolean;
};

const HomeBody: VFC<Props> = (props) => {
  const { isLoading } = props;
  const { query } = useResponsive();
  const { notes } = useNotes();
  const userName = localStorage.getItem('userName');

  return (
    <div id="home-main" className="h-full w-5/6 mx-auto">
      {query.isLaptop ? (
        <div className="">
          <div className="flex justify-end mt-2">
            <p className="font-bold text-white">
              {userName}さん。お疲れ様です。
            </p>
          </div>
          <div className="">
            <div className="mx-5 mt-10  p-2 rounded-md bg-gray-800">
              <NoteWrap
                isLoading={isLoading}
                notes={notes}
                wrapMsg="最近使用したノート"
              />
            </div>
            <div className="mx-5 mt-10  p-2 rounded-md bg-gray-800">
              <NoteWrap
                isLoading={isLoading}
                notes={notes}
                wrapMsg="最近削除したノート"
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
