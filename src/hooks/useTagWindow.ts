import { useState, useCallback } from 'react';

const useTagWindow = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleIsOpen = useCallback(() => {
    setIsOpen(!isOpen);
  }, [isOpen]);

  return { toggleIsOpen, isOpen };
};

export default useTagWindow;
