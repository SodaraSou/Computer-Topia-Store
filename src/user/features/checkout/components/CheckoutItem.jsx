import StockImg from "../../../assets/img/Computer_Topia_Stock_Img.webp";
import { formatCurrency } from "../../../../utils/helpers";

function CheckoutItem({ item }) {
  return (
    <div className="flex justify-between items-center">
      <div className="flex items-center">
        <img
          src={item.productImg ? item.productImg : StockImg}
          alt="stock_img"
          className="w-[100px] md:w-[200px]"
        />
        <span className="w-[200px] md:w-auto">
          <h2 className="text-lg font-semibold">{item.model}</h2>
          <p className="text-sm">Price: {formatCurrency(item.price)}</p>
        </span>
      </div>
      <div className="ml-4">
        <h2 className="text-lg font-semibold">
          {formatCurrency(item.subTotal)}
        </h2>
        <p className="text-sm">Quantity: {item.quantity}</p>
      </div>
    </div>
  );
}

export default CheckoutItem;
