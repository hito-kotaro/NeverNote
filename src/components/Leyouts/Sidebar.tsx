import React from 'react';
import SidebarButtonList from '../Sidebar/SidebarButtonList';

const Sidebar = () => {
  return (
    <div id="sidebar" className="sticky top-0 bg-gray-800 h-screen z-50">
      <SidebarButtonList />
    </div>
  );
};

export default Sidebar;
