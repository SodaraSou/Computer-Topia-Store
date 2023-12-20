import { useEffect, useState, useRef } from "react";
import { auth } from "../firebase.config";
import { onAuthStateChanged } from "firebase/auth";

export const useAuthStatus = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const isMounted = useRef(true);

  useEffect(() => {
    if (isMounted) {
      onAuthStateChanged(auth, (user) => {
        if (user) {
          setLoggedIn(true);
        }
      });
    }
    return () => {
      isMounted.current = false;
    };
  }, [isMounted]);
  return { loggedIn };
};
