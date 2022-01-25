import React, { VFC } from 'react';
import { Link } from 'react-router-dom';
import { Menu } from '@headlessui/react';

type Props = {
  to: string;
  children: string;
  onClick?: () => void;
};

const MenuItemButton: VFC<Props> = (props) => {
  const { to, children, onClick } = props;
  return (
    <Menu.Item>
      {({ active }) => (
        <Link
          onClick={onClick}
          to={to}
          className={`${
            active ? 'bg-green-500 text-white' : 'text-gray-900'
          } group flex rounded-md items-center  px-2 py-2 text-sm`}
        >
          {children}
        </Link>
      )}
    </Menu.Item>
  );
};

export default MenuItemButton;
