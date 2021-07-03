import { useRef } from 'react';
import { useLocation } from 'react-router';

const useMenuType = () => {
  const { pathname } = useLocation();
  const recipeType = useRef('meals');

  recipeType.current = (pathname.split('/')[1] === 'comidas' ? 'meals' : 'drinks');
  return recipeType.current;
};

export default useMenuType;
