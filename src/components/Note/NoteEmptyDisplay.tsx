import React from 'react';
import Button from '../Button/Button';
import Loading from '../Loading/Loading';
import useApiRequests from '../../hooks/useApiRequests';

const NoteEmptyDisplay = () => {
  const { createNote, isLoading } = useApiRequests();

  return (
    <div className="text-center">
      {isLoading ? (
        <Loading hSize="h-20" wSize="w-20" />
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
