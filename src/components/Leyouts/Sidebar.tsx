import React from 'react';
import SidebarButtons from '../Sidebar/SidebarButtons';

const Sidebar = () => {
  return (
    <div id="sidebar" className="sticky top-0 bg-gray-800 h-screen z-50">
      <SidebarButtons />
    </div>
  );
};

export default Sidebar;
