import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  meals: [],
};

const allMealsSlice = createSlice({
  name: 'allMeals',
  initialState,
  reducers: {
    setAllMeals: (state, action) => { state.meals = action.payload; },
  },
});

export const { setAllMeals } = allMealsSlice.actions;
export default allMealsSlice.reducer;
