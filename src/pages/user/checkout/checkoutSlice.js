import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  checkoutList: [],
  totalCheckoutPrice: 0,
  loading: false,
};

const checkoutSlice = createSlice({
  name: "checkout",
  initialState,
  reducers: {
    setCheckoutList: (state, action) => {
      state.checkoutList = action.payload;
      state.loading = false;
    },
    setTotalCheckoutPrice: (state, action) => {
      state.totalCheckoutPrice = action.payload;
    },
    setLoading: (state) => {
      state.loading = true;
    },
  },
});

export const { setCheckoutList, setTotalCheckoutPrice, setLoading } =
  checkoutSlice.actions;

export default checkoutSlice.reducer;
