import { useContext, useEffect, useState } from "react";
import { formatCurrency, formatDate } from "../../../utils/helpers";
import { updateDelivery } from "../../../contexts/order/OrderAction";
import OrderContext from "../../../contexts/order/OrderContext";
import OrderList from "./components/OrderList";
import Input from "../../../ui/shared/Input";
import Modal from "../../../ui/shared/Modal";
import Button from "../../../ui/shared/Button";
import { toast } from "react-toastify";

function Order() {
  const { orderList, order, orderId, openOrder, orderDispatch } =
    useContext(OrderContext);
  useEffect(() => {
    orderDispatch({ type: "SET_MODAL", payload: false });
  }, []);
  const handleModal = () => {
    orderDispatch({ type: "SET_MODAL", payload: false });
  };
  const [delivery, setDelivery] = useState({
    deliveryBy: order ? order.deliveryBy : "",
    trackingCode: order ? order.trackingCode : "",
  });
  const onChangeDelivery = (e) => {
    setDelivery((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }));
  };
  const onSubmit = async (e) => {
    e.preventDefault();
    const response = await updateDelivery(delivery, orderId);
    if (response) {
      toast.success("Delivery Info Complete!");
    }
  };
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
          <section className="max-w-2xl flex flex-col gap-4 md:gap-10">
            <div className="w-full p-4 md:p-10 border bg-white border-gray-200 shadow dark:bg-gray-800 dark:border-gray-700 flex flex-col gap-4">
              <div>
                <h1 className="text-4xl font-bold mb-4">Order</h1>
                <p className="font-semibold">
                  Order Id: <span className="text-blue-500">{orderId}</span>
                </p>
                <p>
                  <span className="font-semibold">Order At:</span>{" "}
                  {formatDate(order.orderAt.toDate())}
                </p>
                <p className="font-semibold">
                  Order Status:{" "}
                  <span
                    className={`font-semibold ${
                      (order.orderStatus === "Approved" && "text-green-500") ||
                      (order.orderStatus === "Shipping" && "text-blue-500") ||
                      (order.orderStatus === "Cancelled" && "text-red-500") ||
                      (order.orderStatus === "Pending" && "text-orange-500") ||
                      (order.orderStatus === "Complete" && "text-green-500")
                    }`}
                  >
                    {order.orderStatus}
                  </span>
                </p>
                <p>
                  <span className="font-semibold">Order from: </span>
                  {order.username}
                </p>
                <p>
                  <span className="font-semibold">Phone Number: </span>
                  {order.phoneNumber}
                </p>
                <p>
                  <span className="font-semibold">Address:</span>{" "}
                  {order.houseNo}, {order.streetNo}, {order.village},{" "}
                  {order.commune}, {order.district}, {order.province}
                </p>
                {order.orderStatus === "Shipping" && (
                  <>
                    <p>
                      <span className="font-semibold">Delivery by:</span>{" "}
                      {order.deliveryBy}
                    </p>
                    <p>
                      <span className="font-semibold">Tracking Code:</span>{" "}
                      {order.trackingCode}
                    </p>
                  </>
                )}
              </div>
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
              <div>
                <p className="flex justify-end text-sm text-gray-500">
                  Include Delivery Fee $2.00
                </p>
                <p className="font-semibold flex justify-end">
                  Total: {formatCurrency(order.checkoutPrice)}
                </p>
              </div>
            </div>
            {order.orderStatus === "Approved" && (
              <div className="w-full p-4 md:p-10 border bg-white border-gray-200 shadow dark:bg-gray-800 dark:border-gray-700 flex flex-col gap-4">
                <form onSubmit={onSubmit}>
                  <div className="flex gap-4 mb-4">
                    <Input
                      title="Delivery by"
                      id="deliveryBy"
                      onChange={onChangeDelivery}
                      value={delivery.deliveryBy}
                      isRequired={true}
                    />
                    <Input
                      title="Tracking Code"
                      id="trackingCode"
                      onChange={onChangeDelivery}
                      value={delivery.trackingCode}
                      isRequired={true}
                    />
                  </div>
                  <div className="flex justify-end">
                    <Button type="submit">Add</Button>
                  </div>
                </form>
              </div>
            )}
          </section>
        </Modal>
      )}
      <section>
        <OrderList orderList={orderList} listTitle="Order List" />
      </section>
    </section>
  );
}

export default Order;
