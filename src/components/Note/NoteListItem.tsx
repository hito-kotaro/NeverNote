import React, { VFC } from 'react';
import type NoteType from '../../types/NoteType';
import Button from '../Button/Button';
import useMyPage from '../../hooks/useMyPage';

type Props = {
  note: NoteType;
};

const NoteListItem: VFC<Props> = (props) => {
  const { note } = props;
  const { pageId, clickNote } = useMyPage();

  return (
    <div className="flex-none mx-auto">
      <Button
        className=""
        buttonAction={() =>
          clickNote(note, pageId !== 'home' ? pageId : 'note')
        }
      >
        <div className="w-40 h-52 hover:bg-gray-600 hover:drop-shadow-lg drop-shadow-none rounded-md p-2 m-2 bg-gray-700 text-white">
          <p className=" text-left font-bold h-5  overflow-hidden">
            {note.title}
          </p>
          <div className=" text-left text-sm overflow-hidden h-36">
            {note.description}
          </div>
          <div className=" text-gray-900 text-right">{note.date}</div>
        </div>
      </Button>
    </div>
  );
};

export default NoteListItem;
