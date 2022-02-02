import { useRecoilState } from 'recoil';
import currentNotesState from '../store/currentNoteState';
import notesState from '../store/notesState';
import type Note from '../types/NoteType';

const useNotes = () => {
  const [notes, setNotes] = useRecoilState(notesState);
  const [currentNote, setCurrentNote] = useRecoilState(currentNotesState);

  const updateNotes = (newNotes: Note[]) => {
    setNotes(newNotes);
  };

  const getCurrentNote = () => {
    return currentNote;
  };

  const updateCurrentNote = (note: Note) => {
    setCurrentNote(note);
  };

  return { notes, updateNotes, getCurrentNote, updateCurrentNote };
};

export default useNotes;
