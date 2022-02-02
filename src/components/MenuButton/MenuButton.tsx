import React, { Fragment, VFC } from 'react';
import { Menu, Transition } from '@headlessui/react';
import MenuItemButton from './MenuItemButton';
// import useButtonAction from '../../hooks/useButtonActions';
import useAuth from '../../hooks/useAuth';
import Button from '../Button/Button';

type Props = {
  isAuth: boolean;
};

const MenuButton: VFC<Props> = (props) => {
  const { isAuth } = props;
  const { logout } = useAuth();

  return (
    <div className="w-24 text-right fixed top-5 right-1">
      <Menu as="div" className="relative inline-block text-left w-18">
        <Menu.Button className="mr-0 inline-flex justify-center w-18 px-4 py-2 text-sm font-medium text-black bg-black rounded-md bg-opacity-30 hover:bg-opacity-40 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
          <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
            <path d="M24 6h-24v-4h24v4zm0 4h-24v4h24v-4zm0 8h-24v4h24v-4z" />
          </svg>
        </Menu.Button>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="absolute right-0 w-56 mt-2 origin-top-right bg-white divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
            {isAuth ? (
              <>
                <MenuItemButton to="/mypage">ホーム画面へ</MenuItemButton>

                <Button
                  className="w-full hover:bg-green-500 hover:text-white text-gray-900
                 group flex rounded-md items-center  px-2 py-2 text-sm"
                  buttonAction={() => logout('ログアウトしました')}
                >
                  ログアウト
                </Button>
              </>
            ) : (
              <MenuItemButton to="/home">ログイン</MenuItemButton>
            )}
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  );
};

export default MenuButton;
