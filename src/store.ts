/* eslint-disable import/no-extraneous-dependencies */
import { configureStore, combineReducers } from '@reduxjs/toolkit';

import categories from './slices/categoriesSlice';
import cart from './slices/shopCart';
import searchParams from './slices/searchParams';
import productsList from './slices/productsListSlice';

const root = combineReducers({
  categories, cart, searchParams, productsList,
});

const store = configureStore({
  reducer: root,
});

export type RootState = ReturnType<typeof root>;
export default store;
