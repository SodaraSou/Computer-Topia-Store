import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./pages/user/user/userSlice";
import cartReducer from "./pages/user/cart/cartSlice";
import homeReducer from "./pages/user/home/homeslice";
import productReducer from "./pages/user/product/productSlice";
import checkoutReducer from "./pages/user/checkout/checkoutSlice";

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
