import { useCallback, useState } from 'react';

const useSubWindow = () => {
  const [subWindowIsOpen, setSubWindowIsOpen] = useState(false);

  const toggleIsOpen = useCallback(() => {
    setSubWindowIsOpen(!subWindowIsOpen);
  }, [subWindowIsOpen]);

  return { subWindowIsOpen, toggleIsOpen };
};

export default useSubWindow;
