import React, { VFC } from 'react';
import SidebarButtonList from '../Sidebar/SidebarButtonList';

type Props = {
  tag: string | undefined;
  updateTag: (tagName: string) => void;
};
const Sidebar: VFC<Props> = (props) => {
  const { tag, updateTag } = props;
  return (
    <div id="sidebar" className="sticky top-0 bg-gray-800 h-screen z-50">
      <SidebarButtonList tag={tag} updateTag={updateTag} />
    </div>
  );
};

export default Sidebar;
