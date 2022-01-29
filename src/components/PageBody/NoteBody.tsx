/* eslint-disable no-unused-expressions */
import React, { useEffect, VFC } from 'react';
import { useRecoilState } from 'recoil';
import pageIdState from '../../store/currentNoteState';
import useResponsive from '../../hooks/useResponsive';
import useNotes from '../../hooks/useNotes';
import useApiRequests from '../../hooks/useApiRequests';
import NoteListItem from '../Note/NoteListItem';
import NoteType from '../../types/Note';
import NoteListVerticle from '../Note/NoteListVerticle';
import NoteTextArea from '../Note/NoteTextArea';
import Button from '../Button/Button';

const NoteListBody: VFC = () => {
  const [currentNote, setCurrentState] = useRecoilState(pageIdState);
  const { isLoading } = useApiRequests();
  const { query } = useResponsive();
  const { notes } = useNotes();
  const textColor = 'text-white';
  const lightColoe = 'bg-gray-700';

  console.log(currentNote);

  //   const currentNote = notes.find(
  //     (note: NoteType) => note.id === localStorage.getItem('currentNoteId'),
  //   );
  //   useEffect(() => {
  //     const tmp =
  //       // eslint-disable-next-line array-callback-return
  //       notes.find((note: NoteType) => {
  //         note.id === localStorage.getItem('currentNoteId');
  //       });

  //     updateCurrentNote(tmp);
  //   }, []);

  return (
    <>
      {query.isLaptop ? (
        <>
          <div className="flex ">
            <NoteListVerticle
              isLoading={isLoading}
              notes={notes}
              textColor={textColor}
              color={lightColoe}
            />
            <NoteTextArea />
          </div>
        </>
      ) : (
        // ここにスマホ用の記述
        ''
      )}
    </>
  );
};

export default NoteListBody;
