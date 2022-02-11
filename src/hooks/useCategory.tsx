import { useState } from 'react';

const useCategory = () => {
  const [category, setCategory] = useState<string>();

  const updateCategory = (categoryName: string) => {
    setCategory(categoryName);
  };

  return { category, updateCategory };
};

export default useCategory;
