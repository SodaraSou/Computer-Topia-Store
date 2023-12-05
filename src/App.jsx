import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./features/home/Home";
import AppLayout from "./ui/AppLayout";
import Cart from "./features/cart/Cart";
import Order from "./features/order/Order";
import Checkout from "./features/checkout/Checkout";
import Product from "./features/product/Product";
// import Profile, { loader as profileDataLoader } from "./features/user/Profile";
import Profile from "./features/user/Profile";
import ProtectedRoute from "./features/auth/ProtectedRoute";
import SignIn from "./features/auth/SignIn";
import SignUp from "./features/auth/SignUp";

function App() {
  const router = createBrowserRouter([
    {
      element: <AppLayout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/cart",
          element: (
            <ProtectedRoute>
              <Cart />
            </ProtectedRoute>
          ),
        },
        {
          path: "/order",
          element: <Order />,
        },
        {
          path: "/checkout",
          element: (
            <ProtectedRoute>
              <Checkout />
            </ProtectedRoute>
          ),
        },
        {
          path: "/product/:productId",
          element: <Product />,
        },
        {
          path: "/profile",
          element: (
            <ProtectedRoute>
              <Profile />
            </ProtectedRoute>
          ),
          // loader: profileDataLoader,
        },
        {
          path: "/signUp",
          element: <SignUp />,
        },
        {
          path: "/signIn",
          element: <SignIn />,
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
