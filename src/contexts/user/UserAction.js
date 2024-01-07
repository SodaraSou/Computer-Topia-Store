import {
  collection,
  deleteDoc,
  doc,
  getDoc,
  onSnapshot,
  setDoc,
  getDocs,
  where,
  query,
} from "firebase/firestore";
import {
  createUserWithEmailAndPassword,
  sendEmailVerification,
} from "firebase/auth";
import { ref, deleteObject } from "firebase/storage";
import { auth, dbFirestore, storage } from "../../firebase.config";
import { toast } from "react-toastify";

export const getAllUser = (callback) => {
  const userCollRef = collection(dbFirestore, "users");
  const unsubscribe = onSnapshot(
    userCollRef,
    (docSnap) => {
      const list = [];
      docSnap.forEach((item) => {
        // if (item.data().role !== "admin") {
        list.push({
          id: item.id,
          data: item.data(),
        });
        // }
      });
      callback(list);
    },
    (error) => {
      console.log(error);
      toast.error("Something Went Wrong!");
    }
  );
  return unsubscribe;
};

export const getUser = async (userId) => {
  try {
    const userRef = doc(dbFirestore, "users", userId);
    const docSnap = await getDoc(userRef);
    return docSnap.data();
  } catch (error) {
    console.log(error);
  }
};

export const deleteUser = async (userId) => {
  try {
    const user = await getUser(userId);
    if (user.profileImg) {
      const profileImgRef = ref(storage, `profile-image/${userId}`);
      await deleteObject(profileImgRef);
    }
    const userRef = doc(dbFirestore, "users", userId);
    await deleteDoc(userRef);
    toast.success("Delete User Successfully!");
  } catch (error) {
    toast.error("Something Went Wrong!");
    console.log(error);
  }
};

export const sortUser = (orderList) => {
  if (orderList !== null) {
    const sortedList = [...orderList].sort((a, b) =>
      a.data.username.toLowerCase().localeCompare(b.data.username.toLowerCase())
    );
    return sortedList;
  }
  return null;
};

export const createAdminAcc = async (inputData) => {
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
          profileImg: "",
          role: "admin",
        });
        // await sendEmailVerification(user);
        // toast.success(
        //   "Successfully Registered! Please check your email for verification."
        // );
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
