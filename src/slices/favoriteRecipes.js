import { createSlice } from '@reduxjs/toolkit';
import { getLocalStorage } from '../services/localStorage';

const initialState = [];

const favoriteRecipes = createSlice({
  name: 'favoriceRecipes',
  initialState,
  reducers: {
    loadFavoriteRecipesStorage: () => getLocalStorage('favoriteRecipes', initialState),
  },
});

export const { loadFavoriteRecipesStorage } = favoriteRecipes.actions;
export default favoriteRecipes.reducer;
