import { Link } from "react-router-dom";
import { formatCurrency } from "../utils/helpers";
import StockImg from "../assets/img/Computer_Topia_Stock_Img.webp";

function ProductItem({ item, id }) {
  const { price } = item;
  const priceToDisplay = formatCurrency(price);
  return (
    <Link
      to={`/product/${id}`}
      className="w-full bg-white border border-gray-200 shadow dark:bg-gray-800 dark:border-gray-700 flex flex-col card"
    >
      <div className="overflow-hidden">
        <img
          src={item.productImgs.length > 0 ? item.productImgs[0] : StockImg}
          alt="stock_img"
          className="w-full object-cover"
        />
      </div>
      <div className="p-4 md:p-10 flex flex-col gap-2 md:gap-4 text-center">
        <p className="text-sm md:text-base">{item.model}</p>
        {item.offer === 0 ? (
          <p className="text-sm md:text-base">{priceToDisplay}</p>
        ) : (
          <div className="flex justify-center gap-4">
            <s className="text-sm md:text-base">
              {priceToDisplay}
            </s>
            <p className="text-sm md:text-base text-red-500">{formatCurrency(item.offer)}</p>
          </div>
        )}
      </div>
    </Link>
  );
}

export default ProductItem;
