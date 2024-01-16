import { useState } from "react";
import { formatCurrency, formatDate } from "../../../../utils/helpers";
import StockImg from "../../../../assets/img/Computer_Topia_Stock_Img.webp";
import Button from "../../../../ui/shared/Button";

function NewOrderItem({ order, orderId }) {
  const [openOrder, setOpenOrder] = useState(false);
  let statusColor = "";
  switch (order.orderStatus) {
    case "Pending":
      statusColor = "text-orange-500";
      break;
    case "Shipping":
      statusColor = "text-blue-500";
      break;
    case "Cancelled":
      statusColor = "text-red-500";
      break;
    default:
      statusColor = "text-green-500";
      break;
  }
  const handleOpenOrder = (state) => {
    setOpenOrder(state);
  };
  return (
    <div className="p-4 border bg-white border-gray-200 shadow dark:bg-gray-800 dark:border-gray-700">
      <div>
        <div className="flex justify-between items-center">
          <p>
            Order ID:{" "}
            <span className="text-blue-500 font-semibold">{orderId}</span>
          </p>
          <Button onClick={() => handleOpenOrder(!openOrder)}>
            {openOrder ? "Close" : "Detail"}
          </Button>
        </div>
        <p>
          Order At:{" "}
          <span className="font-semibold">
            {formatDate(order.orderAt.toDate())}
          </span>
        </p>
        <p>
          Order Status:{" "}
          <span className={`font-semibold ${statusColor}`}>
            {order.orderStatus}
          </span>
        </p>
        {openOrder && (
          <>
            <p>
              Order from:{" "}
              <span className="font-semibold">{order.username}</span>
            </p>
            <p>
              Phone Number:{" "}
              <span className="font-semibold">{order.phoneNumber}</span>
            </p>
            <p>
              Address:{" "}
              <span className="font-semibold">
                {order.houseNo}, {order.streetNo}, {order.village},{" "}
                {order.commune}, {order.district}, {order.province}
              </span>
            </p>
            <div className="my-4">
              <div className="h-[1px] w-full bg-[#D9D9D9]"></div>
              {order.items.map((order, index) => (
                <div key={index} className="flex justify-between items-center">
                  <div className="flex items-center">
                    <img
                      src={order.productImg ? order.productImg : StockImg}
                      alt="stock_img"
                      className="w-[100px] h-[100px] mr-4"
                    />
                    <span className="w-[200px] md:w-auto">
                      <h2 className="text-lg font-semibold">{order.model}</h2>
                      <p className="text-sm">
                        Price: {formatCurrency(order.price)}
                      </p>
                    </span>
                  </div>
                  <div className="ml-4">
                    <h2 className="text-lg font-semibold">
                      {formatCurrency(order.subTotal)}
                    </h2>
                    <p className="text-sm">Quantity: {order.quantity}</p>
                  </div>
                </div>
              ))}
              <div className="h-[1px] w-full bg-[#D9D9D9]"></div>
            </div>
          </>
        )}
        <p className="flex justify-end text-sm text-gray-500">
          Include Delivery Fee $2.00
        </p>
        <div className="flex justify-end">
          <p>
            Total:{" "}
            <span className="font-semibold">
              {formatCurrency(order.checkoutPrice)}
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default NewOrderItem;
