import { useState, useEffect, Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { UserProvider } from "./contexts/user/UserContext";
import { ProductProvider } from "./contexts/product/ProductContext";
import { OrderProvider } from "./contexts/order/OrderContext";
import { dbFirestore, auth } from "./firebase.config";
import { doc, getDoc } from "firebase/firestore";
import { onAuthStateChanged } from "firebase/auth";
import AdminLayout from "./ui/AdminLayout";
import UserLayout from "./ui/UserLayout";
import Spinner from "./ui/Spinner";

const Home = lazy(() => import("./pages/user/home/Home"));
const Cart = lazy(() => import("./pages/user/cart/Cart"));
const Checkout = lazy(() => import("./pages/user/checkout/Checkout"));
const Product = lazy(() => import("./pages/user/product/Product"));
const ProductListPage = lazy(() =>
  import("./pages/user/product/ProductListPage")
);
const Profile = lazy(() => import("./pages/user/user/Profile"));
const ProtectedRoute = lazy(() => import("./pages/user/auth/ProtectedRoute"));
const Authentication = lazy(() => import("./pages/user/auth/Authentication"));
const Order = lazy(() => import("./pages/admin/order/Order"));
const ProductAdmin = lazy(() => import("./pages/admin/product/ProductAdmin"));
const User = lazy(() => import("./pages/admin/user/User"));
const Dashboard = lazy(() => import("./pages/admin/dashboard/Dashboard"));
const NotFoundPage = lazy(() => import("./ui/NotFoundPage"));

function App() {
  const [role, setRole] = useState(null);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
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
            <Suspense fallback={<Spinner fullScreenSpinner={true} />}>
              <Routes>
                {role === "admin" ? (
                  <Route element={<AdminLayout handleUser={handleUser} />}>
                    <Route path="/order" element={<Order />} />
                    <Route path="/product" element={<ProductAdmin />} />
                    <Route path="/user" element={<User />} />
                    <Route path="/" element={<Dashboard />} />
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
                          <Profile setMainLoading={setLoading} />
                        </ProtectedRoute>
                      }
                    />
                    <Route path="/product/:productId" element={<Product />} />
                    <Route
                      path="/productList/:type/:productType"
                      element={<ProductListPage />}
                    />
                    <Route
                      path="/authentication"
                      element={<Authentication setLoading={setLoading} />}
                    />
                    <Route path="/*" element={<NotFoundPage />} />
                  </Route>
                )}
              </Routes>
            </Suspense>
          </Router>
        </UserProvider>
      </ProductProvider>
    </OrderProvider>
  );
}

export default App;
