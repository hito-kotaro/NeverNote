import React, { useState, useCallback } from 'react';
import { useRecoilState } from 'recoil';
import notesState from '../store/notesState';
import type NoteType from '../types/NoteType';

const useSearchNote = () => {
  const [notes] = useRecoilState(notesState);
  const [searchedNotes, setSearchedNotes] = useState<NoteType[]>(notes);
  const [isOpen, setIsOpen] = useState(false);

  const toggelOpen = useCallback(() => {
    setIsOpen(!isOpen);
  }, [isOpen]);

  const searchNote = useCallback((input: string) => {
    const filterd = notes.filter((note) => {
      return !note.title.indexOf(input) && input.length !== 0;
    });
    setSearchedNotes(filterd);
  }, []);

  return { searchedNotes, searchNote, toggelOpen, isOpen };
};

export default useSearchNote;
