import React, { VFC } from 'react';
import Button from '../../Button/Button';
import useMyPage from '../../../hooks/useMyPage';
import type NoteType from '../../../types/NoteType';

type Props = {
  notes: NoteType[];
  toggleOpen: () => void;
};

const FavoritesWindow: VFC<Props> = (props) => {
  const { notes, toggleOpen } = props;
  const { clickNote } = useMyPage();

  const clickFavoritResult = (note: NoteType) => {
    clickNote(note, 'note');
    toggleOpen();
  };

  return (
    <div
      className="absolute rounded-md p-2  top-0 left-14  bg-gray-800 w-96 h-2/3 overflow-y-scroll drop-shadow-md"
      id="is-scroll"
    >
      <div className="font-bold text-white">お気に入り</div>
      {notes.map((note: NoteType) => {
        return (
          <Button
            className="flex mt-5 w-full bg-gray-700 rounded-md hover:bg-gray-500 p-2"
            buttonAction={() => clickFavoritResult(note)}
            key={note.id}
          >
            <>
              <div className="text-white font-bold overflow-x-hidden">
                {note.title}
              </div>
              <div className="text-white ml-auto">{note.date}</div>
            </>
          </Button>
        );
      })}
    </div>
  );
};

export default FavoritesWindow;
