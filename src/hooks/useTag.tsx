import { useState } from 'react';

const useTag = () => {
  const [tag, setTag] = useState<string>();

  const updateTag = (tagName: string) => {
    setTag(tagName);
  };

  return { tag, updateTag };
};

export default useTag;
