import { Link } from "react-router-dom";
import { formatCurrency } from "../utils/helpers";
import StockImg from "../user/assets/img/Computer_Topia_Stock_Img.png";

function ProductItem({ item, id }) {
  const { price } = item;
  const priceToDisplay = formatCurrency(price);
  return (
    <Link to={`/product/${id}`} className="w-full border flex flex-col">
      <div className="">
        <img
          src={item.productImgs.length > 0 ? item.productImgs[0] : StockImg}
          alt="stock_img"
          className="w-full rounded-t-2xl"
        />
      </div>
      <div className="p-4 md:p-10 flex flex-col gap-2 md:gap-4 text-center">
        <p>{item.model}</p>
        <p>{priceToDisplay}</p>
      </div>
    </Link>
  );
}

export default ProductItem;
