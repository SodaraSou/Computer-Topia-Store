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
import { formatDate } from "../../utils/helpers";

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
  const today = new Date();
  const currentDay = today.getDay();
  const daysSinceMonday = currentDay === 0 ? 6 : currentDay - 1;
  const oneWeekAgoMonday = formatDate(
    new Date(today.getTime() - daysSinceMonday * 24 * 60 * 60 * 1000)
  );
  const weeklyOrders = orderList.filter((order) => {
    const orderDate = formatDate(order.data.orderAt.toDate());
    return orderDate >= oneWeekAgoMonday;
  });
  const totalOrdered = weeklyOrders.length;
  const totalRevenue = weeklyOrders.reduce((sum, order) => {
    return (sum += order.data.checkoutPrice);
  }, 0);
  const totalIncome = weeklyOrders.reduce((sum, order) => {
    return (sum += order.data.totalIncome);
  }, 0);
  console.log(totalIncome);
  return { totalRevenue, totalOrdered, totalIncome };
};

// export const calcTotalOrderMonthly = (orderList) => {
//   const monthlyOrders = {};
//   orderList.forEach((order) => {
//     const orderDate = new Date(order.data.orderAt.toDate());
//     const year = orderDate.getFullYear();
//     const month = orderDate.getMonth() + 1;
//     const monthKey = `${year}-${month < 10 ? "0" : ""}${month}`;
//     if (!monthlyOrders[monthKey]) {
//       monthlyOrders[monthKey] = 0;
//     }
//     monthlyOrders[monthKey]++;
//   });

//   return monthlyOrders;
// };

// export const calcTotalOrderMonthly = (orderList) => {
//   const monthlyOrders = {};

//   // Filter orderList to consider only orders from the year 2024
//   const orders2024 = orderList.filter((order) => {
//     const orderDate = new Date(order.data.orderAt.toDate());
//     return orderDate.getFullYear() === 2024;
//   });

//   orders2024.forEach((order) => {
//     const orderDate = new Date(order.data.orderAt.toDate());
//     const year = orderDate.getFullYear();
//     const month = orderDate.getMonth() + 1;
//     const monthKey = `${year}-${month < 10 ? "0" : ""}${month}`;

//     // Initialize the month if it doesn't exist in the object
//     if (!monthlyOrders[monthKey]) {
//       monthlyOrders[monthKey] = 0;
//     }
//     monthlyOrders[monthKey]++;
//   });

//   // Fill in missing months with zero values for the year 2024
//   for (let i = 1; i <= 12; i++) {
//     const monthKey = `2024-${i < 10 ? "0" : ""}${i}`;
//     if (!monthlyOrders[monthKey]) {
//       monthlyOrders[monthKey] = 0;
//     }
//   }

//   return monthlyOrders;
// };

export const calcTotalOrderMonthly = (orderList) => {
  const monthlyOrders = {
    January: 0,
    February: 0,
    March: 0,
    April: 0,
    May: 0,
    June: 0,
    July: 0,
    August: 0,
    September: 0,
    October: 0,
    November: 0,
    December: 0,
  };

  const orders2024 = orderList.filter((order) => {
    const orderDate = new Date(order.data.orderAt.toDate());
    return orderDate.getFullYear() === 2024;
  });

  orders2024.forEach((order) => {
    const orderDate = new Date(order.data.orderAt.toDate());
    const monthNames = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    const monthName = monthNames[orderDate.getMonth()];
    monthlyOrders[monthName]++;
  });
  return monthlyOrders;
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
