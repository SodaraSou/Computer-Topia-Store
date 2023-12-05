import StockImg from "../../../assets/img/Computer_Topia_Stock_Img.png";

function CheckoutItem({ item }) {
  return (
    <div className="flex justify-between items-center gap-4 md:gap-10">
      <img
        src={item.productImg ? item.productImg : StockImg}
        alt="stock_img"
        className="w-[100px] md:w-[200px] h-[100px] md:h-[200px] rounded-2xl"
      />
      <div className="flex flex-grow justify-between items-center">
        <div className="flex flex-col gap-2">
          <h2 className="text-lg md:text-2xl font-semibold">{item.model}</h2>
          <p className="text-sm">Price: ${item.price}</p>
        </div>
        <div>
          <h2 className="text-md md:text-xl font-semibold">${item.subTotal}</h2>
          <p className="text-sm">Quantity: {item.quantity}</p>
        </div>
      </div>
    </div>
  );
}

export default CheckoutItem;
