import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  loading: false,
};

const productList = createSlice({
  name: 'productsList',
  initialState,
  reducers: {
    listLoading: (state) => { state.loading = true; },
    listLoaded: (state) => { state.loading = false; },
  },
});

export const { listLoaded, listLoading } = productList.actions;
export default productList.reducer;
