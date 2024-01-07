import {
  signInWithEmailAndPassword,
  signOut,
  createUserWithEmailAndPassword,
  sendPasswordResetEmail,
  GoogleAuthProvider,
  signInWithPopup,
  onAuthStateChanged,
} from "firebase/auth";
import { auth, dbFirestore, storage } from "../firebase.config";
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
  onSnapshot,
} from "firebase/firestore";
import { toast } from "react-toastify";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";

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

export const createAccount = async (inputData) => {
  const { username, email, password, confirmPassword } = inputData;
  if (password.length <= 6) {
    toast.error("Password to be more than 6 characters!");
    return false;
  }
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
        toast.success("Successfully Registered!");
        return true;
      } else {
        toast.error("Email already exist!");
      }
    } catch (error) {
      toast.error("Something Went Wrong!");
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
      toast.success("Successfully Sent!");
    } catch (error) {
      toast.error("Something Went Wrong!");
    }
  } else {
    toast.error("Email not exist!");
  }
};

// export const resetPassword = async (email) => {
//   const docRef = collection(dbFirestore, "users");
//   const q = query(docRef, where("email", "==", email));
//   const querySnapshot = await getDocs(q);

//   if (querySnapshot.size !== 0) {
//     const user = auth.currentUser;
//     if (user && user.email === email && user.emailVerified) {
//       try {
//         await sendPasswordResetEmail(auth, email);
//         toast.success("Password reset email sent successfully!");
//       } catch (error) {
//         toast.error(
//           "Something went wrong while sending the password reset email."
//         );
//       }
//     } else {
//       toast.error(
//         "Please ensure your email is verified and matches the logged-in user."
//       );
//     }
//   } else {
//     toast.error("Email does not exist in our records.");
//   }
// };

export const signInUser = async (inputData) => {
  const { email, password } = inputData;
  try {
    await signInWithEmailAndPassword(auth, email, password);
    toast.success("Login Successfully!");
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
    toast.success("Login Successfully!");
  }
  return true;
};

export const signOutUser = () => {
  try {
    signOut(auth);
    toast.success("Log Out Successfully!");
    return true;
  } catch (error) {
    console.log(error);
  }
};

export const updateUserProfile = async (username, phoneNumber, img) => {
  try {
    const userData = getUser(auth.currentUser.uid);
    const userRef = doc(dbFirestore, "users", auth.currentUser.uid);
    if (username !== userData.username) {
      await updateDoc(userRef, {
        username,
      });
    }
    if (phoneNumber !== userData.phoneNumber) {
      await updateDoc(userRef, {
        phoneNumber,
      });
    }
    const existingProfileImg = userData.profileImg || null;
    if (img) {
      const imageRef = ref(storage, `profile-image/${auth.currentUser.uid}`);
      if (!existingProfileImg || img !== existingProfileImg) {
        await uploadBytes(imageRef, img);
        const profileImg = await getDownloadURL(imageRef);
        await updateDoc(userRef, {
          profileImg,
        });
      }
    }
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

export const updatePhoneNumber = async (phoneNumber) => {};

export const deleteUser = async () => {
  const userRef = doc(dbFirestore, "users", auth.currentUser.uid);
  await deleteDoc(userRef);
  return true;
};

export const getUser = (callback) => {
  try {
    const userRef = doc(dbFirestore, "users", auth.currentUser.uid);
    const unsubscribe = onSnapshot(userRef, (user) => {
      if (user.exists()) {
        const userData = user.data();
        callback(userData);
      }
    });
    return unsubscribe;
  } catch (error) {
    console.log(error);
  }
};

export const getUserOrderList = (callback) => {
  try {
    const docRef = collection(dbFirestore, "order");
    const q = query(docRef, where("userId", "==", auth.currentUser.uid));
    const unsubscirbe = onSnapshot(q, (orderSnap) => {
      const list = [];
      orderSnap.forEach((order) => {
        list.push({
          id: order.id,
          data: order.data(),
        });
      });
      callback(list);
    });
    return unsubscirbe;
  } catch (error) {
    console.log(error);
    toast.error("Can't Load Order!");
  }
};
