import { useState } from "react";
import { formatDate } from "../../../utils/helpers";
import { recieveProduct } from "../../../services/order.api";
import StockImg from "../../../assets/img/Computer_Topia_Stock_Img.png";
import Button from "../../../ui/shared/Button";
import Modal from "../../../ui/shared/Modal";

function OrderItem({ item }) {
  const [openModal, setOpenModal] = useState(false);
  const orderStatus = item.data.orderStatus;
  const formattedDate = formatDate(item.data.orderAt.toDate());
  let spanClass = "";
  switch (orderStatus) {
    case "Pending Approval":
      spanClass = "text-orange-500";
      break;
    case "Shipping":
      spanClass = "text-blue-500";
      break;
    case "Cancelled":
      spanClass = "text-red-500";
    default:
      spanClass = "text-green-500";
      break;
  }
  const handleModal = (state) => {
    setOpenModal(state);
  };
  const handleRecieve = async () => {
    await recieveProduct(
      item.data.items,
      item.id,
      item.data.checkoutPrice,
      item.data.orderAt
    );
    handleModal(false);
  };
  return (
    <>
      {openModal && (
        <Modal handleModal={handleModal}>
          <div className="max-w-[600px] max-h-[600px]">
            <div className="flex items-center gap-4">
              <div>
                <h1 className="text-2xl font-bold">Order Id: {item.id}</h1>
              </div>
              {orderStatus == "Shipping" && (
                <div>
                  <Button onClick={handleRecieve} customClass="bg-green-500">
                    Recieve
                  </Button>
                </div>
              )}
            </div>
            <div className="h-[1px] w-full bg-[#D9D9D9] my-4"></div>
            <div className="flex flex-col gap-4">
              {item.data.items.map((test, index) => (
                <div
                  key={index}
                  className="flex justify-between items-center gap-4"
                >
                  <img
                    src={test.productImg ? test.productImg : StockImg}
                    alt="stock_img"
                    className="w-[100px] h-[100px] rounded-2xl"
                  />
                  <div className="flex flex-grow justify-between items-center">
                    <div className="flex flex-col gap-2">
                      <h2 className="text-lg font-semibold">{test.model}</h2>
                      <p className="text-sm">Price: ${test.price}</p>
                    </div>
                    <div>
                      <h2 className="text-md font-semibold">
                        ${test.subTotal}
                      </h2>
                      <p className="text-sm">Quantity: {test.quantity}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="h-[1px] w-full bg-[#D9D9D9] my-4"></div>
            <div className="flex justify-end">
              <p className="font-semibold">Total: ${item.data.checkoutPrice}</p>
            </div>
          </div>
        </Modal>
      )}
      <div className="flex justify-between">
        <div className="w-full">
          <h1 className="font-bold">Date Order: {formattedDate}</h1>
          <p>Order Id: {item.id}</p>
          <p>
            Order status:{" "}
            <span className={`font-semibold ${spanClass}`}>
              {item.data.orderStatus}
            </span>
          </p>
          <p>Delivery by: J&T</p>
        </div>
        <div>
          <Button onClick={handleModal}>Detail</Button>
        </div>
      </div>
    </>
  );
}

export default OrderItem;
