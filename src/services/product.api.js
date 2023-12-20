import {
  doc,
  collection,
  getDocs,
  query,
  where,
  getDoc,
} from "firebase/firestore";
import { dbFirestore } from "../firebase.config";
// import { toast } from "react-toastify";

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
    const productRef = collection(dbFirestore, "product");
    const q = query(productRef, where("type", "==", type));
    const productDocSnap = await getDocs(q);
    const list = [];
    productDocSnap.forEach((item) =>
      list.push({ id: item.id, data: item.data() })
    );
    return list;
  } catch (error) {
    console.log(error);
  }
};

export const getProductByBrand = async (brand) => {
  try {
    const productRef = collection(dbFirestore, "product");
    const q = query(productRef, where("brand", "==", brand));
    const productDocSnap = await getDocs(q);
    const list = [];
    productDocSnap.forEach((item) =>
      list.push({ id: item.id, data: item.data() })
    );
    return list;
  } catch (error) {
    console.log(error);
  }
};
