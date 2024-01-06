import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  product: {},
  productList: [],
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
    sortByPrice: {
      prepare(productList, sort) {
        return {
          payload: { productList, sort },
        };
      },
      reducer(state, action) {
        // const sortedList = [...action.payload.productList].sort((a, b) =>
        //   action.payload.sort === "Lowest Price"
        //     ? a.data.price - b.data.price
        //     : b.data.price - a.data.price
        // );
        let sortedList = [...action.payload.productList];

        switch (action.payload.sort) {
          case "Lowest Price":
            sortedList = sortedList.sort((a, b) => a.data.price - b.data.price);
            break;
          case "Highest Price":
            sortedList = sortedList.sort((a, b) => b.data.price - a.data.price);
            break;
          case "A-Z":
            sortedList = sortedList.sort((a, b) =>
              // a.data.model.localeCompare(b.data.model)
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
        state.productList = sortedList;
      },
    },
  },
});

export const { setProduct, setLoading, setProductList, sortByPrice } =
  productSlice.actions;

export default productSlice.reducer;
