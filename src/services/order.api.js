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
import { getUserId } from "./user.api";
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
  buyInPrice,
  price,
  quantity
) => {
  try {
    const userId = await getUserId();
    if (userId !== null) {
      const userRef = doc(dbFirestore, "cart", auth.currentUser.uid);
      const cartSnapshot = await getDoc(userRef);
      const currentCartData = cartSnapshot.exists()
        ? cartSnapshot.data()
        : { items: [], totalPrice: 0, totalIncome: 0 };

      let totalQuantityInCart = 0;

      currentCartData.items.forEach((item) => {
        if (item.productId === productId) {
          totalQuantityInCart += item.quantity;
        }
      });

      totalQuantityInCart += quantity;

      const stock = await checkStock(productId);

      if (totalQuantityInCart > stock) {
        toast.error("Exceeds Available Stock!");
        return;
      }

      let isItemInCart = false;
      const updatedItems = currentCartData.items.map((item) => {
        if (item.productId === productId) {
          isItemInCart = true;
          const updatedQuantity = item.quantity + quantity;
          const updatedSubTotal = price * updatedQuantity;
          const updateTest = buyInPrice * updatedQuantity;
          return {
            ...item,
            quantity: updatedQuantity,
            subTotal: updatedSubTotal,
            test: updateTest,
          };
        }
        return item;
      });
      if (!isItemInCart) {
        const subTotal = price * quantity;
        const subBuyInTotal = buyInPrice * quantity;
        updatedItems.push({
          productId,
          productImg,
          model,
          buyInPrice,
          price,
          quantity,
          subTotal,
          subBuyInTotal,
        });
      }
      const totalPrice = updatedItems.reduce(
        (total, item) => total + item.subTotal,
        0
      );
      await setDoc(userRef, {
        items: updatedItems,
        totalPrice,
      });
      toast.success("Add to Cart Success!");
    } else {
      toast.error("Sign In Required!");
      return true;
    }
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
  const userId = auth.currentUser ? auth.currentUser.uid : await getUserId();
  if (userId !== null) {
    const userRef = doc(dbFirestore, "cart", userId);
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
  }
};

export const checkout = async (
  checkoutList,
  checkoutPrice,
  address,
  username,
  phoneNumber
) => {
  try {
    const orderRef = collection(dbFirestore, "order");
    const totalIncome = checkoutList.reduce(
      (total, item) => total + (item.subTotal - item.subBuyInTotal),
      0
    );
    await addDoc(orderRef, {
      userId: auth.currentUser.uid,
      items: checkoutList,
      checkoutPrice,
      totalIncome,
      orderStatus: "Pending",
      orderAt: serverTimestamp(),
      deliveryBy: "",
      trackingCode: "",
      ...address,
      username,
      phoneNumber,
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
    const orderRef = doc(dbFirestore, "order", orderId);
    await updateDoc(orderRef, {
      userId: auth.currentUser.uid,
      items: productList,
      checkoutPrice,
      orderStatus: "Complete",
      orderAt: orderAt,
    });
    toast.success("Order Complete!");
  } catch (error) {
    console.log(error);
    toast.error("Something Went Wrong!");
  }
};
