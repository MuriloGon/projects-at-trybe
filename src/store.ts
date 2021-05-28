/* eslint-disable import/no-extraneous-dependencies */
import { configureStore, combineReducers } from '@reduxjs/toolkit';

import categories from './slices/categoriesSlice';
import shopCart from './slices/shopCart';
import searchParams from './slices/searchParams';
import productsList from './slices/productsListSlice';

const root = combineReducers({
  categories, shopCart, searchParams, productsList,
});

const store = configureStore({
  reducer: root,
});

export type RootState = ReturnType<typeof root>;
export default store;
