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
    addItemByAmount: (
      state,
      action: { type: string, payload: { item: CartData, qty: number } },
    ) => {
      const { id: itemId } = action.payload.item;
      const { qty } = action.payload;
      const isDuplicate = state.items.some(({ id }) => id === itemId);
      if (isDuplicate) {
        const index = state.items.findIndex(({ id }) => id === itemId);
        state.items[index].quantity += qty;
      } else {
        state.items.push(action.payload.item);
      }
    },
    removeItem: (state, action: { type: string, payload: string }) => {
      const { payload: payloadId } = action;
      state.items = state.items.filter(({ id }) => id !== payloadId);
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
  addItem, removeItem, minusOneQty, plusOneQty, addItemByAmount,
} = shopCart.actions;
export default shopCart.reducer;
