import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./features/home/Home";
import AppLayout from "./ui/AppLayout";
import Cart from "./features/cart/Cart";
import Order from "./features/order/Order";
import Checkout from "./features/checkout/Checkout";
import Product from "./features/product/Product";
import Profile from "./features/user/Profile";
import ProtectedRoute from "./features/user/ProtectedRoute";
import SignIn from "./features/user/SignIn";
import SignUp from "./features/user/SignUp";

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
          element: <Cart />,
        },
        {
          path: "/order",
          element: <Order />,
        },
        {
          path: "/checkout",
          element: <Checkout />,
        },
        {
          path: "/product/:productType/:productId",
          element: <Product />,
        },
        {
          path: "/profile",
          element: <ProtectedRoute />,
          children: [
            {
              path: "/profile",
              element: <Profile />,
            },
          ],
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
