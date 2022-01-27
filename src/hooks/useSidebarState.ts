import React, { useState, useCallback } from 'react';

const useSidebarIcon = () => {
  const [isOpen, setIsOpen] = useState(false);

  const updateIsOpen = useCallback(() => {
    setIsOpen(!isOpen);
    console.log(isOpen);
  }, [isOpen]);

  return { isOpen, setIsOpen };
};

export default useSidebarIcon;
