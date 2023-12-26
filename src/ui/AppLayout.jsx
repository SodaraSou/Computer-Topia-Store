import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
import {
  setLoading,
  setListProduct,
} from "../features/home/homeslice";
import { getAllProduct } from "../services/product.api";
import { getListItemFromCart } from "../services/order.api";
import { getCartListItem, setTotalCartItem } from "../features/cart/cartSlice";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Header from "./Header";
import Navbar from "./Navbar";
import Footer from "./Footer";
import ScrollToTop from "./ScrollToTop";

function AppLayout() {
  const dispatch = useDispatch();
  const totalItem = useSelector((state) => state.cart.totalCartItem);
  useEffect(() => {
    dispatch(setLoading());
    const fetchAllProduct = async () => {
      const data = await getAllProduct();
      dispatch(setListProduct(data));
    };
    const unsubscribe = getListItemFromCart((data) => {
      dispatch(getCartListItem(data.items));
      dispatch(setTotalCartItem());
    });
    return () => {
      unsubscribe;
      fetchAllProduct();
    };
  }, [dispatch]);
  return (
    <>
      <Header totalItem={totalItem} />
      <Navbar />
      <main className="max-w-7xl mx-auto min-h-screen">
        <Outlet />
      </main>
      <Footer />
      <ToastContainer />
      <ScrollToTop />
    </>
  );
}

export default AppLayout;
