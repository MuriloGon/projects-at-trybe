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
    incrementScore: (state) => { state.score += 1; },
    incrementAssertions: (state, payload) => { state.assertions = payload; },
    setQuestions: (state, { payload }) => { state.questions = payload; },
    setToken: (state, { payload }) => { state.token = payload; },
    setRedirect: (state, { payload }) => { state.allowRedirect = payload; },
    setTimer: (state, { payload }) => { state.timer = payload; },
  },
});

export const fetchTokenThunk = () => async (dispatch) => {
  const res = await fetch('https://opentdb.com/api_token.php?command=request');
  const data = await res.json();

  dispatch(gameSlice.actions.setToken(data.token));
  dispatch(gameSlice.actions.setRedirect(true));
};

export const { incrementAssertions, incrementScore,
  setQuestions, setToken, setTimer } = gameSlice.actions;
export default gameSlice.reducer;
