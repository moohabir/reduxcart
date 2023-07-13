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
    addToCart: (state, action) => {
      const item = action.payload;
      const existingItem = state.cart.find((i) => i.id === item.id);
      if (existingItem) {
        existingItem.amount += 1;
      } else {
        const newItem = { ...item, amount: 1 }; // Add amount field to the item
        state.cart.push(newItem);
      }
    },
    clearCart: (state) => {
      state.cart = [];
    },
    removeItem: (state, action) => {
      const itemId = action.payload;
      state.cart = state.cart.filter((item) => item.id !== itemId);
    },
    increase: (state, action) => {
      const cartItem = state.cart.find((item) => item.id === action.payload.id);
      cartItem.amount += 1;
    },
    decrease: (state, action) => {
      const cartItem = state.cart.find((item) => item.id === action.payload.id);
      if (cartItem.amount > 1) {
        cartItem.amount -= 1;
      }
    },
    calculateTotals: (state) => {
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
