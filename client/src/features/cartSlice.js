import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  cart: [],
  totalAmount: 0,
  totalPrice: 0,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, actions) => {
      const item = actions.payload;
      const existingItem = state.cart.find((i) => i.id === item);
      if (existingItem) {
        existingItem.amount += item.amount;
      } else {
        state.cart.push(item);
      }
    },
    clearCart: (state) => {
      state.cart = [];
    },
    removeItem: (state, actions) => {
      const itemId = actions.payload;
      state.cart = state.cart.filter((item) => item.id !== itemId);
    },
    increase: (state, actions) => {
      const cartItem = state.cart.find(
        (item) => item.id === actions.payload.id
      );
      cartItem.amount = cartItem.amount + 1;
    },
    decrease: (state, { payload }) => {
      const cartItem = state.cart.find((item) => item.id === payload.id);
      cartItem.amount = cartItem.amount - 1;
    },
    calculateTotals: (state, cations) => {
      let totalAmount = 0;
      let totalPrice = 0;
      state.cart.forEach((item) => {
        totalAmount += item.amount;
        totalPrice += item.amount * item.price;
      });
      state.totalAmount = totalAmount;
      state.totalPrice = totalPrice;
    },
  },
});
export const {
  addToCart,
  clearCart,
  increase,
  decrease,
  removeItem,
  calculateTotals,
} = cartSlice.actions;
export default cartSlice.reducer;
