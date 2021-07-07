import { combineReducers } from '@reduxjs/toolkit';

import mealsToken from './mealsToken';
import cocktailsToken from './cocktailsToken';
import user from './user';
import doneRecipes from './doneRecipes';
import favoriteRecipes from './favoriteRecipes';
import inProgressRecipes from './inProgressRecipes';
import auth from './auth';
import explore from './exploreSlice';

const rootReducer = combineReducers({
  mealsToken,
  cocktailsToken,
  user,
  doneRecipes,
  favoriteRecipes,
  inProgressRecipes,
  auth,
  explore,
});

export default rootReducer;
