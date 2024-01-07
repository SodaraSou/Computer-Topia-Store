import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  product: {},
  productList: [],
  isEmpty: false,
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
    setProductList: (state, aciton) => {
      state.productList = aciton.payload;
      state.loading = false;
    },
    setIsEmpty: (state) => {
      state.isEmpty = false;
    },
    sortByPrice: {
      prepare(productList, sort) {
        return {
          payload: { productList, sort },
        };
      },
      reducer(state, action) {
        const originalList = [...action.payload.productList];
        let sortedList = [...originalList];

        switch (action.payload.sort) {
          case "Lowest Price":
            sortedList = sortedList.sort((a, b) => a.data.price - b.data.price);
            break;
          case "Highest Price":
            sortedList = sortedList.sort((a, b) => b.data.price - a.data.price);
            break;
          case "Name A-Z":
            sortedList = sortedList.sort((a, b) =>
              a.data.model
                .toLowerCase()
                .localeCompare(b.data.model.toLowerCase())
            );
            break;
          case "Offer":
            sortedList = sortedList.filter((product) => product.data.offer);
            break;
          default:
            sortedList = [...action.payload.productList];
            break;
        }
        state.productList = sortedList.length === 0 ? originalList : sortedList;
        state.isEmpty = sortedList.length === 0 && true;
      },
    },
  },
});

export const {
  setProduct,
  setLoading,
  setProductList,
  sortByPrice,
  setIsEmpty,
} = productSlice.actions;

export default productSlice.reducer;
