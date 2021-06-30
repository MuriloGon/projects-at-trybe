import { createSlice } from '@reduxjs/toolkit';
import { getLocalStorage } from '../services/localStorage';

const initialState = [];

const userSlice = createSlice({
  name: 'doneRecipes',
  initialState,
  reducers: {
    loadDoneRecipesStorage: () => getLocalStorage('doneRecipe', initialState),
  },
});

export const { loadDoneRecipesStorage } = userSlice.actions;
export default userSlice.reducer;
