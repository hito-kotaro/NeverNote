import { useMediaQuery } from 'react-responsive';

const mediaQuery = () => {
  const query = {
    isLaptop: useMediaQuery({ query: '(min-width: 1280px)' }),
  };
  return { query };
};

export default mediaQuery;
