import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  logged: false,
};

const auth = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    loginUser: (state) => { state.logged = true; },
    logoutUser: (state) => { state.logged = false; },
  },
});

export const { loginUser, logoutUser } = auth.actions;
export default auth.reducer;
