import React, { VFC } from 'react';

type Props = {
  className: string;
};

const Loading: VFC<Props> = (props) => {
  const { className } = props;

  return (
    <div className=" mx-auto">
      <div className={className} />
    </div>
  );
};

export default Loading;
