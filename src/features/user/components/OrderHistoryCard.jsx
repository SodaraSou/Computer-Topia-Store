import Button from "../../../ui/shared/Button";

function OrderHistoryCard({ item }) {
  return (
    <div className="flex justify-between">
      <div className="w-full">
        <h1 className="font-bold">Date of Order 01/12/2023 11:12 AM</h1>
        <p>Order number: 000000001</p>
        <p>Order status: Complete</p>
        <p>Delivery by: J&T</p>
      </div>
      <Button title="Detail"></Button>
    </div>
  );
}

export default OrderHistoryCard;
