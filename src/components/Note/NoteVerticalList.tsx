import React, { VFC } from 'react';
import NoteListItem from './NoteListItem';
import type NoteType from '../../types/NoteType';

type Props = {
  notes: NoteType[];
};

const NoteVerticalList: VFC<Props> = (props) => {
  const { notes } = props;
  return (
    <div className="sticky text-white w-80 h-screen overflow-y-scroll is-scroll my-auto bg-gray-800">
      <div className="text-white font-bold text-lg pl-3 mb-5"> ノート</div>
      <div className="text-white font-bold text-md pl-3">
        {notes.length}個のノート
      </div>
      {notes.map((note: NoteType) => (
        <div key={note.id} className="flex justify-center">
          <NoteListItem note={note} />
        </div>
      ))}
    </div>
  );
};

export default NoteVerticalList;
