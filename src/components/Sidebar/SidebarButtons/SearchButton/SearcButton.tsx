import React, { useEffect, useState, VFC } from 'react';
import { AiOutlineSearch } from 'react-icons/ai';
import useInputForm from '../../../../hooks/useInputForm';
import useSidebarState from '../../../../hooks/useSidebarState';
import useNotes from '../../../../hooks/useNotes';
import Button from '../../../Button/Button';
import type NoteType from '../../../../types/Note';

const SearchButton: VFC = () => {
  const { notes } = useNotes();
  const [searchNotes, setSearchNotes] = useState<NoteType[]>(notes);
  const { onChange, input, clearInput } = useInputForm();
  const { isOpen, setIsOpen } = useSidebarState();

  const buttonClassName =
    'mr-0 inline-flex justify-center w-18 px-4 py-2 text-sm font-medium text-black bg-gray-800 rounded-md hover:bg-gray-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75';

  const toggelOpen = () => {
    setIsOpen(!isOpen);
    clearInput();
  };

  const searchNote = () => {
    const filterd = notes.filter((note) => {
      return !note.title.indexOf(input) && input.length !== 0;
    });
    setSearchNotes(filterd);
  };

  useEffect(() => {
    searchNote();
  }, [input]);

  const navigateNote = (e: any) => {
    console.log('click');
  };

  return (
    <div className="">
      <div id="balloonoya" className="">
        <span id="balloon" className="text-white font-bold bg-gray-700">
          検索
        </span>
        <Button className={buttonClassName} buttonAction={toggelOpen}>
          <AiOutlineSearch size="32" color="#4ade80" />
        </Button>
      </div>
      {isOpen ? (
        <div
          className="absolute rounded-md p-2  top-10 left-16  bg-gray-800 w-96 h-2/3 overflow-y-scroll drop-shadow-md"
          id="is-scroll"
        >
          <input
            className=" mt-5 rounded-md w-full py-2 px-3 text-gray-500 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            placeholder="検索"
            value={input}
            onChange={onChange}
          />
          <div className="text-white font-bold text-right">
            検索結果{searchNotes.length}件
          </div>

          {searchNotes.map((note: NoteType) => {
            return (
              <div
                className="flex mt-5 hover:bg-gray-500"
                key={note.id}
                role="button"
                tabIndex={0}
                onClick={navigateNote}
                onKeyDown={navigateNote}
              >
                <div className="text-white overflow-x-hidden">{note.title}</div>
                <div className="text-white ml-auto">{note.date}</div>
              </div>
            );
          })}
        </div>
      ) : (
        ''
      )}
    </div>
  );
};

export default SearchButton;
