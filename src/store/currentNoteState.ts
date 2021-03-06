import { atom } from 'recoil';
import type Note from '../types/NoteType';

const defaultNote: Note = {
  id: '0',
  title: 'テストノート',
  category: '',
  description: 'テスト',
  date: '',
  mark_div: 0,
};

const currentNoteState = atom<Note>({
  key: 'NOTE_STATE',
  default: defaultNote,
});

export default currentNoteState;
