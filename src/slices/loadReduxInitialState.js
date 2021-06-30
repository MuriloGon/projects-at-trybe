import { loadMealsTokenStorage } from './mealsToken';
import { loadCocktailsStorage } from './cocktailsToken';
import { loadUserStorage } from './user';
import { loadDoneRecipesStorage } from './doneRecipes';
import { loadFavoriteRecipesStorage } from './favoriteRecipes';
import { loadInProgressStorage } from './inProgressRecipes';

export default () => (dispatch) => {
  dispatch(loadMealsTokenStorage());
  dispatch(loadCocktailsStorage());
  dispatch(loadUserStorage());
  dispatch(loadDoneRecipesStorage());
  dispatch(loadFavoriteRecipesStorage());
  dispatch(loadInProgressStorage());
};
