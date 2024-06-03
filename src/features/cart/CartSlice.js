import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [],
  totalPrice: 0,
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem: (state, action) => {
      let isInArray = state.items.some((item) => item._id === action.payload._id);
      if (isInArray) {
        state.items = state.items.map((item) => (item._id === action.payload._id ? { ...item, count: item.count + 1 } : item));
        state.totalPrice += action.payload.price;
      } else {
        state.totalPrice += action.payload.price * action.payload.count;
        state.items = [...state.items, { ...action.payload }];
      }
      localStorage.setItem('cart', JSON.stringify(state.items));
    },
    removeItem: (state, action) => {
      state.items = state.items.filter((item) => item._id !== action.payload._id);
      state.totalPrice -= action.payload.price;
      state.totalPrice = state.items.length === 0 ? 0 : state.totalPrice;
      localStorage.setItem('cart', JSON.stringify(state.items));
    },
    setCountItem: (state, action) => {
      state.items = state.items.map((item) => (item._id === action.payload._id ? { ...item, count: item.count - 1 } : item));
      state.totalPrice -= action.payload.price;
      localStorage.setItem('cart', JSON.stringify(state.items));
    },
  },
});

export const { addItem, removeItem, setCountItem } = cartSlice.actions;
export default cartSlice.reducer;
