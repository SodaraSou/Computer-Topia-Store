import { useContext, useEffect, useState } from "react";
import { formatCurrency } from "../../../utils/helpers";
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
    deliveryBy: order.deliveryBy ? order.deliveryBy : "",
    trackingCode: order.trackingCode ? order.trackingCode : "",
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
          <section className="max-w-7xl flex flex-col gap-4 md:gap-10">
            <div className="w-full p-4 md:p-10 border bg-white border-gray-200 shadow dark:bg-gray-800 dark:border-gray-700 flex flex-col gap-4">
              <div>
                <h2 className="text-xl font-bold">
                  Order Id: <span className="text-blue-500">{orderId}</span>
                </h2>
                <h2 className="text-xl font-bold">
                  Username:{" "}
                  <span className="text-blue-500">{order.username}</span>
                </h2>
                <h2 className="text-xl font-bold">
                  Phone Number:{" "}
                  <span className="text-blue-500">{order.phoneNumber}</span>
                </h2>
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
              <p className="font-semibold flex justify-end">
                Total: {formatCurrency(order.checkoutPrice)}
              </p>
            </div>
            <div className="w-full p-4 md:p-10 border bg-white border-gray-200 shadow dark:bg-gray-800 dark:border-gray-700 flex flex-col gap-4">
              <h2 className="text-xl font-bold">
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
              </h2>
              <div>
                <h1 className="text-xl font-bold">User Address</h1>
                <div className="h-[1px] bg-[#D9D9D9] my-4"></div>
                <div className="flex">
                  <input
                    type="text"
                    placeholder="House No"
                    className="outline-none text-sm md:text-lg w-full"
                    disabled={true}
                    value={order.houseNo}
                  />
                  <input
                    type="text"
                    placeholder="Street No"
                    className="outline-none text-sm md:text-lg w-full"
                    disabled={true}
                    value={order.streetNo}
                  />
                </div>
                <div className="flex">
                  <input
                    type="text"
                    placeholder="Village"
                    className="outline-none text-sm md:text-lg w-full"
                    disabled={true}
                    value={order.village}
                  />
                  <input
                    type="text"
                    placeholder="Commune"
                    className="outline-none text-sm md:text-lg w-full"
                    disabled={true}
                    value={order.commune}
                  />
                </div>
                <div className="flex">
                  <input
                    type="text"
                    placeholder="District"
                    className="outline-none text-sm md:text-lg w-full"
                    disabled={true}
                    value={order.district}
                  />
                  <input
                    type="text"
                    placeholder="City/Province"
                    className="outline-none text-sm md:text-lg w-full"
                    disabled={true}
                    value={order.province}
                  />
                </div>
                <div className="h-[1px] bg-[#D9D9D9] my-4"></div>
              </div>
              {order.orderStatus === "Shipping" && (
                <form onSubmit={onSubmit} className="grid grid-cols-2 gap-4">
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
                  <Button type="submit">Add</Button>
                </form>
              )}
              {/* <div>
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
              </div> */}
            </div>
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
