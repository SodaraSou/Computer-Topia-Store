import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { setProduct, setLoading } from "./productSlice";
import { getProductById } from "../../../services/product.api";
import { addItemToCart } from "../../../services/order.api";
import { formatCurrency } from "../../../utils/helpers";
import { setDropdownVisible, setQuery } from "../home/homeslice";
import StockImg from "../../assets/img/Computer_Topia_Stock_Img.png";
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
    const { model, price, productImgs } = product;
    const reponse = await addItemToCart(
      productId,
      productImgs[0],
      model,
      price,
      quantity
    );
    if (reponse) {
      navigate("/signIn");
    }
  };
  if (loading) {
    return <Spinner fullScreenSpinner={true} />;
  }
  return (
    <div className="max-w-7xl mx-auto p-4 xl:py-10 xl:px-0">
      {/* Main Product Section */}
      <section className="flex flex-col md:flex-row gap-10 mb-10">
        <img
          src={
            product && product.productImgs && product.productImgs.length > 0
              ? product.productImgs[0]
              : StockImg
          }
          alt="stock_img"
          className="w-full h-[398px] md:w-1/2 md:h-[385.5px] lg:h-[467.55px] xl:h-[620.03px] border"
        />
        <div className="w-full md:w-1/2">
          <h1 className="text-2xl md:text-4xl font-bold mb-5">
            {product.model}
          </h1>
          <hr className="mb-5" />
          <h1 className="text-2xl md:text-4xl font-bold mb-5">
            {priceToDisplay}
          </h1>
          <hr className="mb-5" />
          {/* {product.color.length !== 0 && (
            <>
              <h2 className="text-2xl font-bold mb-5">Choose a Color</h2>
              <div className="flex gap-5 mb-5">
                {product.color.map((color) => (
                  <div
                    className={`bg-${color.toLowerCase()} w-[50px] h-[50px] xl:w-[75px] xl:h-[75px] rounded-full border`}
                  ></div>
                ))}
              </div>
              <hr className="mb-5" />
            </>
          )} */}
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
