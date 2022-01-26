import { atom } from 'recoil';
import type Note from '../types/Note';

export const notesState = atom<Note[]>({
  key: 'NOTES',
  default: [],
});

export default notesState;
