import React from "react";

function OrderSection() {
  return (
    <div className="w-full md:w-1/2 border rounded-xl p-4 md:p-10">
      <h1 className="text-2xl md:text-4xl font-bold">Order</h1>
      <div className="h-[1px] w-full bg-[#D9D9D9] my-4"></div>
      <p>No Data...</p>
      {/* {orderHistoryList.length === 0 ? (
        <p>No Data...</p>
      ) : (
        <div className="flex flex-col gap-4 md:gap-10">
          {orderHistoryList.map((item) => (
            <OrderHistoryCard item={item} key={item.id} />
          ))}
        </div>
      )} */}
    </div>
  );
}

export default OrderSection;
