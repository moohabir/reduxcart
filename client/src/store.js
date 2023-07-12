import { configureStore } from '@reduxjs/toolkit';
import productReducer from './features/productSlice';
import cartReducer from './features/cartSlice';
import modalReducer from './features/modalSlice';

export const store = configureStore({
  reducer: {
    product: productReducer,
    cart: cartReducer,
    modal: modalReducer,
  },
});
