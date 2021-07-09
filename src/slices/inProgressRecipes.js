import { createSlice } from '@reduxjs/toolkit';
import { getLocalStorage, saveLocalStorage } from '../services/localStorage';

const saveInprogressLocalStorage = (data) => saveLocalStorage('inProgressRecipes', data);

const initialState = {
  cocktails: {},
  meals: {},
};
const inProgressRecipesSlice = createSlice({
  name: 'inProgressRecipes',
  initialState,
  reducers: {
    loadInProgressStorage: () => getLocalStorage('inProgressRecipes', initialState),
    startRecipe: (state, { payload: { id, type } }) => {
      const typeKey = type === 'meals' ? 'meals' : 'cocktails';
      state[typeKey][id] = [];
      saveInprogressLocalStorage(state);
    },
    saveIngredientProgress: (state, { payload: { id, type, ingredientsList } }) => {
      const typeKey = type === 'meals' ? 'meals' : 'cocktails';
      state[typeKey][id] = ingredientsList;
      saveInprogressLocalStorage(state);
    },
  },
});

export const { loadInProgressStorage,
  startRecipe, saveIngredientProgress } = inProgressRecipesSlice.actions;
export default inProgressRecipesSlice.reducer;
