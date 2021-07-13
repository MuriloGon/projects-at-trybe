import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  search: false,
  profile: false,
  meals: false,
  explore: false,
  drinks: false,
};

const currentNavigationSlice = createSlice({
  initialState,
  name: 'currentNavigation',
  reducers: {
    setCurrentNavigation: (state, { payload }) => (
      { ...initialState, [payload]: true }
    ),
  },
});

export const { setCurrentNavigation } = currentNavigationSlice.actions;
export default currentNavigationSlice.reducer;
