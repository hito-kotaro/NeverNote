import React, { useState, useCallback } from 'react';
import { useRecoilState } from 'recoil';
import notesState from '../store/notesState';
import type NoteType from '../types/Note';

const useSearchNote = () => {
  const [notes, setNotes] = useRecoilState(notesState);
  const [searchedNotes, setSearchedNotes] = useState<NoteType[]>();

  const searchNote = useCallback((input: string) => {
    const filterd = notes.filter((note) => {
      return !note.title.indexOf(input);
    });
    setSearchedNotes(filterd);
  }, []);

  return { searchedNotes, searchNote };
};

export default useSearchNote;
