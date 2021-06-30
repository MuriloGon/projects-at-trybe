import { createSlice } from '@reduxjs/toolkit';
import { getLocalStorage } from '../services/localStorage';

const initialState = [];

const inProgressRecipesSlice = createSlice({
  name: 'inProgressRecipes',
  initialState,
  reducers: {
    loadInProgressStorage: () => getLocalStorage('inProgressRecipes', initialState),
  },
});

export const { loadInProgressStorage } = inProgressRecipesSlice.actions;
export default inProgressRecipesSlice.reducer;
