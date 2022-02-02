import { useRecoilState } from 'recoil';
import { pageIdState } from '../store/pageIdState';
import useCurrentNote from './useCurrentNote';
import type NoteType from '../types/NoteType';

const useMypage = () => {
  const { updateCurrentNote } = useCurrentNote();
  const [pageId, setPageId] = useRecoilState(pageIdState);

  const clickNote = (note: NoteType, to: string) => {
    if (to === 'note') {
      updateCurrentNote(note);
    }
    setPageId(to);
  };

  return { clickNote, pageId, setPageId };
};

export default useMypage;
