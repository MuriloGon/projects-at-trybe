import { createSlice } from '@reduxjs/toolkit';
import { getLocalStorage } from '../services/localStorage';

const initialState = null;

const cocktailsTokenSlice = createSlice({
  name: 'cocktailsToken',
  initialState,
  reducers: {
    loadCocktailsStorage: () => getLocalStorage('cocktailsToken', initialState),
    setCocktailsToken: (_, action) => action.payload,
  },
});

export const { loadCocktailsStorage,
  setCocktailsToken } = cocktailsTokenSlice.actions;
export default cocktailsTokenSlice.reducer;
