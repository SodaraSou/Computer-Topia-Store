import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartListItem: [],
  cartItem: {},
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    getCartListItem: (state, action) => {
      state.cartListItem = action.payload;
    },
    getCartItem: (state, action) => {
      state.cartItem = action.payload;
    },
  },
});

export const { getCartListItem, getCartItem } = cartSlice.actions;

export default cartSlice.reducer;
