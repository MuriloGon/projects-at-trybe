import { createSlice } from '@reduxjs/toolkit';
import { getLocalStorage, saveLocalStorage } from '../services/localStorage';

const initialState = [];

const favoriteRecipes = createSlice({
  name: 'favoriceRecipes',
  initialState,
  reducers: {
    loadFavoriteRecipesStorage: () => getLocalStorage('favoriteRecipes', initialState),
    toggleFavorite: (state, { payload }) => {
      const isFavorite = state.some(({ id }) => id === payload.id);
      let out = [...state];
      if (isFavorite) {
        out = state.filter(({ id }) => id !== payload.id);
      } else out.push(payload);

      saveLocalStorage('favoriteRecipes', out);

      return out;
    },
  },
});

export const { loadFavoriteRecipesStorage, toggleFavorite } = favoriteRecipes.actions;
export default favoriteRecipes.reducer;
