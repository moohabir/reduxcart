import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

//const url = 'https://course-api.com/react-useReducer-cart-project';
const url = 'https://fakestoreapi.com/products';

export const getProductItems = createAsyncThunk(
  'product, getProducts',
  async (name, thunkApi) => {
    try {
      const response = await axios(url);
      console.log(response.data);
      return response.data;
    } catch (error) {
      thunkApi.rejectWithValue('something is wrong');
    }
  }
);

const initialState = {
  products: [],
  isLoading: false,
};

const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getProductItems.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getProductItems.fulfilled, (state, actions) => {
        state.isLoading = false;
        state.products = actions.payload;
      })
      .addCase(getProductItems.rejected, (state, actions) => {
        console(actions);
        state.isLoading = false;
      });
  },
});

export default productSlice.reducer;
