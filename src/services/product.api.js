import { doc, setDoc, collection, addDoc } from "firebase/firestore";
import { dbFirestore } from "../firebase.config";
import { toast } from "react-toastify";

export const addProduct = async (inputData) => {
  const { type } = inputData;
  try {
    const docRef = collection(dbFirestore, type);
    await addDoc(docRef, inputData);
    toast.success("Successfully Register!");
    return doc;
  } catch (error) {
    console.log(error);
    toast.error("Failed!");
  }
};
