import { useContext } from "react";
import { formatCurrency, formatDate } from "../../../../utils/helpers";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleXmark,
  faCircleCheck,
  faTruckFast,
} from "@fortawesome/free-solid-svg-icons";
import { changeOrderStatus } from "../../../../contexts/order/OrderAction";
import OrderContext from "../../../../contexts/order/OrderContext";
import Button from "../../../../ui/shared/Button";

function OrderItem({ order, orderId }) {
  const { dispatch } = useContext(OrderContext);
  let statusTagColor = "";
  switch (order.orderStatus) {
    case "Pending":
      statusTagColor = "bg-orange-500";
      break;
    case "Shipping":
      statusTagColor = "bg-blue-500";
      break;
    case "Cancelled":
      statusTagColor = "bg-red-500";
      break;
    default:
      statusTagColor = "bg-green-500";
      break;
  }
  const handleApproval = () => {
    changeOrderStatus(orderId, order, "Approved");
  };
  const handleDenied = () => {
    changeOrderStatus(orderId, order, "Cancelled");
  };
  const handleShipping = () => {
    changeOrderStatus(orderId, order, "Shipping");
  };
  const handleViewOrder = () => {
    dispatch({ type: "SET_ORDER", payload: { order, orderId } });
    dispatch({ type: "SET_MODAL", payload: true });
    window.scrollTo(0, 0);
  };
  return (
    <>
      <div className="hidden xl:flex gap-4 items-center text-sm xl:text-base">
        <div className="p-4 w-1/4 flex justify-center">
          <button
            onClick={handleViewOrder}
            className="hover:underline text-blue-500"
          >
            {orderId}
          </button>
        </div>
        <div className="p-4 w-1/4 flex justify-center">
          {formatDate(order.orderAt.toDate())}
        </div>
        <div className="p-4 w-1/4 flex justify-center">
          <span
            className={`text-white p-2 md:h-10 text-sm md:text-base rounded-xl inline-block ${statusTagColor}`}
          >
            {order.orderStatus}
          </span>
        </div>
        <div className="p-4 w-1/4 flex justify-center">
          {formatCurrency(order.checkoutPrice)}
        </div>
        <div className="p-4 w-1/4 flex justify-center gap-4">
          {order.orderStatus === "Pending" && (
            <>
              <Button
                onClick={handleApproval}
                customClass="bg-green-500 flex gap-2 justify-center items-center"
              >
                Approve{" "}
                <FontAwesomeIcon icon={faCircleCheck} className="w-5 h-5" />
              </Button>
              <Button
                onClick={handleDenied}
                customClass="bg-red-500 flex gap-2 justify-center items-center"
              >
                Cancel{" "}
                <FontAwesomeIcon icon={faCircleXmark} className="w-5 h-5" />
              </Button>
            </>
          )}
          {order.orderStatus === "Approved" && (
            <Button
              onClick={handleShipping}
              customClass="bg-blue-500 flex gap-2 justify-center items-center"
            >
              Ship <FontAwesomeIcon icon={faTruckFast} className="w-5 h-5" />
            </Button>
          )}
        </div>
      </div>
      <div className="block xl:hidden p-4 bg-white">
        <div className="flex justify-between items-center">
          <span>
            Order ID:{" "}
            <button
              onClick={() => handleViewOrder(orderId, order)}
              className="font-semibold hover:underline text-blue-500"
            >
              #{orderId}
            </button>
          </span>
          <span
            className={`text-white p-2 md:h-10 md:w-auto text-sm md:text-base rounded-xl ${statusTagColor}`}
          >
            {order.orderStatus}
          </span>
        </div>
        <div>
          <p>
            Order At:{" "}
            <span className="font-semibold">
              {formatDate(order.orderAt.toDate())}
            </span>
          </p>
          <p>
            Checkout Total:{" "}
            <span className="font-semibold">
              {formatCurrency(order.checkoutPrice)}
            </span>
          </p>
        </div>
        <div className="flex gap-2 justify-end mt-4">
          {order.orderStatus === "Pending" && (
            <>
              <Button customClass="bg-green-500">Approve</Button>
              <Button customClass="bg-red-500">Cancel</Button>
            </>
          )}
          {order.orderStatus === "Approved" && (
            <Button customClass="bg-blue-500">Ship</Button>
          )}
        </div>
      </div>
    </>
  );
}

export default OrderItem;