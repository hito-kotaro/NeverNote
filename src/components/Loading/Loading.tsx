import React, { VFC } from 'react';

type Props = {
  size: number;
};

const Loading: VFC<Props> = (props) => {
  const { size } = props;
  const classname = `w-${size} h-${size} mx-auto animate-spin border-8 border-gray-600 rounded-full border-t-transparent `;

  return (
    <div className=" mx-auto">
      <div className={classname} />
    </div>
  );
};

export default Loading;
