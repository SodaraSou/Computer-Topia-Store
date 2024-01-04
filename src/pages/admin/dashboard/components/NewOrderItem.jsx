import { formatCurrency, formatDate } from "../../../../utils/helpers";

function NewOrderItem({ order, orderId }) {
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
  return (
    <div className="p-4 bg-white">
      <div className="flex justify-between items-center">
        <span>
          Order ID:{" "}
          <span className="text-blue-500 font-semibold">{orderId}</span>
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
    </div>
  );
}

export default NewOrderItem;
