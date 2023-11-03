import {
  signInWithEmailAndPassword,
  signOut,
  createUserWithEmailAndPassword,
  sendPasswordResetEmail,
  GoogleAuthProvider,
  signInWithPopup,
  onAuthStateChanged,
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
  updateDoc,
  deleteDoc,
} from "firebase/firestore";
import { toast } from "react-toastify";

export const getUserId = () => {
  return new Promise((resolve) => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        resolve(user.uid);
      } else {
        resolve(null);
      }
    });
  });
};

export const getUser = async (userId) => {
  try {
    const docRef = doc(dbFirestore, "users", userId);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      return docSnap.data();
    } else {
      return null;
    }
  } catch (error) {
    console.log(error);
  }
};

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
          phoneNumber: "XXX-XXX-XXX",
          profileImg: "",
          role: "user",
          cardNumber: "",
          cardName: "",
          cardExpDate: "",
          houseNo: "",
          streetNo: "",
          village: "",
          commune: "",
          district: "",
          province: "",
        });
        toast.success("Success");
        return true;
      } else {
        toast.error("Email already exist!");
      }
    } catch (error) {
      console.log(error);
    }
  } else {
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
      toast.success("Success");
    } catch (error) {
      toast.error("Error!");
    }
  } else {
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
      cardNumber: "",
      cardName: "",
      cardExpDate: "",
      houseNo: "",
      streetNo: "",
      village: "",
      commune: "",
      district: "",
      province: "",
    });
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

export const updateUserProfile = async (username, phoneNumber) => {
  try {
    const userRef = doc(dbFirestore, "users", auth.currentUser.uid);
    await updateDoc(userRef, {
      username,
      phoneNumber,
    });
    toast.success("Update Success!");
  } catch (error) {
    toast.error("Update Error!");
  }
};

export const updateUserAddress = async (inputData) => {
  const { houseNo, streetNo, village, commune, district, province } = inputData;
  try {
    const userRef = doc(dbFirestore, "users", auth.currentUser.uid);
    await updateDoc(userRef, {
      houseNo,
      streetNo,
      village,
      commune,
      district,
      province,
    });
    toast.success("Update Success!");
  } catch (error) {
    toast.error("Update Error!");
  }
};

export const updateUserPayment = async (inputData) => {
  const { cardName, cardNumber, cardExpDate } = inputData;
  try {
    const userRef = doc(dbFirestore, "users", auth.currentUser.uid);
    await updateDoc(userRef, {
      cardName,
      cardNumber,
      cardExpDate,
    });
    toast.success("Update Success!");
  } catch (error) {
    toast.success("Update Error!");
  }
};

export const deleteUser = async () => {
  const userRef = doc(dbFirestore, "users", auth.currentUser.uid);
  await deleteDoc(userRef);
  return true;
};

export const getUserOrderHistoryList = async (userId) => {
  try {
    const docRef = collection(dbFirestore, "orderHistory");
    const q = query(docRef, where("userId", "==", userId));
    const queryDocSnap = await getDocs(q);
    const list = [];
    if (queryDocSnap) {
      queryDocSnap.forEach((order) => {
        list.push({
          id: order.id,
          data: order.data(),
        });
      });
      return list;
    }
    return null;
  } catch (error) {
    console.log(error);
    toast.error("Can't Load Order History!");
  }
};

// export const getUserOrderHistoryItem = async () => {
//   try {
//     const docRef = collection(dbFirestore, "orderHistory");
//     const q = query(docRef, where("id", "==", auth.currentUser.uid));
//     const queryDocSnap = await getDocs(q);
//   } catch (error) {
//     toast.error("Error!");
//   }
// };
