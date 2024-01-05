import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
import { getListItemFromCart } from "../services/order.api";
import { getAllProduct } from "../services/product.api";
import {
  getCartListItem,
  setTotalCartItem,
} from "../pages/user/cart/cartSlice";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Header from "./Header";
import Navbar from "./Navbar";
import Footer from "./Footer";
import ScrollToTop from "./ScrollToTop";
import { setListProduct } from "../pages/user/home/homeslice";

function UserLayout() {
  const dispatch = useDispatch();
  const totalItem = useSelector((state) => state.cart.totalCartItem);
  useEffect(() => {
    const unsubscribeProductList = getAllProduct((data) => {
      dispatch(setListProduct(data));
    });
    const unsubscribe = getListItemFromCart((data) => {
      dispatch(getCartListItem(data.items));
      dispatch(setTotalCartItem());
    });
    return () => {
      unsubscribeProductList();
      unsubscribe;
    };
  }, [dispatch, totalItem]);
  return (
    <>
      <Header />
      <Navbar />
      <main className="min-h-screen">
        <Outlet />
      </main>
      <Footer />
      <ToastContainer />
      <ScrollToTop />
    </>
  );
}

export default UserLayout;
