import { useEffect, useState } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../../firebase.config";

function ProtectedRoute() {
  const [userState, setUserState] = useState(true);
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUserState(true);
      } else {
        setUserState(false);
      }
    });
  }, []);
  return userState ? <Outlet /> : <Navigate to="/signIn" />;
}

export default ProtectedRoute;
