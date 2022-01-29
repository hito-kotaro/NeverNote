import { atom } from 'recoil';
import type Note from '../types/Note';

const defaultNote: Note = {
  title: 'テストノート',
  category: '',
  description: 'テスト',
  date: '',
  mark_div: 0,
};

export const currentNoteState = atom<Note>({
  key: 'NOTE_STATE',
  default: defaultNote,
});

export default currentNoteState;
