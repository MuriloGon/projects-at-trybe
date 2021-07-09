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
      switch (type) {
      case 'meals':
        state.meals[id] = [];
        break;
      case 'drinks':
        state.cocktails[id] = [];
        break;
      default:
        saveInprogressLocalStorage(state);
      }
    },
  },
});

export const { loadInProgressStorage,
  startRecipe } = inProgressRecipesSlice.actions;
export default inProgressRecipesSlice.reducer;
