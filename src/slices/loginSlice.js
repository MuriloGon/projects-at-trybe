import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  userName: '',
  avatar: '',
  email: '',
};

const userSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    setUserName: (state, { payload }) => { state.userName = payload; },
    setAvatar: (state, { payload }) => { state.avatar = payload; },
    setEmail: (state, { payload }) => { state.email = payload; },
  },
});

export const { setAvatar, setEmail, setUserName } = userSlice.actions;
export default userSlice.reducer;
