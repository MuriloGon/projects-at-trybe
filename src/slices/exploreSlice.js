import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  savedIngredient: {
    category: null,
    type: null,
  },
  savedArea: {
    area: null,
    type: 'meals',
  },
};

const exploreSlice = createSlice({
  name: 'explore',
  initialState,
  reducers: {
    saveIngredient: (state, { payload }) => {
      state.savedIngredient.category = payload.category;
      state.savedIngredient.type = payload.type;
    },
    clearIngredient: (state) => {
      state.savedIngredient.category = null;
      state.savedIngredient.type = null;
    },
    clearArea: (state) => {
      state.savedArea.area = null;
    },
  },
});

export const { saveIngredient, clearIngredient } = exploreSlice.actions;
export default exploreSlice.reducer;
