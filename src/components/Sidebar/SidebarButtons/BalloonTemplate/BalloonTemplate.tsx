import React, { ReactElement, VFC } from 'react';

type Props = {
  children: ReactElement;
  balloonMsg: string;
};

const BalloonTemplate: VFC<Props> = (props) => {
  const { children, balloonMsg } = props;
  return (
    <div id="balloonoya" className="">
      <span id="balloon" className="text-white font-bold bg-gray-700">
        {balloonMsg}
      </span>
      {children}
    </div>
  );
};

export default BalloonTemplate;
