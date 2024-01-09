import {
  collection,
  doc,
  query,
  orderBy,
  onSnapshot,
  updateDoc,
  addDoc,
  getDoc,
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

export const updateDelivery = async (delivery, orderId) => {
  try {
    const orderRef = doc(dbFirestore, "order", orderId);
    await updateDoc(orderRef, {
      deliveryBy: delivery.deliveryBy,
      trackingCode: delivery.trackingCode,
    });
    return true;
  } catch (error) {
    console.log(error);
    toast.error("Something Went Wrong!");
  }
};

export const changeOrderStatus = async (orderId, order, orderStatus) => {
  const orderRef = doc(dbFirestore, "order", orderId);
  // const cancelOrderRef = collection(dbFirestore, "cancelOrder");
  try {
    const items = order.items;

    items.forEach(async (item) => {
      const { productId, quantity } = item;
      const productRef = doc(dbFirestore, "product", productId);
      const productSnapshot = await getDoc(productRef);
      const productData = productSnapshot.data();
      const newStock = productData.stock + quantity;
      await updateDoc(productRef, { stock: newStock });
    });
    // await addDoc(cancelOrderRef, {
    //   ...order,
    //   orderStatus,
    // });
    // await deleteDoc(orderRef);
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
  const currentMonth = today.getMonth();
  const currentYear = today.getFullYear();

  const firstDayOfMonth = new Date(currentYear, currentMonth, 1);
  const lastDayOfMonth = new Date(currentYear, currentMonth + 1, 0);

  const monthlyOrders = orderList.filter((order) => {
    const orderDate = order.data.orderAt.toDate();
    return (
      orderDate >= firstDayOfMonth &&
      orderDate <= lastDayOfMonth &&
      order.data.orderStatus !== "Cancelled"
    );
  });

  const totalOrdered = monthlyOrders.length;
  const totalRevenue = monthlyOrders.reduce((sum, order) => {
    return (sum += order.data.checkoutPrice);
  }, 0);
  const totalIncome = monthlyOrders.reduce((sum, order) => {
    return (sum += order.data.totalIncome);
  }, 0);

  return { totalRevenue, totalOrdered, totalIncome };
};

const d = new Date();
const month = d.getMonth();
const year = d.getFullYear();

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
    return (
      orderDate.getFullYear() === year && order.data.orderStatus !== "Cancelled"
    );
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

export const calcTotalOrderWeeklyInMonth = (orderList) => {
  const weeksInMonth = {
    "Week 1": 0,
    "Week 2": 0,
    "Week 3": 0,
    "Week 4": 0,
  };
  const ordersInMonth = orderList.filter((order) => {
    const orderDate = new Date(order.data.orderAt.toDate());
    return (
      orderDate.getFullYear() === year &&
      orderDate.getMonth() === month &&
      order.data.orderStatus !== "Cancelled"
    );
  });
  const firstDayOfMonth = new Date(year, month, 1).getDay();
  ordersInMonth.forEach((order) => {
    const orderDate = new Date(order.data.orderAt.toDate());
    const weekNumber = Math.floor(
      (orderDate.getDate() + firstDayOfMonth - 1) / 7
    );
    weeksInMonth[`Week ${weekNumber + 1}`]++;
  });
  return weeksInMonth;
};

export const calcTotalOrderDailyInMonth = (orderList) => {
  // const daysInMonth = new Date(year, month + 1, 0).getDate();
  const d = new Date().getDate();
  const ordersInMonth = {};

  for (let day = 1; day <= d; day++) {
    ordersInMonth[`${day}`] = 0;
  }

  const filteredOrders = orderList.filter((order) => {
    const orderDate = new Date(order.data.orderAt.toDate());
    return (
      orderDate.getFullYear() === year &&
      orderDate.getMonth() === month &&
      order.data.orderStatus !== "Cancelled"
    );
  });

  filteredOrders.forEach((order) => {
    const orderDate = new Date(order.data.orderAt.toDate());
    const dayOfMonth = orderDate.getDate();
    ordersInMonth[`${dayOfMonth}`]++;
  });
  return ordersInMonth;
};

export const calcTotalRevenueDaily = (orderList) => {
  const d = new Date().getDate();
  const revenueDaily = {};

  for (let day = 1; day <= d; day++) {
    revenueDaily[`${day}`] = 0;
  }

  const filteredOrders = orderList.filter((order) => {
    const orderDate = new Date(order.data.orderAt.toDate());
    return (
      orderDate.getFullYear() === year &&
      orderDate.getMonth() === month &&
      order.data.orderStatus !== "Cancelled"
    );
  });

  filteredOrders.forEach((order) => {
    const orderDate = new Date(order.data.orderAt.toDate());
    const dayOfMonth = orderDate.getDate();
    const orderRevenue = order.data.checkoutPrice;
    revenueDaily[`${dayOfMonth}`] += orderRevenue;
  });
  return revenueDaily;
};

export const calcTotalRevenueWeekly = (orderList) => {
  const weeklyRevenue = {
    "Week 1": 0,
    "Week 2": 0,
    "Week 3": 0,
    "Week 4": 0,
  };
  const ordersInMonth = orderList.filter((order) => {
    const orderDate = new Date(order.data.orderAt.toDate());
    return (
      orderDate.getFullYear() === year &&
      orderDate.getMonth() === month &&
      order.data.orderStatus !== "Cancelled"
    );
  });
  const firstDayOfMonth = new Date(year, month, 1).getDay();
  ordersInMonth.forEach((order) => {
    const orderDate = new Date(order.data.orderAt.toDate());
    const weekNumber = Math.floor(
      (orderDate.getDate() + firstDayOfMonth - 1) / 7
    );
    const orderRevenue = order.data.checkoutPrice;
    weeklyRevenue[`Week ${weekNumber + 1}`] += orderRevenue;
  });
  return weeklyRevenue;
};

export const calcTotalRevenueMonthly = (orderList) => {
  const weeklyRevenue = {
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
  const ordersInYear = orderList.filter((order) => {
    const orderDate = new Date(order.data.orderAt.toDate());
    return (
      orderDate.getFullYear() === year && order.data.orderStatus !== "Cancelled"
    );
  });
  ordersInYear.forEach((order) => {
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
    const orderRevenue = order.data.checkoutPrice;
    weeklyRevenue[monthName] += orderRevenue;
  });
  return weeklyRevenue;
};

export const calcTotalIncomeDaily = (orderList) => {
  const d = new Date().getDate();
  const incomeDaily = {};

  for (let day = 1; day <= d; day++) {
    incomeDaily[`${day}`] = 0;
  }

  const filteredOrders = orderList.filter((order) => {
    const orderDate = new Date(order.data.orderAt.toDate());
    return (
      orderDate.getFullYear() === year &&
      orderDate.getMonth() === month &&
      order.data.orderStatus !== "Cancelled"
    );
  });

  filteredOrders.forEach((order) => {
    const orderDate = new Date(order.data.orderAt.toDate());
    const dayOfMonth = orderDate.getDate();
    const orderIncome = order.data.totalIncome;
    incomeDaily[`${dayOfMonth}`] += orderIncome;
  });
  return incomeDaily;
};

export const calcTotalIncomeWeekly = (orderList) => {
  const weeklyIncome = {
    "Week 1": 0,
    "Week 2": 0,
    "Week 3": 0,
    "Week 4": 0,
  };
  const ordersInMonth = orderList.filter((order) => {
    const orderDate = new Date(order.data.orderAt.toDate());
    return (
      orderDate.getFullYear() === year &&
      orderDate.getMonth() === month &&
      order.data.orderStatus !== "Cancelled"
    );
  });
  const firstDayOfMonth = new Date(year, month, 1).getDay();
  ordersInMonth.forEach((order) => {
    const orderDate = new Date(order.data.orderAt.toDate());
    const weekNumber = Math.floor(
      (orderDate.getDate() + firstDayOfMonth - 1) / 7
    );
    const orderIncome = order.data.totalIncome;
    weeklyIncome[`Week ${weekNumber + 1}`] += orderIncome;
  });
  return weeklyIncome;
};

export const calcTotalIncomeMonthly = (orderList) => {
  const weeklyRevenue = {
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
  const ordersInYear = orderList.filter((order) => {
    const orderDate = new Date(order.data.orderAt.toDate());
    return (
      orderDate.getFullYear() === year && order.data.orderStatus !== "Cancelled"
    );
  });
  ordersInYear.forEach((order) => {
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
    const orderRevenue = order.data.totalIncome;
    weeklyRevenue[monthName] += orderRevenue;
  });
  return weeklyRevenue;
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
