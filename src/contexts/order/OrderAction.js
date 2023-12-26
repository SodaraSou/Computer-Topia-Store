import {
  collection,
  doc,
  query,
  orderBy,
  onSnapshot,
  updateDoc,
} from "firebase/firestore";
import { dbFirestore } from "../../firebase.config";
import { toast } from "react-toastify";

export const getOrderList = (callback) => {
  const orderRef = collection(dbFirestore, "order");
  const orderQuery = query(orderRef, orderBy("orderAt", "desc"));
  const unsubscribe = onSnapshot(
    orderQuery,
    (docSnap) => {
      const list = [];
      docSnap.forEach((order) =>
        list.push({
          id: order.id,
          data: order.data(),
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

export const getCompletedOrderList = (callback) => {
  const orderRef = collection(dbFirestore, "orderHistory");
  const unsubscribe = onSnapshot(
    orderRef,
    (docSnap) => {
      const list = [];
      docSnap.forEach((order) =>
        list.push({
          id: order.id,
          data: order.data(),
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

export const changeOrderStatus = async (orderId, order, orderStatus) => {
  const orderRef = doc(dbFirestore, "order", orderId);
  try {
    await updateDoc(orderRef, {
      ...order,
      orderStatus,
    });
  } catch (error) {
    console.log(error);
    toast.error("Error");
  }
};

export const calcTotalStatus = (orderList) => {
  const totalOrdered = orderList.length;
  const totalMoney = orderList.reduce((sum, order) => {
    return (sum += order.data.checkoutPrice);
  }, 0);
  return { totalMoney, totalOrdered };
};

export const sortOrder = (orderList, type) => {
  if (type === "Highest Price") {
    const sortedList = orderList.slice().sort((a, b) => {
      return b.data.checkoutPrice - a.data.checkoutPrice;
    });
    return sortedList;
  } else if (type === "Lowest Price") {
    const sortedList = orderList.slice().sort((a, b) => {
      return a.data.checkoutPrice - b.data.checkoutPrice;
    });
    return sortedList;
  } else {
    const sortedList = orderList.filter(
      (order) => order.data.orderStatus === type
    );
    return sortedList;
  }
};
