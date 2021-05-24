import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  lastQuery: '',
  lastSelectedCategory: '',
};

const searchParams = createSlice({
  name: 'search-params',
  initialState,
  reducers: {
    updateLastQuery: (state, action: { payload: string }) => {
      state.lastQuery = action.payload;
    },
    updateLastSelectedCategory: (state, action: { payload: string }) => {
      state.lastSelectedCategory = action.payload;
    },
  },
});

export const { updateLastQuery, updateLastSelectedCategory } = searchParams.actions;
export default searchParams.reducer;
