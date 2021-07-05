import { createSlice } from '@reduxjs/toolkit';
import { getLocalStorage, saveLocalStorage } from '../services/localStorage';

const initialState = {
  email: '',
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    loadUserStorage: (state) => {
      state.email = getLocalStorage('user', initialState);
    },
    setUser: (state, action) => {
      saveLocalStorage('user', { email: action.payload });
      state.email = action.payload;
    },
  },
});

export const { loadUserStorage, setUser } = userSlice.actions;
export default userSlice.reducer;
