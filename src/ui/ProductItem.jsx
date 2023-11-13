import { Link } from "react-router-dom";

function ProductItem({ item, id }) {
  return (
    <Link
      to={`/product/${id}`}
      className="w-full h-auto bg-[#EAECF6] rounded-2xl flex flex-col"
    >
      <img
        src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/refurb-macbook-air-space-gray-m1-202010?wid=1144&hei=1144&fmt=jpeg&qlt=90&.v=1634145627000"
        alt=""
        className="p-4 object-cover md:p-10 h-2/3"
      />
      <div className="p-4 md:p-10 flex flex-col gap-2 md:gap-4 text-center">
        <p>{item.model}</p>
        <p>${item.price}</p>
      </div>
    </Link>
  );
}

export default ProductItem;
