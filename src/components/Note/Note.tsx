import React, { VFC } from 'react';

type Props = {
  children: string;
  color: string;
  textColor: string;
};

const Note: VFC<Props> = (props) => {
  const { children, color, textColor } = props;
  return (
    <div className="flex-none">
      <div
        className={`flex-none w-40 h-52 drop-shadow-md rounded-md p-2 m-2 ${color} ${textColor} `}
      >
        <div className="font-bold ">{children}</div>
      </div>
    </div>
  );
};

export default Note;
