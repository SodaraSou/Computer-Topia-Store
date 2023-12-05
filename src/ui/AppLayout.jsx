import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Header from "./Header";
import Footer from "./Footer";
import ScrollToTop from "./ScrollToTop";

function AppLayout() {
  return (
    <>
      <Header />
      <main className="max-w-7xl mx-auto">
        <Outlet />
      </main>
      <Footer />
      <ToastContainer />
      <ScrollToTop />
    </>
  );
}

export default AppLayout;
