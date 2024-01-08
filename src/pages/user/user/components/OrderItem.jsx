import { useState } from "react";
import { formatDate, formatCurrency } from "../../../../utils/helpers";
import { recieveProduct } from "../../../../services/order.api";
import StockImg from "../../../../assets/img/Computer_Topia_Stock_Img.webp";
import Button from "../../../../ui/shared/Button";

function OrderItem({ item }) {
  const [openModal, setOpenModal] = useState(false);
  const orderStatus = item.data.orderStatus;
  const formattedDate = formatDate(item.data.orderAt.toDate());
  let spanClass = "";
  switch (orderStatus) {
    case "Pending":
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
      {/* {openModal && (
        <Modal handleModal={handleModal}>
          <div className="max-w-[1200px] flex flex-col gap-4">
            <div className="flex justify-between items-center">
              <h2 className="text-xl font-bold">
                Order Id: <span className="text-blue-500">{item.id}</span>
              </h2>
              {orderStatus == "Shipping" && (
                <div>
                  <Button onClick={handleRecieve} customClass="bg-green-500">
                    Recieve
                  </Button>
                </div>
              )}
            </div>
            <div className="h-[1px] w-full bg-[#D9D9D9]"></div>
            {item.data.items.map((item, index) => (
              <div key={index} className="flex justify-between items-center">
                <div className="flex items-center">
                  <img
                    src={item.productImg ? item.productImg : StockImg}
                    alt="stock_img"
                    className="w-[100px] h-[100px] mr-4"
                  />
                  <span className="w-[200px] md:w-auto">
                    <h2 className="text-lg font-semibold">{item.model}</h2>
                    <p className="text-sm">
                      Price: {formatCurrency(item.price)}
                    </p>
                  </span>
                </div>
                <div className="ml-4">
                  <h2 className="text-lg font-semibold">
                    {formatCurrency(item.subTotal)}
                  </h2>
                  <p className="text-sm">Quantity: {item.quantity}</p>
                </div>
              </div>
            ))}
            <div className="h-[1px] w-full bg-[#D9D9D9]"></div>
            <p className="font-semibold flex justify-end">
              Total: {formatCurrency(item.data.checkoutPrice)}
            </p>
          </div>
        </Modal>
      )} */}
      <div className="flex flex-col p-4 md:p-10 border bg-white border-gray-200 shadow dark:bg-gray-800 dark:border-gray-700">
        <div className="flex justify-between gap-4">
          <div className="w-full">
            <h1 className="font-bold">Date Order: {formattedDate}</h1>
            <p className="font-semibold">
              Order Id: <span className="text-blue-500">{item.id}</span>
            </p>
            <p>
              Order status:{" "}
              <span className={`font-semibold ${spanClass}`}>
                {item.data.orderStatus}
              </span>
            </p>
            <p>
              Delivery by: {item.data.deliveryBy ? item.data.deliveryBy : "N/A"}
            </p>
            <p>
              Tracking Code:{" "}
              {item.data.trackingCode ? item.data.trackingCode : "N/A"}
            </p>
          </div>
          <div>
            {orderStatus == "Shipping" && (
              <div>
                <Button onClick={handleRecieve} customClass="bg-green-500 mb-4">
                  Recieve
                </Button>
              </div>
            )}
            <Button customClass="w-full" onClick={() => handleModal(!openModal)}>
              {openModal ? "Close" : "Detail"}
            </Button>
          </div>
        </div>
        {openModal && (
          <div className="my-4">
            <div className="h-[1px] w-full bg-[#D9D9D9]"></div>
            {item.data.items.map((item, index) => (
              <div key={index} className="flex justify-between items-center">
                <div className="flex items-center">
                  <img
                    src={item.productImg ? item.productImg : StockImg}
                    alt="stock_img"
                    className="w-[100px] h-[100px] mr-4"
                  />
                  <span className="w-[200px] md:w-auto">
                    <h2 className="text-lg font-semibold">{item.model}</h2>
                    <p className="text-sm">
                      Price: {formatCurrency(item.price)}
                    </p>
                  </span>
                </div>
                <div className="ml-4">
                  <h2 className="text-lg font-semibold">
                    {formatCurrency(item.subTotal)}
                  </h2>
                  <p className="text-sm">Quantity: {item.quantity}</p>
                </div>
              </div>
            ))}
            <div className="h-[1px] w-full bg-[#D9D9D9] mb-4"></div>
            <p className="font-semibold flex justify-end text-lg">
              Total: {formatCurrency(item.data.checkoutPrice)}
            </p>
          </div>
        )}
      </div>
    </>
  );
}

export default OrderItem;
