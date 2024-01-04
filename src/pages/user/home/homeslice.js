import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  listProduct: [],
  product: {},
  loading: false,
  query: "",
  dropdownVisible: false,
  openMenu: false,
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
    setOpenMenu: (state, action) => {
      state.openMenu = action.payload;
    },
  },
});

export const {
  setListProduct,
  setLoading,
  setDropdownVisible,
  setQuery,
  setOpenMenu,
} = homeSlice.actions;

export default homeSlice.reducer;
