import toast from 'react-hot-toast';

const useButtonAnctions = () => {
  const blankAntion = () => {
    toast.error('未実装です');
  };

  return { blankAntion };
};

export default useButtonAnctions;
