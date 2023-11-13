import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  listProduct: [],
  product: {},
};

const homeSlice = createSlice({
  name: "home",
  initialState,
  reducers: {
    setListProduct: (state, action) => {
      state.listProduct = action.payload;
    },
    setProduct: (state, action) => {
      state.product = action.payload;
    },
  },
});

export const { setListProduct, setProduct } = homeSlice.actions;

export default homeSlice.reducer;
