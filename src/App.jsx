import { useState, useEffect, useContext } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./user/features/home/Home";
import Cart from "./user/features/cart/Cart";
import Checkout from "./user/features/checkout/Checkout";
import Product from "./user/features/product/Product";
import ProductListPage from "./user/features/product/ProductListPage";
import Profile from "./user/features/user/Profile";
import ProtectedRoute from "./user/features/auth/ProtectedRoute";
import SignIn from "./user/features/auth/SignIn";
import SignUp from "./user/features/auth/SignUp";
import { UserProvider } from "./contexts/user/UserContext";
import { ProductProvider } from "./contexts/product/ProductContext";
import { OrderProvider } from "./contexts/order/OrderContext";

import Order from "./admin/pages/order/Order";
import Dashboard from "./admin/pages/dashboard/Dashboard";
import AdminLayout from "./ui/AdminLayout";
import UserLayout from "./ui/UserLayout";
import { dbFirestore } from "./firebase.config";
import { doc, getDoc } from "firebase/firestore";
import { onAuthStateChanged } from "firebase/auth";
import Spinner from "./ui/Spinner";
import { auth } from "./firebase.config";
import ProductAdmin from "./admin/pages/product/ProductAdmin";
import User from "./admin/pages/user/User";
import Report from "./admin/pages/report/Report";
import NotFoundPage from "./ui/NotFoundPage";

function App() {
  const [role, setRole] = useState(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        const userRef = doc(dbFirestore, "users", user.uid);
        const data = await getDoc(userRef);
        const userData = data.data();
        setRole(userData.role);
      }
      setLoading(false);
    });
    return () => unsubscribe();
  }, []);
  const handleUser = () => {
    setRole(null);
  };
  if (loading) {
    return <Spinner fullScreenSpinner={true} />;
  }
  return (
    <OrderProvider>
      <ProductProvider>
        <UserProvider>
          <Router>
            <Routes>
              {role === "admin" ? (
                <Route element={<AdminLayout handleUser={handleUser} />}>
                  <Route path="/" element={<Dashboard />} />
                  <Route path="/admin/order" element={<Order />} />
                  <Route path="/admin/product" element={<ProductAdmin />} />
                  <Route path="/admin/user" element={<User />} />
                  <Route path="/admin/report" element={<Report />} />
                  <Route path="/*" element={<NotFoundPage />} />
                </Route>
              ) : (
                <Route element={<UserLayout />}>
                  <Route path="/" element={<Home />} />
                  <Route
                    path="/cart"
                    element={
                      <ProtectedRoute>
                        <Cart />
                      </ProtectedRoute>
                    }
                  />
                  <Route
                    path="/checkout"
                    element={
                      <ProtectedRoute>
                        <Checkout />
                      </ProtectedRoute>
                    }
                  />
                  <Route
                    path="/profile"
                    element={
                      <ProtectedRoute>
                        <Profile />
                      </ProtectedRoute>
                    }
                  />
                  <Route path="/product/:productId" element={<Product />} />
                  <Route
                    path="/productList/:type/:productType"
                    element={<ProductListPage />}
                  />
                  <Route path="/signUp" element={<SignUp />} />
                  <Route path="/signIn" element={<SignIn />} />
                  <Route path="/*" element={<NotFoundPage />} />
                </Route>
              )}
            </Routes>
          </Router>
        </UserProvider>
      </ProductProvider>
    </OrderProvider>
  );
}

export default App;