import React, { VFC } from 'react';

type Props = {
  wSize: string;
  hSize: string;
};

const Loading: VFC<Props> = (props) => {
  const { wSize, hSize } = props;
  return (
    <div className=" mx-auto">
      {/* <div className="mx-auto animate-spin h-20  w-20 border-8 border-gray-600 rounded-full border-t-transparent" /> */}
      <div
        className={`mx-auto animate-spin ${hSize} ${wSize} border-8 border-gray-600 rounded-full border-t-transparent`}
      />
    </div>
  );
};

export default Loading;
