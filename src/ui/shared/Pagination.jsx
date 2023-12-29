import { useState } from "react";
import ProductTile from "../../pages/admin/product/components/ProductTile";
import OrderItem from "../../pages/admin/order/components/OrderItem";
import UserCard from "../../pages/admin/user/components/UserCard";

function Pagination({ listItem, listType }) {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = listItem.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(listItem.length / itemsPerPage);
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };
  return (
    <>
      <div
        className={`gap-4 ${
          listType === "User"
            ? "grid grid-cols-1 xl:grid-cols-2"
            : "flex flex-col"
        }`}
      >
        {currentItems.length > 0 ? (
          currentItems.map((item) =>
            listType === "Product" ? (
              <ProductTile key={item.id} item={item.data} productId={item.id} />
            ) : listType === "Order" ? (
              <OrderItem key={item.id} order={item.data} orderId={item.id} />
            ) : listType === "User" ? (
              <UserCard key={item.id} user={item.data} userId={item.id} />
            ) : null
          )
        ) : (
          <h1 className="text-2xl font-semibold flex justify-center items-center p-10">
            No {listType}!
          </h1>
        )}
      </div>
      <ul className="flex justify-center gap-2 mt-4 md:mt-10">
        {Array.from({ length: totalPages }).map((_, index) => (
          <li key={index}>
            <button
              onClick={() => handlePageChange(index + 1)}
              className={`px-3 py-1 border border-white rounded-md ${
                currentPage === index + 1
                  ? "bg-[#5E17EB] text-white"
                  : "bg-white text-black"
              }`}
            >
              {index + 1}
            </button>
          </li>
        ))}
        {totalPages > 10 && currentPage !== totalPages && (
          <li>
            <button
              onClick={() => handlePageChange(currentPage + 1)}
              className="px-3 py-1 border border-gray-300 rounded-md bg-white text-gray-700"
            >
              Next
            </button>
          </li>
        )}
      </ul>
    </>
  );
}

export default Pagination;
