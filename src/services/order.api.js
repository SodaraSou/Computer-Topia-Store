import { addDoc, doc } from "firebase/firestore";
import { auth, dbFirestore } from "../firebase.config";

export const addItemToCart = async (itemId) => {
  try {
    const userRef = doc(dbFirestore, "cart", auth.currentUser.uid);
    await addDoc(userRef, itemId);
  } catch (error) {
    console.log(error);
  }
};
export const getListItemFromCart = async () => {};
export const getItemFromCart = async () => {};

export const addItemToOrder = async () => {};
