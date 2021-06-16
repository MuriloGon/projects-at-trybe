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
    setUserEmail: (state, { payload }) => { state.email = payload; },
  },
});

export const { setAvatar, setUserEmail, setUserName } = userSlice.actions;
export default userSlice.reducer;
