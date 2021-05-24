import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [],
};

const shopCart = createSlice({
  name: 'shopCart',
  initialState,
  reducers: {
    addItem: () => {},
    removeItem: () => {},
    minusOneQty: () => {},
    plusOneQty: () => {},
  },
});

export const {
  addItem, removeItem, minusOneQty, plusOneQty,
} = shopCart.actions;
export default shopCart.reducer;
