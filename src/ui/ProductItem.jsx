import { Link } from "react-router-dom";
import { formatCurrency } from "../utils/helpers";
import StockImg from "../assets/img/Computer_Topia_Stock_Img.webp";

function ProductItem({ item, id }) {
  const { price } = item;
  const priceToDisplay = formatCurrency(price);
  return (
    <Link to={`/product/${id}`} className="w-full border flex flex-col">
      <div className="">
        <img
          src={item.productImgs.length > 0 ? item.productImgs[0] : StockImg}
          alt="stock_img"
          className="w-full h-[189px] md:h-[375.5px] lg:h-[312.33px] xl:h-[306px]"
        />
      </div>
      <div className="p-4 md:p-10 flex flex-col gap-2 md:gap-4 text-center">
        <p className="text-sm md:text-base">{item.model}</p>
        <p className="text-sm md:text-base">{priceToDisplay}</p>
      </div>
    </Link>
  );
}

export default ProductItem;
