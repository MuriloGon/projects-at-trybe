import { configureStore } from '@reduxjs/toolkit';

import reducer from './slices/rootReducer';

const store = configureStore({
  reducer,
});

export default store;
