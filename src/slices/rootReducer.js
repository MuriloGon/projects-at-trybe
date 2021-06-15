import { combineReducers } from '@reduxjs/toolkit';

import login from './loginSlice';
import game from './gameSlice';

const rootReducer = combineReducers({
  login, game,
});

export default rootReducer;
