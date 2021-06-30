import { getDrinksIngredients } from './drinksAPI';
import { getMealIngredients } from './mealAPI';

const mapAPI = (mealsFunc, drinksFunc) => (type) => {
  switch (type) {
  case 'meals': return mealsFunc;
  case 'drinks': return drinksFunc;
  default: break;
  }
};

export const fetchIngredients = mapAPI(getMealIngredients, getDrinksIngredients);
