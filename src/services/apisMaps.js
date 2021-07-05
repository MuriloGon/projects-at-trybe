import { drinkIngredientImg, getDrinksAreas, getDrinksCategories,
  getDrinksIngredients,
  getRandomDrink } from './drinksAPI';
import { getMealAreas, getMealCategories, getMealIngredients,
  getRandomMeal, mealIngredientImg } from './mealAPI';

const mapAPI = (mealsFunc, drinksFunc) => (type) => {
  switch (type) {
  case 'meals': return mealsFunc;
  case 'drinks': return drinksFunc;
  default: break;
  }
};

export const fetchCategories = mapAPI(getMealCategories, getDrinksCategories);

export const fetchIngredients = mapAPI(getMealIngredients, getDrinksIngredients);

export const fetchAreas = mapAPI(getMealAreas, getDrinksAreas);

export const fetchImageSrc = mapAPI(mealIngredientImg, drinkIngredientImg);

export const fetchRandomMenu = mapAPI(getRandomMeal, getRandomDrink);
