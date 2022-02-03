import React from 'react';
import Button from '../Button/Button';
import Loading from '../Loading/Loading';
import useApiRequests from '../../hooks/useApiRequests';

const NoteEmptyDisplay = () => {
  const { createNote, isLoading } = useApiRequests();

  return (
    <div className="text-center">
      {isLoading ? (
        <Loading className="mx-auto animate-spin h-20  w-20 border-8 border-gray-600 rounded-full border-t-transparent" />
      ) : (
        <Button
          buttonAction={createNote}
          className=" bg-green-400 p-3 rounded-lg hover:drop-shadow-md hover:bg-green-200"
        >
          新しいノートを作成
        </Button>
      )}
    </div>
  );
};

export default NoteEmptyDisplay;
