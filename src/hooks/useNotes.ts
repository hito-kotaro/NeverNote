import { useCallback } from 'react';
import { useRecoilState } from 'recoil';
import currentNotesState from '../store/currentNoteState';
import notesState from '../store/notesState';
import type Note from '../types/NoteType';

const useNotes = () => {
  const [notes, setNotes] = useRecoilState(notesState);
  const [currentNote, setCurrentNote] = useRecoilState(currentNotesState);

  const updateNotes = useCallback(
    (newNotes: Note[]) => {
      setNotes(newNotes);
    },
    [notes],
  );

  const getCurrentNote = () => {
    return currentNote;
  };

  const updateCurrentNote = useCallback(
    (note: Note) => {
      setCurrentNote(note);
    },
    [currentNote],
  );

  return { notes, updateNotes, getCurrentNote, updateCurrentNote };
};

export default useNotes;
