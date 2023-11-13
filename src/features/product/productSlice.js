import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  product: {},
};

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    setLoading: (state) => {
      state.loading = true;
    },
    setProduct: (state, action) => {
      state.product = action.payload;
      state.loading = false;
    },
  },
});

export const { setProduct, setLoading } = productSlice.actions;

export default productSlice.reducer;
