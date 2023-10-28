import {
  signInWithEmailAndPassword,
  signOut,
  createUserWithEmailAndPassword,
  sendPasswordResetEmail,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { auth, dbFirestore } from "../firebase.config";
import {
  collection,
  doc,
  getDocs,
  getDoc,
  setDoc,
  query,
  where,
} from "firebase/firestore";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";

export const createAccount = async (inputData) => {
  const { username, email, password, confirmPassword } = inputData;
  if (password === confirmPassword) {
    try {
      const docRef = collection(dbFirestore, "users");
      const q = query(docRef, where("email", "==", email));
      const queryDocSnap = await getDocs(q);

      if (queryDocSnap.size === 0) {
        const userCredential = await createUserWithEmailAndPassword(
          auth,
          email,
          password
        );
        const user = userCredential.user;
        await setDoc(doc(dbFirestore, "users", user.uid), {
          username,
          email,
          profileImg: "",
          role: "user",
        });
        console.log("Success");
        toast.success("Success");
        return true;
      } else {
        console.log("Already Exist!");
        toast.error("Email already exist!");
      }
    } catch (error) {
      console.log(error);
    }
  } else {
    console.log("Password not match!");
    toast.error("Password not match!");
    return false;
  }
};

export const resetPassword = async (email) => {
  const docRef = collection(dbFirestore, "users");
  const q = query(docRef, where("email", "==", email));
  const querySnapshot = await getDocs(q);
  if (querySnapshot.size !== 0) {
    try {
      await sendPasswordResetEmail(auth, email);
      console.log("Success");
      toast.success("Success");
    } catch (error) {
      console.log(error);
    }
  } else {
    console.log("Email not exist!");
    toast.error("Email not exist!");
  }
};

export const signInUser = async (inputData) => {
  const { email, password } = inputData;
  try {
    await signInWithEmailAndPassword(auth, email, password);
    toast.success("Success");
    return true;
  } catch (error) {
    console.log(error);
    toast.error("Error");
  }
};

export const signInWithGoogle = async () => {
  const googleAuthProvider = new GoogleAuthProvider();
  const result = await signInWithPopup(auth, googleAuthProvider);
  const user = result.user;

  const docRef = doc(dbFirestore, "users", user.uid);
  const docSnap = await getDoc(docRef);

  if (!docSnap.exists()) {
    await setDoc(docRef, {
      username: user.displayName,
      email: user.email,
      profileImg: "",
      role: "user",
    });
    console.log("Success");
    toast.success("Success");
  }
  return true;
};

export const signOutUser = () => {
  try {
    signOut(auth);
    return true;
  } catch (error) {
    console.log(error);
  }
};

export const updateUser = () => {};
export const deleteUser = () => {};

export const getUser = async (userId) => {
  try {
    const docRef = doc(dbFirestore, "users", userId);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      return docSnap.data();
    } else {
      console.log("no");
    }
  } catch (error) {
    console.log("no");
  }
};
