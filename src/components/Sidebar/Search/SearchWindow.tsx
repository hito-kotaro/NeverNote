import React, { useEffect, VFC } from 'react';
import SearchForm from './SearchForm';
import type NoteType from '../../../types/NoteType';
import useSearchNote from '../../../hooks/useSearchNote';
import useInputForm from '../../../hooks/useInputForm';
import Button from '../../Button/Button';
import useMyPage from '../../../hooks/useMyPage';

type Props = {
  toggelOpen: () => void;
};

const SearchWindow: VFC<Props> = (props) => {
  const { toggelOpen } = props;
  const { clickNote } = useMyPage();
  const { searchedNotes, searchNote } = useSearchNote();
  const { onChange, input } = useInputForm();

  useEffect(() => {
    searchNote(input);
  }, [searchNote, input]);

  const clickSeachResult = (note: NoteType) => {
    clickNote(note, 'note');
    toggelOpen();
  };

  return (
    <div
      className="absolute rounded-md p-2  top-0 left-14  bg-gray-800 w-96 h-2/3 overflow-y-scroll drop-shadow-md"
      id="is-scroll"
    >
      <SearchForm
        input={input}
        onChange={(e) => onChange(e)}
        searchedNotes={searchedNotes}
      />

      {searchedNotes.map((note: NoteType) => {
        return (
          <Button
            className="flex mt-5 w-full bg-gray-700 rounded-md hover:bg-gray-500 p-2"
            key={note.id}
            buttonAction={() => clickSeachResult(note)}
          >
            <>
              <div className="text-white font-bold overflow-x-hidden">
                {note.title}
              </div>
              <div className="text-white ml-auto">{note.date}</div>
            </>
          </Button>
        );
      })}
    </div>
  );
};

export default SearchWindow;
