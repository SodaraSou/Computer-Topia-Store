import { Link } from "react-router-dom";
import StockImg from "../assets/img/Computer_Topia_Stock_Img.png";

function ProductItem({ item, id }) {
  return (
    <Link
      to={`/product/${id}`}
      className="w-full h-auto bg-[#EAECF6] rounded-2xl flex flex-col"
    >
      <div className="">
        <img
          src={item.productImg ? item.productImg : StockImg}
          alt="stock_img"
          className="w-[308px] h-[308px]"
        />
      </div>
      <div className="p-4 md:p-10 flex flex-col gap-2 md:gap-4 text-center">
        <p>{item.model}</p>
        <p>${item.price}</p>
      </div>
    </Link>
  );
}

export default ProductItem;
