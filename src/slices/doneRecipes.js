import { createSlice } from '@reduxjs/toolkit';
import { getLocalStorage, saveLocalStorage } from '../services/localStorage';

const initialState = [];

const userSlice = createSlice({
  name: 'doneRecipes',
  initialState,
  reducers: {
    loadDoneRecipesStorage: () => getLocalStorage('doneRecipe', initialState),
    finishRecipe: (state, { payload }) => {
      state.push({ ...payload, doneDate: new Date().toLocaleDateString('pt-Br') });
      saveLocalStorage('doneRecipe', state);
    },
  },
});

export const { loadDoneRecipesStorage, finishRecipe } = userSlice.actions;
export default userSlice.reducer;
