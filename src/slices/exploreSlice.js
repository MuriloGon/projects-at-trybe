import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  savedIngredient: {
    name: null,
    type: null,
  },
  savedArea: {
    name: null,
    type: 'meals',
  },
};

const exploreSlice = createSlice({
  name: 'explore',
  initialState,
  reducers: {
    saveIngredient: (state, { payload }) => {
      state.savedIngredient.name = payload.name;
      state.savedIngredient.type = payload.type;
    },
    saveArea: (state, { payload }) => {
      state.savedArea = payload.name;
    },
    clearExplore: () => initialState,
  },
});

export const { saveIngredient, saveArea, clearExplore } = exploreSlice.actions;
export default exploreSlice.reducer;
