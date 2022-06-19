/* eslint-disable no-nested-ternary */
import React, { VFC } from 'react';
import NoteListItem from './NoteListItem';
import Loading from '../Loading/Loading';
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
            <Loading size={20} />
          </div>
        ) : (
          notes.map((note: NoteType) => (
            <NoteListItem key={note.id} note={note} />
          ))
        )}
      </div>
    </div>
  );
};
export default NoteHoriozonList;
