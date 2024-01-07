import { useEffect, useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { Outlet } from "react-router-dom";
// import { setLoading, setListProduct } from "../features/home/homeslice";
// import { getUser } from "../services/user.api";
// import { getAllProduct } from "../services/product.api";
// import { getListItemFromCart } from "../services/order.api";
// import { getCartListItem, setTotalCartItem } from "../features/cart/cartSlice";
// import { ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import Header from "./Header";
// import Navbar from "./Navbar";
// import Footer from "./Footer";
// import ScrollToTop from "./ScrollToTop";
import { useAuthStatus } from "../hooks/useAuthStatus";
import UserLayout from "./UserLayout";
import AdminLayout from "./AdminLayout";
import { dbFirestore } from "../firebase.config";
import { doc, getDoc } from "firebase/firestore";

function AppLayout() {
  const { loggedIn, userId } = useAuthStatus();
  const [user, setUser] = useState({});
  useEffect(() => {
    const getUserRole = async () => {
      try {
        const userRef = doc(dbFirestore, "users", userId);
        const userData = await getDoc(userRef);
        setUser(userData.data());
      } catch (error) {
        console.log(error);
      }
    };
    getUserRole();
  }, [userId]);
  // useEffect(() => {
  //   // Redirect based on user role when user data changes
  //   if (user.role === "user" || user.role === null) {
  //     navigate("/user"); // Redirect to the user section
  //   } else if (user?.role === "admin") {
  //     navigate("/admin"); // Redirect to the admin section
  //   }
  // }, [user, navigate]);
  return user.role === "user" || "" ? <UserLayout /> : <AdminLayout />;
}

export default AppLayout;
