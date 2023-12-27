import { doc, getDoc } from "firebase/firestore";
import { auth, dbFirestore } from "../../firebase.config";
import { signInWithEmailAndPassword, signOut } from "firebase/auth";

export const signInUser = async (inputData) => {
  const { email, password } = inputData;
  try {
    await signInWithEmailAndPassword(auth, email, password);
    const userRef = doc(dbFirestore, "users", auth.currentUser.uid);
    const docSnap = await getDoc(userRef);
    const userData = docSnap.data();
    if (userData.role === "admin") {
      return true;
    }
  } catch (error) {
    console.log(error);
  }
};

export const signOutUser = async () => {
  try {
    await signOut(auth);
    return true;
  } catch (error) {
    console.log(error);
  }
};
