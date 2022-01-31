import React, { ChangeEvent, VFC } from 'react';
import type NoteType from '../../../types/NoteType';

type Props = {
  input: string;
  // eslint-disable-next-line no-unused-vars
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  searchedNotes: NoteType[];
};

const SearchForm: VFC<Props> = (props) => {
  const { input, onChange, searchedNotes } = props;
  return (
    <>
      <input
        className=" mt-5 rounded-md w-full py-2 px-3 text-gray-500 leading-tight focus:outline-none focus:shadow-outline"
        type="text"
        placeholder="検索"
        value={input}
        onChange={onChange}
      />
      <div className="text-white font-bold text-right">
        検索結果{searchedNotes.length}件
      </div>
    </>
  );
};

export default SearchForm;
