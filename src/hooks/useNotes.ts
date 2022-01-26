import { useRecoilState } from 'recoil';
import notesState from '../store/notesState';
import type Note from '../types/Note';

const useNotes = () => {
  const [notes, setNotes] = useRecoilState(notesState);

  const updateNotes = (newNotes: Note[]) => {
    setNotes(newNotes);
  };

  return { notes, updateNotes };
};

export default useNotes;
