import React, { useEffect, VFC } from 'react';
import Loading from '../Loading/Loading';
import NoteListItem from './NoteListItem';
import useNotes from '../../hooks/useNotes';
import useApiRequests from '../../hooks/useApiRequests';
import type NoteType from '../../types/Note';

type Props = {
  isLoading: boolean;
  notes: NoteType[];
  textColor: string;
  color: string;
};

const NoteListVerticle: VFC<Props> = (props) => {
  const { isLoading, notes, textColor, color } = props;
  const { getNotes } = useApiRequests();

  useEffect(() => {
    getNotes();
  }, [notes]);

  return (
    <div className="sticky text-white w-80 h-screen overflow-y-scroll is-scroll my-auto bg-gray-800">
      <div className="text-white font-bold text-lg pl-3 mb-5"> ノート</div>
      <div className="text-white font-bold text-md pl-3">
        {notes.length}個のノート
      </div>
      {isLoading ? (
        <div className="mx-auto my-40">
          <Loading />
        </div>
      ) : (
        notes.map((note: NoteType) => (
          <div key={note.id} className="flex justify-center">
            <NoteListItem textColor={textColor} color={color} note={note} />
          </div>
        ))
      )}
    </div>
  );
};

export default NoteListVerticle;
