import { createSlice } from '@reduxjs/toolkit';
import { Category } from '../helpers/mlInterfaces';

interface ICategoriesSlice {
  isLoading: boolean;
  categories: Array<Category>;
}

const initialState = {
  isLoading: false,
  categories: [],
} as ICategoriesSlice;

const categories = createSlice({
  name: 'categories',
  initialState,
  reducers: {
    isLoading: (state) => {
      state.isLoading = true;
    },
    isLoaded: (state) => {
      state.isLoading = false;
    },
    saveCategories: (state, action: { payload: Array<Category> }) => {
      state.categories = action.payload;
    },
  },
});

export const { isLoaded, isLoading, saveCategories } = categories.actions;
export default categories.reducer;
