import { useRecoilState } from 'recoil';
import userInfo from '../store/userInfo';
import User from '../types/User';

const useUserInfo = () => {
  const [user, setUser] = useRecoilState(userInfo);
  const updateUser = (newUser: User) => {
    // console.log(newUser);
    setUser(newUser);
  };

  const fetchUser = () => {
    return user;
  };
  return { updateUser, fetchUser };
};

export default useUserInfo;
