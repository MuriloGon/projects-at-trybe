import { createSlice } from '@reduxjs/toolkit';
import { getLocalStorage } from '../services/localStorage';

const initialState = {
  user: '',
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    loadUserStorage: () => getLocalStorage('user', initialState),
    setUser: (state, action) => { state.user = action.payload; },
  },
});

export const { loadUserStorage, setUser } = userSlice.actions;
export default userSlice.reducer;
