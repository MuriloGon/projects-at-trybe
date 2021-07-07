import { drinkIngredientImg, getDrinksAreas, getDrinksCategories,
  getDrinksIngredients, getRandomDrink, getDrinks,
  getDrinksByCategories, getDrinksByIngredient } from './drinksAPI';

import { getMealAreas, getMealCategories, getMealIngredients,
  getRandomMeal, mealIngredientImg, getMeals, getMealByCategories,
  getMealsByIngredient } from './mealAPI';

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

export const formatImageSrc = mapAPI(mealIngredientImg, drinkIngredientImg);

export const fetchMealsOrDrinks = mapAPI(getMeals, getDrinks);

export const fetchRandomMenu = mapAPI(getRandomMeal, getRandomDrink);

export const fetchItemsByIngredient = mapAPI(getMealsByIngredient, getDrinksByIngredient);
