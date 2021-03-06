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
  const markDiv = {
    isFavorite: 1,
  };

  useEffect(() => {
    if (notes.length > 0) {
      updateCurrentNote(notes[0]);
    } else {
      const dummyNote: NoteType = {
        id: '-999',
        title: 'dummyNote',
        category: '未分類',
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
                notes={notes.filter((note: NoteType) => {
                  return note.mark_div === markDiv.isFavorite;
                })}
                wrapMsg="お気に入りノート"
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
