import React, { VFC } from 'react';
import { Helmet } from 'react-helmet-async';
import useResponsive from '../../hooks/useResponsive';
import useCurrentNote from '../../hooks/useCurrentNote';
import useNotes from '../../hooks/useNotes';
import NoteVerticalList from '../Note/NoteVerticalList';
import NoteTextArea from '../Note/NoteTextArea';

const NoteListBody: VFC = () => {
  const { currentNote, updateCurrentNote } = useCurrentNote();
  const { query } = useResponsive();
  const { notes } = useNotes();
  return (
    <>
      <Helmet>
        <title>ノート -NeverNote</title>
      </Helmet>
      {query.isLaptop ? (
        <div className="flex w-full">
          <NoteVerticalList notes={notes} />
          <NoteTextArea
            notes={notes}
            currentNote={currentNote}
            updateCurrentNote={updateCurrentNote}
          />
        </div>
      ) : (
        // ここにスマホ用の記述
        ''
      )}
    </>
  );
};

export default NoteListBody;
