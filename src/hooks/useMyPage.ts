import { useRecoilState } from 'recoil';
import pageIdState from '../store/pageIdState';
import useCurrentNote from './useCurrentNote';
import type NoteType from '../types/NoteType';

const usePageId = () => {
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

export default usePageId;
