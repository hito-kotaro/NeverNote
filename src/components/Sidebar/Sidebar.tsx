import React from 'react';
import {
  AiFillStar,
  AiFillHome,
  AiOutlinePlus,
  AiFillDelete,
  AiOutlineSearch,
  AiFillTags,
} from 'react-icons/ai';
import { RiStickyNoteFill } from 'react-icons/ri';

import SidebarIcon from './SidebarIcon';

const Sidebar = () => {
  return (
    <div id="sidebar" className="sticky top-0 bg-gray-800 h-screen">
      <hr className=" my-5 mx-2 sidebar-hr" />
      <SidebarIcon
        icon={<AiOutlineSearch size="32" color="#4ade80" />}
        text=""
      />
      <SidebarIcon icon={<AiOutlinePlus size="32" color="#4ade80" />} text="" />
      <SidebarIcon icon={<AiFillHome size="32" color="#4ade80" />} text="" />
      <SidebarIcon
        icon={<RiStickyNoteFill size="32" color="#4ade80" />}
        text=""
      />
      <SidebarIcon icon={<AiFillStar size="32" color="#4ade80" />} text="" />
      <SidebarIcon icon={<AiFillTags size="32" color="#4ade80" />} text="" />
      <SidebarIcon icon={<AiFillDelete size="32" color="#4ade80" />} text="" />
      <hr className=" mx-2 sidebar-hr" />
    </div>
  );
};

export default Sidebar;
