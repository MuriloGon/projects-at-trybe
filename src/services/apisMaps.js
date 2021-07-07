import { drinkIngredientImg, getDrinksAreas, getDrinksCategories,
  getDrinksIngredients, getRandomDrink, getDrinks,
  getDrinksByCategories } from './drinksAPI';

import { getMealAreas, getMealCategories, getMealIngredients,
  getRandomMeal, mealIngredientImg, getMeals, getMealByCategories } from './mealAPI';

const mapAPI = (mealsFunc, drinksFunc) => (type) => {
  switch (type) {
  case 'meals': return mealsFunc;
  case 'drinks': return drinksFunc;
  default: break;
  }
};

export const fetchCategories = mapAPI(getMealCategories, getDrinksCategories);

export const fetchByCategories = mapAPI(getMealByCategories, getDrinksByCategories);

export const fetchIngredients = mapAPI(getMealIngredients, getDrinksIngredients);

export const fetchAreas = mapAPI(getMealAreas, getDrinksAreas);

export const fetchImageSrc = mapAPI(mealIngredientImg, drinkIngredientImg);

export const fetchMealsOrDrinks = mapAPI(getMeals, getDrinks);

export const fetchRandomMenu = mapAPI(getRandomMeal, getRandomDrink);
