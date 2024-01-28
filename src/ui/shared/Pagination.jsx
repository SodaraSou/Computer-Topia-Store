import { useEffect, useState } from "react";
import { Button, IconButton } from "@material-tailwind/react";
import ProductTile from "../../pages/admin/product/components/ProductTile";
import OrderItem from "../../pages/admin/order/components/OrderItem";
import Test from "../../pages/user/user/components/OrderItem";
import NewOrderItem from "../../pages/admin/dashboard/components/NewOrderItem";
import UserCard from "../../pages/admin/user/components/UserCard";

function Pagination({ listItem, listType, query }) {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = listItem.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(listItem.length / itemsPerPage);
  const [active, setActive] = useState(1);
  useEffect(() => {
    setCurrentPage(1);
  }, [query]);

  const getItemProps = (index) => ({
    variant: active === index ? "filled" : "text",
    color: "gray",
    onClick: () => {
      setActive(index), setCurrentPage(index);
    },
  });

  const next = () => {
    if (active === totalPages) return;

    setActive(active + 1);
    setCurrentPage(currentPage + 1);
  };

  const prev = () => {
    if (active === 1) return;

    setActive(active - 1);
    setCurrentPage(currentPage - 1);
  };

  const renderPageButtons = () => {
    const pagesToShow = 3;

    let startPage = 1;
    let endPage = totalPages;

    if (totalPages > pagesToShow) {
      if (currentPage <= Math.floor(pagesToShow / 2) + 1) {
        startPage = 1;
        endPage = pagesToShow;
      } else if (currentPage + Math.floor(pagesToShow / 2) >= totalPages) {
        startPage = totalPages - (pagesToShow - 1);
        endPage = totalPages;
      } else {
        startPage = currentPage - Math.floor(pagesToShow / 2);
        endPage = currentPage + Math.floor(pagesToShow / 2);
      }
    }

    const pageButtons = [];

    for (let i = startPage; i <= endPage; i++) {
      pageButtons.push(
        <IconButton
          key={i}
          {...getItemProps(i)}
          style={{
            backgroundColor: active === i ? "#5E17EB" : "transparent",
            color: active === i ? "#FFFFFF" : "#5E17EB",
          }}
        >
          {i}
        </IconButton>
      );
    }

    return pageButtons;
  };

  return (
    <>
      <div
        className={`gap-4 ${
          listType === "User"
            ? "grid grid-cols-1 xl:grid-cols-2"
            : "flex flex-col"
        } ${listType === "Order" && "xl:gap-0"}`}
      >
        {currentItems.length > 0 ? (
          currentItems.map((item, index) =>
            listType === "Product" ? (
              <ProductTile key={item.id} item={item.data} productId={item.id} />
            ) : listType === "Order" ? (
              <OrderItem
                key={item.id}
                order={item.data}
                orderId={item.id}
                index={index}
              />
            ) : listType === "User" ? (
              <UserCard key={item.id} user={item.data} userId={item.id} />
            ) : listType === "NewOrder" || listType === "Shipping" ? (
              <NewOrderItem key={item.id} order={item.data} orderId={item.id} />
            ) : listType === "UserOrder" ? (
              <Test item={item} key={item.id} />
            ) : null
          )
        ) : (
          <h1 className="text-2xl font-semibold flex justify-center items-center p-10">
            No {listType}!
          </h1>
        )}
      </div>
      <div className="flex justify-center items-center gap-4 mt-4 md:mt-10">
        <Button
          variant="text"
          className="flex items-center gap-2"
          onClick={prev}
          disabled={active === 1}
          style={{
            backgroundColor: "transparent",
            color: "#5E17EB",
          }}
        >
          Previous
        </Button>
        <div className="flex items-center gap-2">{renderPageButtons()}</div>
        <Button
          variant="text"
          className="flex items-center gap-2"
          onClick={next}
          disabled={active === totalPages || totalPages === 0}
          style={{
            backgroundColor: "transparent",
            color: "#5E17EB",
          }}
        >
          Next
        </Button>
      </div>
    </>
  );
}

export default Pagination;
