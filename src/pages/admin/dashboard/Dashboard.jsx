import { useContext } from "react";
import { Link } from "react-router-dom";
import { formatCurrency } from "../../../utils/helpers";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBox,
  faBoxesPacking,
  faSackDollar,
  faVault,
} from "@fortawesome/free-solid-svg-icons";
import OrderContext from "../../../contexts/order/OrderContext";
import ProductContext from "../../../contexts/product/ProductContext";
import UserContext from "../../../contexts/user/UserContext";
import LineChart from "../../../ui/LineChart";
import Pagination from "../../../ui/shared/Pagination";

function Dashboard() {
  const { totalOrder, totalRevenue, monthlyOrders, orderList } =
    useContext(OrderContext);
  const { listProduct } = useContext(ProductContext);
  // const { userList } = useContext(UserContext);
  const categories = Object.keys(monthlyOrders);
  const dataPoints = Object.values(monthlyOrders);
  return (
    <section className="p-4 md:p-10">
      <div className="flex justify-between mb-4 md:mb-10">
        <h1 className="text-2xl md:text-4xl font-bold">Dashboard</h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4 md:gap-10 mb-4 md:mb-10">
        <div className="p-4 lg:p-10 w-full flex gap-4 items-center bg-[#EAECF6]">
          <FontAwesomeIcon
            icon={faBoxesPacking}
            className="text-[#5E17EB] w-5 md:w-10 h-5 md:h-10 bg-white p-4 rounded-full"
          />
          <div>
            <h1 className="text-2xl md:text-4xl font-bold">{totalOrder}</h1>
            <p className="text-sm md:text-base">Total Order Weekly</p>
          </div>
        </div>
        <div className="p-4 lg:p-10 w-full flex gap-4 items-center bg-[#EAECF6]">
          <FontAwesomeIcon
            icon={faSackDollar}
            className="text-[#5E17EB] w-5 md:w-10 h-5 md:h-10 bg-white p-4 rounded-full"
          />
          <div>
            <h1 className="text-2xl md:text-4xl font-bold">
              {formatCurrency(totalRevenue)}
            </h1>
            <p className="text-sm md:text-base">Total Revenue Weekly</p>
          </div>
        </div>
        <div className="p-4 lg:p-10 w-full flex gap-4 items-center bg-[#EAECF6]">
          <FontAwesomeIcon
            icon={faVault}
            className="text-[#5E17EB] w-5 md:w-10 h-5 md:h-10 bg-white p-4 rounded-full"
          />
          <div>
            <h1 className="text-2xl md:text-4xl font-bold">
              {formatCurrency(totalRevenue)}
            </h1>
            <p className="text-sm md:text-base">Total Income Weekly</p>
          </div>
        </div>
        <div className="p-4 lg:p-10 w-full flex gap-4 items-center bg-[#EAECF6]">
          <FontAwesomeIcon
            icon={faBox}
            className="text-[#5E17EB] w-5 md:w-10 h-5 md:h-10 bg-white p-4 rounded-full"
          />
          <div>
            <h1 className="text-2xl md:text-4xl font-bold">
              {listProduct.length}
            </h1>
            <p className="text-sm md:text-base">Total Product</p>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-4 md:gap-10">
        <div className="w-full">
          <h1 className="text-2xl md:text-4xl font-bold">2024</h1>
          <LineChart categories={categories} data={dataPoints} />
        </div>
        <div className="p-4 md:p-10 w-full bg-[#EAECF6]">
          <div className="flex justify-between items-center mb-4 md:mb-10">
            <h1 className="text-2xl md:text-4xl font-bold">New Order</h1>
            <Link
              to="/order"
              className="rounded-xl bg-[#5E17EB] text-white px-4 md:px-2 py-2 md:h-10 md:w-28 font-semibold text-center"
            >
              View Order
            </Link>
          </div>
          <Pagination
            listItem={orderList.filter(
              (order) => order.data.orderStatus === "Pending"
            )}
            listType="NewOrder"
          />
        </div>
      </div>
    </section>
  );
}

export default Dashboard;
