import React, { VFC } from 'react';
import { useRecoilState } from 'recoil';
import currentNoteState from '../../store/currentNoteState';
import useResponsive from '../../hooks/useResponsive';
import NoteListVerticle from '../Note/NoteListVerticle';
import useNotes from '../../hooks/useNotes';

import NoteTextArea from '../Note/NoteTextArea';

const NoteListBody: VFC = () => {
  const { query } = useResponsive();
  const [currentNote, setCurrentState] = useRecoilState(currentNoteState);
  const { notes } = useNotes();
  return (
    <>
      {query.isLaptop ? (
        // <>
        <div className="flex w-full">
          <NoteListVerticle />
          <NoteTextArea
            notes={notes}
            currentNote={currentNote}
            setCurrentState={setCurrentState}
          />
        </div>
      ) : (
        // </>
        // ここにスマホ用の記述
        ''
      )}
    </>
  );
};

export default NoteListBody;
