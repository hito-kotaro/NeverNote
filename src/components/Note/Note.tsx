import React, { VFC } from 'react';

type Props = {
  children: string;
};

const Note: VFC<Props> = (props) => {
  const { children } = props;
  return (
    <div className="flex-none">
      <div className="flex-none w-40 h-52 bg-gray-700 drop-shadow-lg rounded-md p-2 m-2">
        <div className="font-bold text-white">{children}</div>
      </div>
    </div>
  );
};

export default Note;
