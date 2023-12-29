import {
  collection,
  deleteDoc,
  doc,
  getDoc,
  onSnapshot,
} from "firebase/firestore";
import { signInWithEmailAndPassword, signOut } from "firebase/auth";
import { ref } from "firebase/storage";
import { auth, dbFirestore, storage } from "../../firebase.config";
import { toast } from "react-toastify";

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

export const getAllUser = (callback) => {
  const userCollRef = collection(dbFirestore, "users");
  const unsubscribe = onSnapshot(
    userCollRef,
    (docSnap) => {
      const list = [];
      docSnap.forEach((item) =>
        list.push({
          id: item.id,
          data: item.data(),
        })
      );
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
