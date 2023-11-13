import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./features/user/userSlice";
import cartReducer from "./features/cart/cartSlice";
import homeReducer from "./features/home/homeslice";
import productReducer from "./features/product/productSlice";

const store = configureStore({
  reducer: {
    user: userReducer,
    cart: cartReducer,
    home: homeReducer,
    product: productReducer,
  },
});

export default store;
