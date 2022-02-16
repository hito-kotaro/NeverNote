import { atom } from 'recoil';
import type Note from '../types/NoteType';

const notesState = atom<Note[]>({
  key: 'NOTES',
  default: [],
});

export default notesState;
