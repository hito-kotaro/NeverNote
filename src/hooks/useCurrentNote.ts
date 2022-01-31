import { useCallback } from 'react';
import { useRecoilState } from 'recoil';
import currentNotesState from '../store/currentNoteState';
import type Note from '../types/NoteType';

const useCurrentNote = () => {
  const [currentNote, setCurrentNote] = useRecoilState(currentNotesState);

  const updateCurrentNote = useCallback((newNote: Note) => {
    setCurrentNote(newNote);
  }, []);

  return { currentNote, updateCurrentNote };
};

export default useCurrentNote;
