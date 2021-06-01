import { createSlice } from '@reduxjs/toolkit';
import { CartData } from '../helpers/cart';

const initialState: { items: Array<CartData> } = {
  items: [],
};

const shopCart = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem: (state, action: { type: string, payload: CartData }) => {
      const { payload: { id: payloadId } } = action;
      const isDuplicate = state.items.some(({ id }) => id === payloadId);
      if (isDuplicate) {
        const index = state.items.findIndex(({ id }) => id === payloadId);
        state.items[index].quantity += 1;
      } else {
        state.items.push(action.payload);
      }
    },
    removeItem: (state, action: { type: string, payload: string }) => {
      const { payload: payloadId } = action;
      state.items.filter(({ id }) => id !== payloadId);
    },
    minusOneQty: (state, action: { type: string, payload: string }) => {
      const { payload: payloadId } = action;
      const index = state.items.findIndex(({ id }) => id === payloadId);
      state.items[index].quantity -= 1;
    },
    plusOneQty: (state, action: { type: string, payload: string }) => {
      const { payload: payloadId } = action;
      const index = state.items.findIndex(({ id }) => id === payloadId);
      state.items[index].quantity += 1;
    },
  },
});

export const {
  addItem, removeItem, minusOneQty, plusOneQty,
} = shopCart.actions;
export default shopCart.reducer;
