import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBoxesPacking } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import OrderItem from "./OrderItem";
import Spinner from "../../../ui/Spinner";

function OrderHistory({ orderList, loading }) {
  const test = orderList.filter((order) => order.orderStatus === "Complete");
  console.log(orderList);
  return (
    <div className="w-full h-[386px] border border-[#D9D9D9] rounded-xl p-4 md:p-10">
      <h1 className="text-2xl md:text-4xl font-bold">Order History</h1>
      <div className="h-[1px] w-full bg-[#D9D9D9] my-4"></div>
      {loading ? (
        <div className="flex p-10 justify-center items-center">
          <Spinner />
        </div>
      ) : test.length === 0 ? (
        <div className="flex flex-col justify-center items-center h-[224px] gap-4">
          <FontAwesomeIcon
            icon={faBoxesPacking}
            className="text-[#5E17EB] w-10 h-10"
          />
          <p className="text-xl md:text-2xl font-semibold">No Orders</p>
          <Link
            to="/"
            className="rounded-xl bg-[#5E17EB] text-white px-4 md:px-2 py-2 md:h-10 md:w-28 font-semibold text-center"
          >
            Shop Now
          </Link>
        </div>
      ) : (
        <div className="h-[224px] overflow-hidden overflow-y-auto scrollbar-hide">
          <div className="flex flex-col gap-6">
            {test.map((item) => (
              <OrderItem item={item} key={item.id} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default OrderHistory;
