import OrderItem from "./OrderItem";

function OrderHistory({ orderHistoryList }) {
  return (
    <div className="w-full h-[386px] border rounded-xl p-4 md:p-10">
      <h1 className="text-2xl md:text-4xl font-bold">Order History</h1>
      <div className="h-[1px] w-full bg-[#D9D9D9] my-4"></div>
      {orderHistoryList.length === 0 ? (
        <h1 className="text-2xl font-semibold flex justify-center items-center h-[224px]">
          No Order...
        </h1>
      ) : (
        <div className="h-[224px] overflow-hidden overflow-y-auto scrollbar-hide">
          <div className="flex flex-col gap-6">
            {orderList.map((item) => (
              <OrderItem item={item} key={item.id} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default OrderHistory;
