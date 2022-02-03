import React, { useEffect, VFC } from 'react';
import { Helmet } from 'react-helmet-async';
import useResponsive from '../../hooks/useResponsive';
import NoteHoriozonList from '../Note/NoteHoriozonList';
import useNotes from '../../hooks/useNotes';
import type NoteType from '../../types/NoteType';

type Props = {
  notes: NoteType[];
  isLoading: boolean;
};

const HomeBody: VFC<Props> = (props) => {
  const { isLoading, notes } = props;
  const { query } = useResponsive();
  const { updateCurrentNote } = useNotes();
  const userName = localStorage.getItem('userName');

  useEffect(() => {
    if (notes.length > 0) {
      updateCurrentNote(notes[0]);
    } else {
      const dummyNote: NoteType = {
        id: '-999',
        title: 'dummyNote',
        category: undefined,
        description: '',
        date: '',
        mark_div: 0,
      };
      updateCurrentNote(dummyNote);
    }
  }, [notes]);

  return (
    <div id="home-main" className="h-full w-5/6 mx-auto">
      <Helmet>
        <title>ホーム -NeverNote</title>
      </Helmet>
      {query.isLaptop ? (
        <div className="">
          <div className="flex justify-end mt-2">
            <p className="font-bold text-white">
              {userName}さん。お疲れ様です。
            </p>
          </div>
          <div className="">
            <div className="mx-5 mt-10  p-2 rounded-md bg-gray-800">
              <NoteHoriozonList
                isLoading={isLoading}
                notes={notes}
                wrapMsg="最近使用したノート"
              />
            </div>
            <div className="mx-5 mt-10  p-2 rounded-md bg-gray-800">
              <NoteHoriozonList
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
