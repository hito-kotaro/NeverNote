import React, { ReactElement, VFC } from 'react';
import BalloonTemplate from './BalloonTemplate/BalloonTemplate';
import Button from '../Button/Button';

type Props = {
  balloonMsg: string;
  buttonAction: () => void;
  children: ReactElement;
  isOpen?: boolean;
  openWindow?: ReactElement;
};

const SidebarCommonButton: VFC<Props> = (props) => {
  const { isOpen, balloonMsg, buttonAction, children, openWindow } = props;

  return (
    <div className="flex justify-center px-2 mt-2">
      <BalloonTemplate balloonMsg={balloonMsg}>
        <Button
          className="mr-0 inline-flex justify-center w-18 h-18 px-2 py-2 text-sm font-medium text-black bg-gray-800 rounded-full hover:bg-gray-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
          buttonAction={buttonAction}
        >
          {children}
        </Button>
      </BalloonTemplate>

      {isOpen ? openWindow : ''}
    </div>
  );
};

export default SidebarCommonButton;
