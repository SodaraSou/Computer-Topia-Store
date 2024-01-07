import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { sortOrder } from "../../../../contexts/order/OrderAction";
import Pagination from "../../../../ui/shared/Pagination";
import DropdownButton from "../../../../ui/shared/DropdownButton";

function OrderList({ orderList, listTitle }) {
  const dropdownContent = [
    { id: 1, type: "Highest Price" },
    { id: 2, type: "Lowest Price" },
    { id: 3, type: "Pending" },
    { id: 4, type: "Approved" },
    { id: 5, type: "Cancelled" },
    { id: 6, type: "Shipping" },
    { id: 7, type: "Complete" },
  ];
  const [selectedType, setSelectedType] = useState(null);
  const [sortedList, setSortedList] = useState(null);
  const [orders, setOrders] = useState([]);
  const [query, setQuery] = useState("");
  useEffect(() => {
    setOrders(orderList);
  }, [orderList]);
  const handleTypeSelect = (type) => {
    setQuery("");
    setSelectedType(type);
    const filterList = sortOrder(orderList, type);
    setSortedList(filterList);
  };
  const onChange = (e) => {
    setSelectedType(null);
    const value = e.target.value;
    setQuery(value);
    handleQuery(value);
  };
  const handleQuery = (newQuery) => {
    if (query !== "") {
      const queryOrder = orderList.filter((order) => {
        return order.id
          .toLocaleLowerCase()
          .includes(newQuery.toLocaleLowerCase());
      });
      setOrders(queryOrder);
    }
  };
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
      className="p-4 md:p-10 bg-[#EAECF6] h-auto flex flex-col justify-between"
    >
      <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-4 md:mb-10">
        <div className="mb-4 md:mb-0">
          <button onClick={() => setSelectedType(null)}>
            <h1 className="text-2xl md:text-4xl font-bold">
              {selectedType ? selectedType : listTitle}
            </h1>
          </button>
        </div>
        <div className="flex items-center gap-4">
          <input
            type="text"
            value={query}
            onChange={onChange}
            className="w-full md:w-[347px] h-[40px] rounded-xl px-4 py-2 border focus:outline-none focus:ring focus:border-[#5E17EB]"
            placeholder="Search Order By ID"
          />
          <DropdownButton
            dropdownContent={dropdownContent}
            onSelect={handleTypeSelect}
          >
            Filter
          </DropdownButton>
        </div>
      </div>
      <div className="hidden xl:grid grid-cols-8 gap-4 bg-[#5E17EB] text-sm text-white">
        <div className="p-4 font-semibold w-full xl:col-span-2">ORDER ID</div>
        <div className="p-4 font-semibold w-full xl:col-span-2">ORDER AT</div>
        <div className="p-4 font-semibold w-full">STATUS</div>
        <div className="p-4 font-semibold w-full">CHECKOUT</div>
        <div className="p-4 font-semibold w-full xl:col-span-2">ACTION</div>
      </div>
      <Pagination
        listItem={selectedType ? sortedList : orders}
        listType="Order"
      />
    </motion.div>
  );
}

export default OrderList;
