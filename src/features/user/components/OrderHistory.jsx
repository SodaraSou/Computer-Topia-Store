import Button from "../../../ui/shared/Button";

function OrderHistory() {
  return (
    <div className="w-full border rounded-xl p-4 md:p-10">
      <h1 className="text-2xl md:text-4xl font-bold">Order History</h1>
      <div className="h-[1px] w-full bg-[#D9D9D9] mt-4 mb-10"></div>
      <div className="flex flex-col gap-4 md:gap-10">
        <div className="flex justify-between">
          <div className="w-full">
            <h1 className="font-bold">Date of Order 01/12/2023 11:12 AM</h1>
            <p>Order number: 000000001</p>
            <p>Order status: Complete</p>
            <p>Delivery by: J&T</p>
          </div>
          <Button title="Detail"></Button>
        </div>
        <div className="flex justify-between">
          <div className="w-full">
            <h1 className="font-bold">Date of Order 01/12/2023 11:12 AM</h1>
            <p>Order number: 000000001</p>
            <p>Order status: Complete</p>
            <p>Delivery by: J&T</p>
          </div>
          <Button title="Detail"></Button>
        </div>
      </div>
    </div>
  );
}

export default OrderHistory;
