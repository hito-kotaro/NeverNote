/* eslint-disable no-nested-ternary */
import React, { VFC } from 'react';
import NoteListItem from './NoteListItem';
import Loading from '../Loading/Loading';
import NoteEmptyDisplay from './NoteEmptyDisplay';
import type NoteType from '../../types/NoteType';

type Props = {
  isLoading: boolean;
  wrapMsg: string;
  notes: NoteType[];
};

const NoteHoriozonList: VFC<Props> = (props) => {
  const { isLoading, wrapMsg, notes } = props;
  return (
    <div className="">
      <div className="text-green-500 font-bold underline">{wrapMsg}</div>
      <div id="is-scroll" className="mt-3 mx-auto flex overflow-x-auto">
        {isLoading ? (
          <div className=" mx-auto">
            <Loading className="mx-auto animate-spin h-20  w-20 border-8 border-gray-600 rounded-full border-t-transparent" />
          </div>
        ) : notes.length > 0 ? (
          notes.map((note: NoteType) => (
            <NoteListItem key={note.id} note={note} />
          ))
        ) : (
          <div className="flex w-full justify-center my-10">
            <NoteEmptyDisplay />
          </div>
        )}
      </div>
    </div>
  );
};
export default NoteHoriozonList;
