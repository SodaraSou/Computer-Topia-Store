import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { getListItemFromCart, checkout } from "../../services/order.api";
import {
  setCheckoutList,
  setTotalCheckoutPrice,
  setLoading,
} from "./checkoutSlice";
import { getUser } from "../../services/user.api";
import { setProfile } from "../user/userSlice";
import CheckoutItem from "./components/CheckoutItem";
import CheckoutSidebar from "./components/CheckoutSidebar";
import Spinner from "../../ui/Spinner";

function Checkout() {
  const dispatch = useDispatch();
  // const navigate = useNavigate();
  const userProfile = useSelector((state) => state.user.userProfile);
  const checkoutList = useSelector((state) => state.checkout.checkoutList);
  const checkoutPrice = useSelector(
    (state) => state.checkout.totalCheckoutPrice
  );
  const loading = useSelector((state) => state.checkout.loading);
  useEffect(() => {
    dispatch(setLoading());
    const unsubscribeGetUser = getUser((data) => {
      dispatch(setProfile(data));
    });
    const unsubscribe = getListItemFromCart((data) => {
      dispatch(setCheckoutList(data.items));
      dispatch(setTotalCheckoutPrice(data.totalPrice));
    });
    return () => {
      unsubscribe;
      unsubscribeGetUser;
    };
  }, [dispatch]);
  // const [fullLoading, setFullLoading] = useState(false);
  // const handleCheckout = async () => {
  //   setFullLoading(true);
  //   const response = await checkout(checkoutList, checkoutPrice);
  //   setFullLoading(false);
  //   if (response) {
  //     navigate("/");
  //   }
  // };
  if (loading) {
    return <Spinner fullScreenSpinner={true} />;
  }
  return (
    <section className="p-4 xl:py-10 xl:px-0">
      <div className="w-full flex flex-col lg:flex-row gap-4 md:gap-10">
        <div className="w-full lg:w-4/6 flex flex-col gap-4 md:gap-10">
          {/* Review item section */}
          <div className="w-full flex flex-col gap-4 p-4 md:p-10 border ">
            <h1 className="text-2xl font-bold">Review Items</h1>
            <div className="h-[1px] bg-[#D9D9D9]"></div>
            {loading ? (
              <div className="w-full mx-auto p-10 flex justify-center items-center">
                <Spinner />
              </div>
            ) : checkoutList.length !== 0 ? (
              <div className="flex flex-col gap-10">
                {checkoutList.map((item) => (
                  <CheckoutItem key={item.productId} item={item} />
                ))}
              </div>
            ) : (
              <div className="w-full flex flex-col justify-center items-center p-10">
                <FontAwesomeIcon
                  icon={faCartShopping}
                  className="text-[#5E17EB] w-10 h-10"
                />
                <p className="text-xl md:text-2xl">No Items To Checkout</p>
              </div>
            )}
          </div>
        </div>
        {/* Order summary section */}
        <CheckoutSidebar
          checkoutPrice={checkoutPrice}
          checkoutList={checkoutList}
          userProfile={userProfile}
        />
      </div>
    </section>
  );
}

export default Checkout;
