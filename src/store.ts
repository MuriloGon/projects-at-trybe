/* eslint-disable import/no-extraneous-dependencies */
import { configureStore, combineReducers } from '@reduxjs/toolkit';

import categories from './slices/categoriesSlice';
import cart from './slices/shopCart';
import searchParams from './slices/searchParams';
import productsList from './slices/productsListSlice';
import comments from './slices/commentsSlice';

const root = combineReducers({
  categories, cart, searchParams, productsList, comments,
});

const previousStateStr = localStorage.getItem('previousState');
let preloadedState;
if (previousStateStr !== null) {
  preloadedState = JSON.parse(previousStateStr) as RootState;
}

const store = configureStore({
  reducer: root,
  preloadedState,
});

export type RootState = ReturnType<typeof root>;
export default store;
