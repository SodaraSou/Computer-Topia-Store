import {
  doc,
  setDoc,
  getDoc,
  onSnapshot,
  collection,
  addDoc,
  serverTimestamp,
  updateDoc,
  deleteDoc,
} from "firebase/firestore";
import { auth, dbFirestore } from "../firebase.config";
import { toast } from "react-toastify";

export const checkStock = async (productId) => {
  const productRef = doc(dbFirestore, "product", productId);
  const productRaw = await getDoc(productRef);
  const product = productRaw.data();
  return product.stock;
};

export const addItemToCart = async (
  productId,
  productImg,
  model,
  price,
  quantity
) => {
  try {
    const userRef = doc(dbFirestore, "cart", auth.currentUser.uid);
    const cartSnapshot = await getDoc(userRef);
    const currentCartData = cartSnapshot.exists()
      ? cartSnapshot.data()
      : { items: [], totalPrice: 0 };
    let isItemInCart = false;
    const updatedItems = currentCartData.items.map((item) => {
      if (item.productId === productId) {
        isItemInCart = true;
        const updatedQuantity = item.quantity + quantity;
        const updatedSubTotal = price * updatedQuantity;
        return {
          ...item,
          quantity: updatedQuantity,
          subTotal: updatedSubTotal,
        };
      }
      return item;
    });
    if (!isItemInCart) {
      const subTotal = price * quantity;
      updatedItems.push({
        productId,
        productImg,
        model,
        price,
        quantity,
        subTotal,
      });
    }
    const stock = await checkStock(productId);
    updatedItems.forEach(async (item) => {
      if (stock < item.quantity) {
        toast.error("Exceeds Available Stock!");
        return;
      } else {
        const totalPrice = updatedItems.reduce(
          (total, item) => total + item.subTotal,
          0
        );
        await setDoc(userRef, { items: updatedItems, totalPrice });
        toast.success("Add to Cart Success!");
      }
    });
  } catch (error) {
    console.log(error);
    toast.error("Something Went Wrong!");
  }
};

export const removeItemFromCart = async (
  productId,
  listProduct,
  quantity,
  price,
  prevTotalPrice
) => {
  const userRef = doc(dbFirestore, "cart", auth.currentUser.uid);
  const filteredItem = listProduct.filter(
    (item) => item.productId !== productId
  );
  const removeItemTotalPrice = price * quantity;
  let totalPrice = 0;
  if (listProduct.length === 0) {
    totalPrice = 0;
  } else {
    totalPrice = prevTotalPrice - removeItemTotalPrice;
  }
  try {
    await setDoc(userRef, { items: filteredItem, totalPrice });
  } catch (error) {
    console.log(error);
  }
};

export const getListItemFromCart = async (callback) => {
  const userRef = doc(dbFirestore, "cart", auth.currentUser.uid);
  const unsubscribe = onSnapshot(
    userRef,
    (docSnap) => {
      if (docSnap.exists()) {
        callback(docSnap.data());
      }
    },
    (error) => {
      console.log(error);
    }
  );
  return unsubscribe;
};

export const checkout = async (checkoutList, checkoutPrice) => {
  try {
    const orderRef = collection(dbFirestore, "order");
    await addDoc(orderRef, {
      userId: auth.currentUser.uid,
      items: checkoutList,
      checkoutPrice,
      orderStatus: "Pending Approval",
      orderAt: serverTimestamp(),
    });
    const orderRefToRemove = doc(dbFirestore, "cart", auth.currentUser.uid);
    await setDoc(orderRefToRemove, { items: [], totalPrice: 0 });
    checkoutList.forEach(async (item) => {
      const productRef = doc(dbFirestore, "product", item.productId);
      const productRaw = await getDoc(productRef);
      const product = productRaw.data();
      const newStock = product.stock - item.quantity;
      await updateDoc(productRef, {
        stock: newStock,
      });
    });
    toast.success("Checkout Complete!");
    return true;
  } catch (error) {
    console.log(error);
    toast.error("Something Went Wrong!");
  }
};

export const recieveProduct = async (
  productList,
  orderId,
  checkoutPrice,
  orderAt
) => {
  try {
    const orderHistoryRef = doc(dbFirestore, "orderHistory", orderId);
    await setDoc(orderHistoryRef, {
      userId: auth.currentUser.uid,
      items: productList,
      checkoutPrice,
      orderStatus: "Complete",
      orderAt: orderAt,
    });
    await deleteDoc(doc(dbFirestore, "order", orderId));
    toast.success("Order Complete!");
  } catch (error) {
    console.log(error);
    toast.error("Something Went Wrong!");
  }
};
