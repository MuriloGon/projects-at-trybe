import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  hasDataToRender: false,
  searchBarData: undefined,
};

const searchbarSlice = createSlice({
  name: 'searchbar',
  initialState,
  reducers: {
    setSearchData: (state, { payload: { status, data } }) => {
      state.hasDataToRender = status;
      state.searchBarData = data;
    },
    clearSearchData: () => initialState,
  },
});

export const {
  clearSearchData, setSearchData } = searchbarSlice.actions;
export default searchbarSlice.reducer;
