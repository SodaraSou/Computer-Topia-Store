import { useState, useContext, useEffect } from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import Header from "./AdminHeader";
import BottomNavbar from "./BottomNavbar";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Spinner from "./Spinner";
import OrderContext from "../contexts/order/OrderContext";
import ProductContext from "../contexts/product/ProductContext";
import {
  getOrderList,
  calcTotalStatus,
  calcTotalOrderMonthly,
} from "../contexts/order/OrderAction";
import { getAllProduct } from "../contexts/product/ProductAction";
import { getAllUser } from "../contexts/user/UserAction";
import UserContext from "../contexts/user/UserContext";

function AdminLayout({ handleUser }) {
  const { orderDispatch } = useContext(OrderContext);
  const { productDispatch } = useContext(ProductContext);
  const { userDispatch } = useContext(UserContext);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    const unsubscribeOrderList = getOrderList((data) => {
      orderDispatch({ type: "SET_ORDER_LIST", payload: data });
      const { totalRevenue, totalOrdered } = calcTotalStatus(data);
      orderDispatch({
        type: "SET_TOTAL",
        payload: { totalRevenue, totalOrdered },
      });
      const monthlyOrders = calcTotalOrderMonthly(data);
      orderDispatch({ type: "SET_MONTHLY_ORDER", payload: monthlyOrders });
      setLoading(false);
    });
    const unsubscribeProductList = getAllProduct((data) => {
      productDispatch({ type: "SET_LIST_PRODUCT", payload: data });
    });
    const unsubscribeUserList = getAllUser((data) => {
      userDispatch({ type: "SET_USER_LIST", payload: data });
    });
    return () => {
      unsubscribeOrderList();
      unsubscribeProductList();
      unsubscribeUserList();
    };
  }, [orderDispatch, productDispatch, userDispatch]);

  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  if (loading) {
    return <Spinner fullScreenSpinner={true} />;
  }

  return (
    <div className="flex flex-col md:flex-row">
      <aside
        className={`fixed h-screen top-0 left-0 bottom-0 transition-transform transform ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <Sidebar handleUser={handleUser} />
      </aside>
      <main
        className={`transition-width mb-[52px] md:mb-[68px] xl:mb-0 ${
          isSidebarOpen ? "w-full xl:ml-[230px] " : "flex-grow"
        }`}
      >
        <Header onClick={toggleSidebar} handleUser={handleUser} />
        <Outlet />
      </main>
      <BottomNavbar />
      <ToastContainer
        position="top-center"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </div>
  );
}

export default AdminLayout;
