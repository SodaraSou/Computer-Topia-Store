import { Link } from "react-router-dom";
import { formatCurrency } from "../utils/helpers";
import StockImg from "../assets/img/Computer_Topia_Stock_Img.png";

function ProductItem({ item, id }) {
  const { price } = item;
  const priceToDisplay = formatCurrency(price);
  return (
    <Link to={`/product/${id}`} className="w-full h-auto border flex flex-col">
      <div className="">
        <img
          src={item.productImg ? item.productImg : StockImg}
          alt="stock_img"
          className="w-full h-[396px] md:h-[375px] lg:h-[306px] rounded-t-2xl"
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
