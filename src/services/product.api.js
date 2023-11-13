import {
  doc,
  collection,
  addDoc,
  getDocs,
  query,
  where,
  getDoc,
} from "firebase/firestore";
import { dbFirestore } from "../firebase.config";
import { toast } from "react-toastify";

export const getAllProduct = async () => {
  try {
    const docRef = collection(dbFirestore, "product");
    const docSnap = await getDocs(docRef);
    const list = [];
    docSnap.forEach((item) =>
      list.push({
        id: item.id,
        data: item.data(),
      })
    );
    return list;
  } catch (error) {
    console.log(error);
  }
};

export const getProductById = async (productId) => {
  try {
    const productRef = doc(dbFirestore, "product", productId);
    const productSnap = await getDoc(productRef);
    if (productSnap.exists()) {
      return productSnap.data();
    }
  } catch (error) {
    console.log(error);
  }
};

export const getProductByType = async (type) => {
  try {
    const prodRef = collection(dbFirestore, "product");
    const q = query(prodRef, where("type", "==", type));
    const prodSnap = await getDocs(q);
  } catch (error) {
    console.log(error);
  }
};
export const getProductByBrand = async () => {};
export const getProductByPrice = async () => {};

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
