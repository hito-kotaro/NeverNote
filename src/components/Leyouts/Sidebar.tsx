import React, { VFC } from 'react';
import SidebarButtonList from '../Sidebar/SidebarButtonList';

type Props = {
  updateCategory: (categoryName: string) => void;
};
const Sidebar: VFC<Props> = (props) => {
  const { updateCategory } = props;
  return (
    <div id="sidebar" className="sticky top-0 bg-gray-800 h-screen z-50">
      <SidebarButtonList updateCategory={updateCategory} />
    </div>
  );
};

export default Sidebar;
