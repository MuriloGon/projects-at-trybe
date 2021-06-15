import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  questions: [],
  assertions: 0,
  score: 0,
  token: '',
};

const gameSlice = createSlice({
  name: 'game',
  initialState,
  reducers: {
    incrementScore: (state) => { state.score += 1; },
    incrementAssertions: (state, payload) => { state.assertions = payload; },
    setQuestions: (state, { payload }) => { state.questions = payload; },
    setToken: (state, { payload }) => { state.token = payload; },
  },
});

export const { setAvatar, setEmail, setUserName } = gameSlice.actions;
export default gameSlice.reducer;
