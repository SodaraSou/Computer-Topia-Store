import { useEffect, useState } from "react";
import { auth } from "../../firebase.config";
import { onAuthStateChanged } from "firebase/auth";
import { Navigate, Outlet } from "react-router-dom";
import Home from "../dashboard/Dashboard";

function ProtectedRoute() {
  const [loginState, setLoginState] = useState(true);
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setLoginState(true);
      } else {
        setLoginState(false);
      }
    });
  }, []);
  return loginState ? <Outlet /> : <Navigate to="/signin" />;
}

export default ProtectedRoute;
