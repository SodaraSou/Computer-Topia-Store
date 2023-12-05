import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import {
  getCartListItem,
  setCartTotalPrice,
  setTotalCartItem,
  setLoading,
} from "./cartSlice";
import {
  getListItemFromCart,
  removeItemFromCart,
} from "../../services/order.api";
import CartItem from "./components/CartItem";
import Spinner from "../../ui/Spinner";

function Cart() {
  const dispatch = useDispatch();
  const listProduct = useSelector((state) => state.cart.cartListItem);
  const totalPrice = useSelector((state) => state.cart.totalCartPrice);
  const totalItem = useSelector((state) => state.cart.totalCartItem);
  const loading = useSelector((state) => state.cart.loading);

  useEffect(() => {
    dispatch(setLoading(true));
    const unsubscribe = getListItemFromCart((data) => {
      dispatch(getCartListItem(data.items));
      dispatch(setCartTotalPrice(data.totalPrice));
      dispatch(setTotalCartItem());
    });
    return () => unsubscribe;
  }, [dispatch]);

  // const [quantity, setQuantity] = useState(1);
  // const handleQuantity = (quantityReturn) => {
  //   setQuantity(quantityReturn);
  // };
  const handleRemove = async (productId, quantity, price) => {
    await removeItemFromCart(
      productId,
      listProduct,
      quantity,
      price,
      totalPrice
    );
  };
  return (
    <section className="p-4 md:p-10">
      <div className="max-w-[1000px] mx-auto border border-[#D9D9D9] rounded-2xl p-4 xl:p-10">
        <div className="flex justify-between items-center mb-10">
          <h1 className="text-2xl md:text-4xl font-bold">My Cart</h1>
          <h2 className="text-xl md:text-2xl font-bold">
            {totalItem} Item{totalItem > 1 && <span>s</span>}
          </h2>
        </div>
        <div className="h-[1px] bg-[#D9D9D9] my-5"></div>
        {loading ? (
          <div className="w-full mx-auto p-10 flex justify-center items-center">
            <Spinner />
          </div>
        ) : listProduct.length !== 0 ? (
          <div className="flex flex-col gap-10">
            {listProduct.map((item) => (
              <CartItem
                key={item.productId}
                item={item}
                handleRemove={handleRemove}
              />
            ))}
          </div>
        ) : (
          <div className="w-full flex flex-col justify-center items-center gap-4 p-10">
            <FontAwesomeIcon
              icon={faCartShopping}
              className="text-[#5E17EB] w-10 h-10"
            />
            <p className="text-xl md:text-2xl font-semibold">
              No Items In Cart
            </p>
            <Link
              to="/"
              className="rounded-xl bg-[#5E17EB] text-white px-4 md:px-2 py-2 md:h-10 md:w-28 font-semibold text-center"
            >
              Shop Now
            </Link>
          </div>
        )}
        <div className="h-[1px] bg-[#D9D9D9] my-5"></div>
        <div className="flex flex-col gap-2 items-end justify-center">
          <p className="text-lg font-semibold">
            {listProduct.length !== 0 ? (
              <span>${totalPrice}</span>
            ) : (
              <span>$0</span>
            )}
          </p>
          <Link
            to={listProduct.length === 0 ? "/cart" : "/checkout"}
            className="rounded-xl bg-[#5E17EB] text-white px-4 md:px-2 py-2 md:h-10 md:w-28 font-semibold text-center"
          >
            Checkout
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Cart;
