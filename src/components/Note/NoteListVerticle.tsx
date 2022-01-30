import React, { VFC, useEffect } from 'react';
import { useRecoilState } from 'recoil';
import Loading from '../Loading/Loading';
import NoteListItem from './NoteListItem';
import useApiRequests from '../../hooks/useApiRequests';
import currentNoteState from '../../store/currentNoteState';
import useNotes from '../../hooks/useNotes';
import type NoteType from '../../types/NoteType';

const NoteListVerticle: VFC = () => {
  const { notes } = useNotes();
  const [currentNote] = useRecoilState(currentNoteState);
  const { fetchNotes } = useApiRequests();
  // const { isLoading } = props;
  const isLoading = false;

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
            <NoteListItem note={note} />
          </div>
        ))
      )}
    </div>
  );
};

export default NoteListVerticle;
