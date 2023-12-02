import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./features/user/userSlice";
import cartReducer from "./features/cart/cartSlice";
import homeReducer from "./features/home/homeslice";
import productReducer from "./features/product/productSlice";
import checkoutReducer from "./features/checkout/checkoutSlice";

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
