import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBoxesPacking } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
// import OrderItem from "./OrderItem";
import Pagination from "../../../../ui/shared/Pagination";

function OrderHistory({ orderList }) {
  const [orderHistory, setOrderHistory] = useState([]);

  useEffect(() => {
    const completedOrders = orderList.filter(
      (order) =>
        order.data.orderStatus === "Complete" ||
        order.data.orderStatus === "Cancelled"
    );
    setOrderHistory(completedOrders);
  }, [orderList]);
  return (
    <section className="w-full border border-gray-200 shadow dark:bg-gray-800 dark:border-gray-700 p-4 md:p-10">
      <h1 className="text-2xl md:text-4xl font-bold mb-4">Order History</h1>
      <div className="h-[1px] bg-[#D9D9D9] mb-4"></div>
      {orderHistory.length === 0 ? (
        <div className="flex flex-col justify-center items-center gap-4 p-10">
          <FontAwesomeIcon
            icon={faBoxesPacking}
            className="text-[#5E17EB] w-10 h-10"
          />
          <p className="text-xl md:text-2xl font-semibold">No Orders History</p>
          <Link
            to="/"
            className="rounded-xl bg-[#5E17EB] text-white px-4 md:px-2 py-2 md:h-10 md:w-28 font-semibold text-center"
          >
            Shop Now
          </Link>
        </div>
      ) : (
        // <div className="flex flex-col gap-6">
        //   {orderHistory.map((item) => (
        //     <OrderItem item={item} key={item.id} />
        //   ))}
        // </div>
        <Pagination listType="UserOrder" listItem={orderHistory} />
      )}
    </section>
  );
}

export default OrderHistory;
