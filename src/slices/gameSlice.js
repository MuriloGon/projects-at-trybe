import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  questions: [],
  assertions: 0,
  score: 0,
  token: '',
  allowRedirect: false,
  timer: false,
};

const gameSlice = createSlice({
  name: 'game',
  initialState,
  reducers: {
    incrementAssertions: (state) => { state.assertions += 1; },
    setScore: (state, { payload }) => { state.score += payload; },
    setQuestions: (state, { payload }) => { state.questions = payload; },
    setToken: (state, { payload }) => { state.token = payload; },
    setRedirect: (state, { payload }) => { state.allowRedirect = payload; },
    setTimer: (state, { payload }) => { state.timer = payload; },
    resetGameState: (state) => {
      state.assertions = 0;
      state.score = 0;
    },
  },
});

export const fetchTokenThunk = () => async (dispatch) => {
  const res = await fetch('https://opentdb.com/api_token.php?command=request');
  const data = await res.json();

  dispatch(gameSlice.actions.setToken(data.token));
  dispatch(gameSlice.actions.setRedirect(true));
};

export const { incrementAssertions, setScore,
  setQuestions, setToken, setTimer, resetGameState } = gameSlice.actions;
export default gameSlice.reducer;
