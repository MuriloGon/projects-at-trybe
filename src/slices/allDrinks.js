import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  drinks: [],
};

const allDrinksSlices = createSlice({
  name: 'allDrinks',
  initialState,
  reducers: {
    setAllDrinks: (state, action) => { state.drinks = action.payload; },
  },
});

export const { setAllDrinks } = allDrinksSlices.actions;
export default allDrinksSlices.reducer;
