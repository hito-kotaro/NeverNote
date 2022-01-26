import React, { VFC } from 'react';
import type NoteType from '../../types/Note';

type Props = {
  color: string;
  textColor: string;
  note: NoteType;
};

const NoteListItem: VFC<Props> = (props) => {
  const { note, color, textColor } = props;
  return (
    <div className="flex-none">
      <div
        className={`w-40 h-52 drop-shadow-md rounded-md p-2 m-2 ${color} ${textColor} `}
      >
        <div className="font-bold ">{note.title}</div>
        <div className="overflow-hidden h-36">{note.description}</div>
        <div className=" text-gray-900">{note.date}</div>
      </div>
    </div>
  );
};

export default NoteListItem;
