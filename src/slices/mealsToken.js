import { createSlice } from '@reduxjs/toolkit';
import { getLocalStorage, saveLocalStorage } from '../services/localStorage';

const initialState = null;

const mealsTokenSlice = createSlice({
  name: 'mealsToken',
  initialState,
  reducers: {
    loadMealsTokenStorage: () => getLocalStorage('mealsToken', initialState),
    setMealsToken: (_, action) => {
      saveLocalStorage('mealsToken', action.payload);
      return action.payload;
    },
  },
});

export const { loadMealsTokenStorage,
  setMealsToken } = mealsTokenSlice.actions;
export default mealsTokenSlice.reducer;
