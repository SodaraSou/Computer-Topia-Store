import { useEffect, useState } from "react";
import { dbFirestore, auth } from "../firebase.config";
import { onAuthStateChanged } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";

export const useRoleStatus = () => {
  const [userRole, setUserRole] = useState(null);
  useEffect(() => {}, []);
};
