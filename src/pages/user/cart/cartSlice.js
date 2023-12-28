import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartListItem: [],
  totalCartPrice: 0,
  totalCartItem: 0,
  loading: false,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    getCartListItem: (state, action) => {
      state.cartListItem = action.payload;
      state.loading = false;
    },
    setCartTotalPrice: (state, action) => {
      state.totalCartPrice = action.payload;
    },
    setTotalCartItem: (state) => {
      const sum = state.cartListItem.reduce(
        (sum, item) => (sum += item.quantity),
        0
      );
      state.totalCartItem = sum;
    },
  },
});

export const {
  getCartListItem,
  setCartTotalPrice,
  setTotalCartItem,
  setLoading,
} = cartSlice.actions;

export default cartSlice.reducer;
