import React, { VFC } from 'react';

type Props = {
  text: string;
  icon: any;
};
const SidebarIcon: VFC<Props> = (props) => {
  const { text, icon } = props;

  return (
    <div id="note-icon" className="mx-2 mb-5 flex justify-center">
      {icon}
      <div className="sidebar-icon group">
        <span className="sidebar-tooltip group-hover:scale-100">{text}</span>
      </div>
    </div>
  );
};

export default SidebarIcon;
