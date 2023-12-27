import { useState } from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../admin/components/Sidebar";
import Header from "../admin/components/Header";
import BottomNavbar from "../admin/components/BottomNavbar";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function AdminLayout({ handleUser }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
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
        className={`transition-width pb-14 ${
          isSidebarOpen ? "w-full xl:ml-[230px] " : "flex-grow"
        }`}
      >
        <Header onClick={toggleSidebar} />
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
