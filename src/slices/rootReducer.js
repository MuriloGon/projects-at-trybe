import { combineReducers } from '@reduxjs/toolkit';

import mealsToken from './mealsToken';
import cocktailsToken from './cocktailsToken';
import user from './user';
import doneRecipes from './doneRecipes';
import favoriteRecipes from './favoriteRecipes';
import inProgressRecipes from './inProgressRecipes';
import allMeals from './allMeals';
import allDrinks from './allDrinks';
import auth from './auth';

const rootReducer = combineReducers({
  mealsToken,
  cocktailsToken,
  user,
  doneRecipes,
  favoriteRecipes,
  inProgressRecipes,
  allMeals,
  allDrinks,
  auth,
});

export default rootReducer;
