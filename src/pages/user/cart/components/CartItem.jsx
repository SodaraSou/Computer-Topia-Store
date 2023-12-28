import { Link } from "react-router-dom";
import { formatCurrency } from "../../../../utils/helpers";
import StockImg from "../../../../assets/img/Computer_Topia_Stock_Img.webp";
import QuantityButton from "../../../../ui/shared/QuantityButton";

function CartItem({ item, handleRemove }) {
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
        <button
          onClick={() =>
            handleRemove(item.productId, item.quantity, item.price)
          }
          className="text-sm text-gray-500 hover:underline hover:text-red-500"
        >
          Remove
        </button>
      </div>
    </div>
  );
}

export default CartItem;
