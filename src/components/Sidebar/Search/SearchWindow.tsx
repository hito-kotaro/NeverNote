import React, { useEffect, VFC } from 'react';
import SearchForm from './SearchForm';
import type NoteType from '../../../types/NoteType';
import useSearchNote from '../../../hooks/useSearchNote';
import useInputForm from '../../../hooks/useInputForm';

const SearchWindow: VFC = () => {
  const { searchedNotes, searchNote } = useSearchNote();
  const { onChange, input } = useInputForm();

  useEffect(() => {
    searchNote(input);
  }, [searchNote, input]);

  const navigateNote = () => {
    console.log('click');
  };

  return (
    <div
      className="absolute rounded-md p-2  top-10 left-16  bg-gray-800 w-96 h-2/3 overflow-y-scroll drop-shadow-md"
      id="is-scroll"
    >
      <SearchForm
        input={input}
        onChange={(e) => onChange(e)}
        searchedNotes={searchedNotes}
      />

      {searchedNotes.map((note: NoteType) => {
        return (
          <div
            className="flex mt-5 bg-gray-700 rounded-md hover:bg-gray-500 p-2"
            key={note.id}
            role="button"
            tabIndex={0}
            onClick={navigateNote}
            onKeyDown={navigateNote}
          >
            <div className="text-white font-bold overflow-x-hidden">
              {note.title}
            </div>
            <div className="text-white ml-auto">{note.date}</div>
          </div>
        );
      })}
    </div>
  );
};

export default SearchWindow;
