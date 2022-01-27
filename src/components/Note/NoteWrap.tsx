import React, { VFC } from 'react';
import NoteListItem from './NoteListItem';
import type NoteType from '../../types/Note';

type Props = {
  textColor: string;
  color: string;
  wrapMsg: string;
  notes: NoteType[];
};

const NoteWrap: VFC<Props> = (props) => {
  const { textColor, color, wrapMsg, notes } = props;
  return (
    <div className="">
      <div className="text-green-500 font-bold underline">{wrapMsg}</div>
      <div id="is-scroll" className="mt-3 mx-auto flex overflow-x-auto">
        {notes.map((note: NoteType) => (
          <NoteListItem
            key={note.id}
            textColor={textColor}
            color={color}
            note={note}
          />
        ))}
      </div>
    </div>
  );
};
export default NoteWrap;
