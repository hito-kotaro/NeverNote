import { useCallback, useState } from 'react';

const useFavoriteWindow = () => {
  const [favoriteIsOpen, setFavoriteIsOpen] = useState(false);

  const favoriteWindowToggleOpen = useCallback(() => {
    setFavoriteIsOpen(!favoriteIsOpen);
  }, [favoriteIsOpen]);

  return { favoriteIsOpen, favoriteWindowToggleOpen };
};

export default useFavoriteWindow;
