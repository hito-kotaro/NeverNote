import React, { VFC } from 'react';
import useSidebarState from '../../hooks/useSidebarState';

type Props = {
  text: string;
  icon: any;
};
const SidebarIcon: VFC<Props> = (props) => {
  const { text, icon } = props;
  const { isOpen, setIsOpen } = useSidebarState();

  return (
    <div
      role="button"
      tabIndex={0}
      id="note-icon"
      onClick={() => setIsOpen(!isOpen)}
      onKeyDown={() => setIsOpen(!isOpen)}
      className="mx-2 mb-5 flex justify-center"
    >
      {icon}
      <div className="sidebar-icon group">
        <span className="sidebar-tooltip group-hover:scale-100">{text}</span>
      </div>
    </div>
  );
};

export default SidebarIcon;
