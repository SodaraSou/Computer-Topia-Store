import { useContext, useEffect, useState } from "react";
import {
  calcTotalStatus,
  getCompletedOrderList,
  getOrderList,
} from "../../../contexts/order/OrderAction";
import OrderContext from "../../../contexts/order/OrderContext";
import OrderList from "./components/OrderList";
import Spinner from "../../components/Spinner";
import { formatCurrency } from "../../../utils/helpers";

function Order() {
  const { dispatch, loading, orderList, order, orderId, openOrder } =
    useContext(OrderContext);
  const [totalMoney, setTotalMoney] = useState();
  const [totalOrder, setTotalOrder] = useState();
  useEffect(() => {
    dispatch({ type: "SET_LOADING" });
    dispatch({ type: "SET_MODAL", payload: false });
    const unsubscribeOrderList = getOrderList((data) => {
      dispatch({ type: "SET_ORDER_LIST", payload: data });
      const { totalMoney, totalOrdered } = calcTotalStatus(data);
      setTotalMoney(totalMoney);
      setTotalOrder(totalOrdered);
    });
    const unsubscribeOrderHistoryList = getCompletedOrderList((data) => {
      dispatch({ type: "SET_ORDER_HISTORY_LIST", payload: data });
    });
    return () => {
      unsubscribeOrderList();
      unsubscribeOrderHistoryList();
    };
  }, [dispatch]);
  if (loading) {
    return <Spinner />;
  }
  return (
    <section className="p-4 md:p-10">
      <div className="flex justify-between mb-4 md:mb-10">
        <h1 className="text-2xl md:text-4xl font-bold">Order</h1>
      </div>
      {openOrder && (
        <section className="mb-4 md:mb-10 flex flex-col xl:flex-row gap-4 md:gap-10">
          <div className="w-full xl:w-1/2 p-4 md:p-10 border flex flex-col gap-4">
            <h2 className="text-xl font-bold">Order Id: #{orderId}</h2>
            <div className="h-[1px] w-full bg-[#D9D9D9]"></div>
            {order.items.map((item, index) => (
              <div key={index} className="flex justify-between items-center">
                <div className="flex items-center">
                  <img
                    src={item.productImg ? item.productImg : StockImg}
                    alt="stock_img"
                    className="w-[100px] h-[100px] mr-4"
                  />
                  <span className="w-[200px] md:w-auto">
                    <h2 className="text-lg font-semibold">{item.model}</h2>
                    <p className="text-sm">
                      Price: {formatCurrency(item.price)}
                    </p>
                  </span>
                </div>
                <div className="ml-4">
                  <h2 className="text-lg font-semibold">
                    {formatCurrency(item.subTotal)}
                  </h2>
                  <p className="text-sm">Quantity: {item.quantity}</p>
                </div>
              </div>
            ))}
            <div className="h-[1px] w-full bg-[#D9D9D9]"></div>
            <p className="font-semibold flex justify-end">
              Total: {formatCurrency(order.checkoutPrice)}
            </p>
          </div>
          <div className="w-full xl:w-1/2 p-4 md:p-10 border flex flex-col gap-4">
            <h2 className="text-xl font-bold">
              Shipping Status:{" "}
              <span
                className={`font-semibold ${
                  (order.orderStatus === "Approved" && "text-green-500") ||
                  (order.orderStatus === "Shipping" && "text-blue-500") ||
                  (order.orderStatus === "Cancelled" && "text-red-500") ||
                  (order.orderStatus === "Pending Approval" &&
                    "text-orange-500")
                }`}
              >
                {order.orderStatus}
              </span>
            </h2>
          </div>
        </section>
      )}
      <section>
        <OrderList orderList={orderList} listTitle="Order List" />
      </section>
    </section>
  );
}

export default Order;
