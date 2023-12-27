import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./user/features/user/userSlice";
import cartReducer from "./user/features/cart/cartSlice";
import homeReducer from "./user/features/home/homeslice";
import productReducer from "./user/features/product/productSlice";
import checkoutReducer from "./user/features/checkout/checkoutSlice";

const store = configureStore({
  reducer: {
    user: userReducer,
    cart: cartReducer,
    home: homeReducer,
    product: productReducer,
    checkout: checkoutReducer,
  },
});

export default store;
