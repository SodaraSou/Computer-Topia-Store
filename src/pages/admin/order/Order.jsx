import { useContext, useEffect } from "react";
// import {
//   calcTotalStatus,
//   getOrderList,
// } from "../../../contexts/order/OrderAction";
import { formatCurrency } from "../../../utils/helpers";
import OrderContext from "../../../contexts/order/OrderContext";
import OrderList from "./components/OrderList";
import Input from "../../../ui/shared/Input";
import Modal from "../../../ui/shared/Modal";
// import Spinner from "../../../ui/Spinner";

function Order() {
  const { orderList, order, orderId, openOrder, orderDispatch } =
    useContext(OrderContext);
  useEffect(() => {
    orderDispatch({ type: "SET_MODAL", payload: false });
  }, []);
  const handleModal = () => {
    orderDispatch({ type: "SET_MODAL", payload: false });
  };
  // useEffect(() => {
  //   orderDispatch({ type: "SET_LOADING" });
  //   orderDispatch({ type: "SET_MODAL", payload: false });
  //   const unsubscribeOrderList = getOrderList((data) => {
  //     orderDispatch({ type: "SET_ORDER_LIST", payload: data });
  //     const { totalMoney, totalOrdered } = calcTotalStatus(data);
  //     orderDispatch({ type: "SET_TOTAL_ORDER", payload: totalOrdered });
  //   });
  //   return () => {
  //     unsubscribeOrderList();
  //   };
  // }, [orderDispatch]);
  // if (loading) {
  //   return <Spinner fullScreenSpinner={true} />;
  // }
  return (
    <section className="p-4 md:p-10">
      <div className="flex justify-between mb-4 md:mb-10">
        <button
          onClick={() => orderDispatch({ type: "SET_MODAL", payload: false })}
          className="text-2xl md:text-4xl font-bold"
        >
          Order
        </button>
      </div>
      {openOrder && (
        <Modal handleModal={handleModal}>
          <section className="max-w-7xl flex flex-col xl:flex-row gap-4 md:gap-10">
            <div className="w-full xl:w-1/2 p-4 md:p-10 border flex flex-col gap-4">
              <h2 className="text-xl font-bold">
                Order Id: <span className="text-blue-500">{orderId}</span>
              </h2>
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
                Order Status:{" "}
                <span
                  className={`font-semibold ${
                    (order.orderStatus === "Approved" && "text-green-500") ||
                    (order.orderStatus === "Shipping" && "text-blue-500") ||
                    (order.orderStatus === "Cancelled" && "text-red-500") ||
                    (order.orderStatus === "Pending" && "text-orange-500")
                  }`}
                >
                  {order.orderStatus}
                </span>
              </h2>
              <div className="grid grid-cols-2 gap-4">
                <Input title="Delivery by" />
                <Input title="Tracking Code" />
              </div>
              <div>
                <p>Tracking</p>
                <ul className="">
                  <li className="text-sm">
                    For VET Express, customers are required to download the VET
                    Express app to track the package.
                  </li>
                  <li className="text-sm">
                    For J&T, go to{" "}
                    <a href=" https://www.jtexpresskh.com/trajectoryQuery?waybillNo=&flag=1">
                      link here
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </section>
        </Modal>
      )}
      {/* {openOrder && (
        <section className="mb-4 md:mb-10 flex flex-col xl:flex-row gap-4 md:gap-10">
          <div className="w-full xl:w-1/2 p-4 md:p-10 border flex flex-col gap-4">
            <h2 className="text-xl font-bold">
              Order Id: <span className="text-blue-500">{orderId}</span>
            </h2>
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
              Order Status:{" "}
              <span
                className={`font-semibold ${
                  (order.orderStatus === "Approved" && "text-green-500") ||
                  (order.orderStatus === "Shipping" && "text-blue-500") ||
                  (order.orderStatus === "Cancelled" && "text-red-500") ||
                  (order.orderStatus === "Pending" && "text-orange-500")
                }`}
              >
                {order.orderStatus}
              </span>
            </h2>
            <div className="grid grid-cols-2 gap-4">
              <Input title="Delivery by" />
              <Input title="Tracking Code" />
            </div>
            <div>
              <p>Tracking</p>
              <ul className="">
                <li className="text-sm">
                  For VET Express, customers are required to download the VET
                  Express app to track the package.
                </li>
                <li className="text-sm">
                  For J&T, go to{" "}
                  <a href=" https://www.jtexpresskh.com/trajectoryQuery?waybillNo=&flag=1">
                    link here
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </section>
      )} */}

      <section>
        <OrderList orderList={orderList} listTitle="Order List" />
      </section>
    </section>
  );
}

export default Order;
