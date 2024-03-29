import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { setProduct, setLoading } from "./productSlice";
import { getProductById } from "../../../services/product.api";
import { addItemToCart } from "../../../services/order.api";
import { formatCurrency } from "../../../utils/helpers";
import { setDropdownVisible, setQuery } from "../home/homeslice";
import StockImg from "../../../assets/img/Computer_Topia_Stock_Img.webp";
import LaptopDetail from "./components/LaptopDetail";
import HardwareDetail from "./components/HardwareDetail";
import Spinner from "../../../ui/Spinner";
import QuantityButton from "../../../ui/shared/QuantityButton";
import Button from "../../../ui/shared/Button";
import PeriAndAccesDetail from "./components/PeriAndAccesDetail";

function Product() {
  const { productId } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const product = useSelector((state) => state.product.product);
  const loading = useSelector((state) => state.product.loading);
  const { price } = product;
  const priceToDisplay = formatCurrency(price);

  useEffect(() => {
    dispatch(setQuery(""));
    dispatch(setDropdownVisible(false));
    const fetchProduct = async () => {
      dispatch(setLoading());
      const data = await getProductById(productId);
      dispatch(setProduct(data));
    };
    fetchProduct();
  }, [productId]);

  const [quantity, setQuantity] = useState(1);
  const handleQuantity = (quantityReturn) => {
    setQuantity(quantityReturn);
  };
  const addToCart = async () => {
    const { model, price, productImgs, buyInPrice, offer } = product;
    const priceToAdd = offer === 0 ? price : offer;
    const reponse = await addItemToCart(
      productId,
      productImgs[0],
      model,
      buyInPrice,
      priceToAdd,
      quantity
    );
    if (reponse) {
      navigate("/authentication");
    }
  };
  if (loading) {
    return <Spinner fullScreenSpinner={true} />;
  }
  return (
    <div className="max-w-7xl mx-auto p-4 xl:px-0 2xl:py-10">
      {/* Main Product Section */}
      <section className="flex flex-col md:flex-row gap-10 mb-10">
        <img
          src={
            product && product.productImgs && product.productImgs.length > 0
              ? product.productImgs[0]
              : StockImg
          }
          alt="stock_img"
          className="w-full md:w-1/2 border"
        />
        <div className="w-full md:w-1/2">
          <h1 className="text-2xl md:text-4xl font-bold mb-5">
            {product.model}
          </h1>
          <hr className="mb-5" />
          <h1 className="text-2xl md:text-4xl font-bold mb-5">
            {/* {priceToDisplay} */}
            {product.offer === 0 ? (
              <>{priceToDisplay}</>
            ) : (
              <div className="flex gap-4">
                <p className="text-red-500 ">{formatCurrency(product.offer)}</p>
                <s className="text-sm md:text-base">{priceToDisplay}</s>
              </div>
            )}
          </h1>
          <hr className="mb-5" />
          <div className="flex gap-5 items-center mb-5">
            <QuantityButton handleQuantity={handleQuantity} />
            <p className="text-base md:text-lg">
              Only {product.stock} items left
            </p>
          </div>
          <Button
            onClick={addToCart}
            customClass="w-full md:w-[200px]"
            disabled={+product.stock === 0 && true}
          >
            {+product.stock === 0 ? "Out of Stock" : "Add to Cart"}
          </Button>
        </div>
      </section>
      {/* Details Section */}
      <section>
        <div className="w-full p-4 md:p-10 border">
          <h2 className="text-lg md:text-2xl font-bold mb-4 md:mb-10">
            {product.model} Full Specification
          </h2>
          {product.type === "Laptop" && (
            <LaptopDetail productDetails={product} />
          )}
          {product.type === "PC-Hardware" && (
            <HardwareDetail productDetails={product} />
          )}
          {product.type === "Accessories" && (
            <PeriAndAccesDetail productDetails={product} />
          )}
          {product.type === "Peripherals" && (
            <PeriAndAccesDetail productDetails={product} />
          )}
        </div>
      </section>
    </div>
  );
}

export default Product;
