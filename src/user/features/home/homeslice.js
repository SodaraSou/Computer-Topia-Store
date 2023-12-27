import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  listProduct: [],
  product: {},
  loading: false,
  query: "",
  dropdownVisible: false,
};

const homeSlice = createSlice({
  name: "home",
  initialState,
  reducers: {
    setListProduct: (state, action) => {
      state.listProduct = action.payload;
      state.loading = false;
    },
    setLoading: (state) => {
      state.loading = true;
    },
    setDropdownVisible: (state, action) => {
      state.dropdownVisible = action.payload;
    },
    setQuery: (state, action) => {
      state.query = action.payload;
    },
  },
});

export const { setListProduct, setLoading, setDropdownVisible, setQuery } =
  homeSlice.actions;

export default homeSlice.reducer;
