import React, { useEffect, VFC, useState } from 'react';
import { useRecoilState } from 'recoil';
import currentNotesState from '../../store/currentNoteState';
import useNotes from '../../hooks/useNotes';
import type NoteType from '../../types/Note';
import Button from '../Button/Button';
import pageIdState from '../../store/pageIdState';

type Props = {
  color: string;
  textColor: string;
  note: NoteType;
};

const NoteListItem: VFC<Props> = (props) => {
  const { note, color, textColor } = props;
  const [pageId, setPageId] = useRecoilState(pageIdState);
  // const [cn, setCN] = useState<NoteType>();
  // const { getCurrentNote, updateCurrentNote } = useNotes();
  const [currentNote, setCurrentNote] = useRecoilState(currentNotesState);

  const clickNote = () => {
    setCurrentNote(note);
    setPageId('note');
  };

  return (
    <div className="flex-none mx-auto">
      <Button className="" buttonAction={clickNote}>
        <div
          className={`w-40 h-52 hover:bg-gray-600 hover:drop-shadow-lg drop-shadow-none rounded-md p-2 m-2 ${color} ${textColor} `}
        >
          <div className="font-bold overflow-hidden">{note.title}</div>
          <div className="overflow-hidden h-36">{note.description}</div>
          <div className=" text-gray-900 text-right">{note.date}</div>
        </div>
      </Button>
    </div>
  );
};

export default NoteListItem;
