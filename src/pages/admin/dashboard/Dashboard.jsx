import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
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
import LineChart from "../../../ui/LineChart";
import SingleLineChart from "../../../ui/SingleLineChart";
import Pagination from "../../../ui/shared/Pagination";
import Spinner from "../../../ui/Spinner";

function Dashboard() {
  const {
    totalOrder,
    totalRevenue,
    monthlyOrders,
    orderList,
    totalIncome,
    dailyOrders,
    weeklyOrders,
    weeklyIncomes,
    weeklyRevenues,
    monthlyIncomes,
    monthlyRevenues,
    dailyRevenues,
    dailyIncomes,
  } = useContext(OrderContext);
  const { listProduct } = useContext(ProductContext);
  const categoriesWeekly = Object.keys(weeklyOrders);
  const dataPointsWeekly = Object.values(weeklyOrders);
  const ordersDaily = Object.keys(dailyOrders);
  const orderDataPointsDaily = Object.values(dailyOrders);
  const categoriesMonthly = Object.keys(monthlyOrders);
  const dataPointsMonthly = Object.values(monthlyOrders);
  const incomesWeekly = Object.keys(weeklyIncomes);
  const incomesDataPointsWeekly = Object.values(weeklyIncomes);
  // const revenuesWeekly = Object.keys(weeklyRevenues);
  const revenuesDataPointsWeekly = Object.values(weeklyRevenues);
  const incomesMonthly = Object.keys(monthlyIncomes);
  const incomesDataPointsMonthly = Object.values(monthlyIncomes);
  // const revenuesMonthly = Object.keys(monthlyRevenues);
  const revenuesDataPointsMonthly = Object.values(monthlyRevenues);
  // const revenuesDaily = Object.keys(dailyRevenues);
  const revenuesDataPointsDaily = Object.values(dailyRevenues);
  const incomeDaily = Object.keys(dailyIncomes);
  const incomeDataPointsDaily = Object.values(dailyIncomes);
  const [loading, setLoading] = useState(false);
  const monthName = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const d = new Date();
  const month = monthName[d.getMonth()];
  const year = d.getFullYear();
  useEffect(() => {
    setLoading(true);
    setLoading(false);
  }, []);
  if (loading) {
    return <Spinner fullScreenSpinner={true} />;
  }
  return (
    <section className="p-4 md:p-10">
      <div className="flex justify-between mb-4 md:mb-10">
        <h1 className="text-2xl md:text-4xl font-bold">Dashboard</h1>
      </div>
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.5 }}
      >
        <div className="grid grid-cols-2 xl:grid-cols-4 gap-4 md:gap-10 mb-4 md:mb-10">
          <div className="p-4 w-full flex items-center md:flex-col md:items-start 2xl:flex-row 2xl:items-center gap-4 bg-[#EAECF6] xl:p-10">
            <FontAwesomeIcon
              icon={faBoxesPacking}
              className="text-white w-5 h-5 md:w-8 md:h-8 bg-blue-500 p-2 md:p-4 rounded-full"
            />
            <div>
              <h1 className="text-lg md:text-2xl font-bold">{totalOrder}</h1>
              <p className="text-sm md:text-base">Total Order Monthly</p>
            </div>
          </div>
          <div className="p-4 w-full flex items-center md:flex-col md:items-start 2xl:flex-row 2xl:items-center gap-4 bg-[#EAECF6] xl:p-10">
            <FontAwesomeIcon
              icon={faSackDollar}
              className="text-white w-5 h-5 md:w-8 md:h-8 bg-orange-500 p-2 md:p-4 rounded-full"
            />
            <div>
              <h1 className="text-lg md:text-2xl font-bold">
                {formatCurrency(totalRevenue)}
              </h1>
              <p className="text-sm md:text-base">Total Revenue Monthly</p>
            </div>
          </div>
          <div className="p-4 w-full flex items-center md:flex-col md:items-start 2xl:flex-row 2xl:items-center gap-4 bg-[#EAECF6] xl:p-10">
            <FontAwesomeIcon
              icon={faVault}
              className="text-white w-5 h-5 md:w-8 md:h-8 bg-green-500 p-2 md:p-4 rounded-full"
            />
            <div>
              <h1 className="text-lg md:text-2xl font-bold">
                {formatCurrency(totalIncome)}
              </h1>
              <p className="text-sm md:text-base">Total Income Monthly</p>
            </div>
          </div>
          <div className="p-4 w-full flex items-center md:flex-col md:items-start 2xl:flex-row 2xl:items-center gap-4 bg-[#EAECF6] xl:p-10">
            <FontAwesomeIcon
              icon={faBox}
              className="text-white w-5 h-5 md:w-8 md:h-8 bg-[#5E17EB] p-2 md:p-4 rounded-full"
            />
            <div>
              <h1 className="text-lg md:text-2xl font-bold">
                {listProduct.length}
              </h1>
              <p className="text-sm md:text-base">Total Product</p>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 2xl:grid-cols-3 gap-4 md:gap-10 mb-4 md:mb-10">
          <div className="p-4 md:p-10 w-full bg-[#EAECF6]">
            <h1 className="text-2xl font-bold mb-4">Daily Order in {month}</h1>
            <SingleLineChart
              categories={ordersDaily}
              data={orderDataPointsDaily}
            />
          </div>
          <div className="p-4 md:p-10 w-full bg-[#EAECF6]">
            <h1 className="text-2xl font-bold mb-4">Order In {month}</h1>
            <SingleLineChart
              categories={categoriesWeekly}
              data={dataPointsWeekly}
            />
          </div>
          <div className="p-4 md:p-10 w-full bg-[#EAECF6]">
            <h1 className="text-2xl font-bold mb-4">Order In {year}</h1>
            <SingleLineChart
              categories={categoriesMonthly}
              data={dataPointsMonthly}
            />
          </div>
        </div>
        <div className="grid grid-cols-1 2xl:grid-cols-3 gap-4 md:gap-10 mb-4 md:mb-10">
          <div className="p-4 md:p-10 w-full bg-[#EAECF6]">
            <h1 className="text-2xl font-bold mb-4">
              Daily Revenue and Income In {month}
            </h1>
            <LineChart
              categories={incomeDaily}
              data={incomeDataPointsDaily}
              secondData={revenuesDataPointsDaily}
            />
          </div>
          <div className="p-4 md:p-10 w-full bg-[#EAECF6]">
            <h1 className="text-2xl font-bold mb-4">
              Revenue and Income In {month}
            </h1>
            <LineChart
              categories={incomesWeekly}
              data={incomesDataPointsWeekly}
              secondData={revenuesDataPointsWeekly}
            />
          </div>
          <div className="p-4 md:p-10 w-full bg-[#EAECF6]">
            <h1 className="text-2xl font-bold mb-4">
              Revenue and Income In {year}
            </h1>
            <LineChart
              categories={incomesMonthly}
              data={incomesDataPointsMonthly}
              secondData={revenuesDataPointsMonthly}
            />
          </div>
        </div>
        <div className="grid grid-cols-1 2xl:grid-cols-2 gap-4 md:gap-10">
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
          {/* <div className="p-4 md:p-10 w-full bg-[#EAECF6]">
            <div className="flex justify-between items-center mb-4 md:mb-10">
              <h1 className="text-2xl md:text-4xl font-bold">Shipping Order</h1>
              <Link
                to="/order"
                className="rounded-xl bg-[#5E17EB] text-white px-4 md:px-2 py-2 md:h-10 md:w-28 font-semibold text-center"
              >
                View Order
              </Link>
            </div>
            <Pagination
              listItem={orderList.filter(
                (order) => order.data.orderStatus === "Shipping"
              )}
              listType="Shipping"
            />
          </div> */}
        </div>
      </motion.div>
    </section>
  );
}

export default Dashboard;
