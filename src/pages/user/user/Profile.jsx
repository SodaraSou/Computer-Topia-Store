import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  signOutUser,
  getUser,
  getUserOrderList,
} from "../../../services/user.api";
import { setProfile, setOrderList, setLoading } from "./userSlice";
import { setCartWhenLogOut } from "../cart/cartSlice";
import EditSvg from "../../../assets/svg/pen-to-square-solid.svg";
import ProfileSection from "./components/ProfileSection";
import Address from "./components/Address";
import Payment from "./components/Payment";
import OrderSection from "./components/OrderSection";
import OrderHistory from "./components/OrderHistory";
import Spinner from "../../../ui/Spinner";

function Profile({ setMainLoading }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userProfile = useSelector((state) => state.user.userProfile);
  const userOrderList = useSelector((state) => state.user.userOrderList);
  const loading = useSelector((state) => state.user.loading);
  useEffect(() => {
    dispatch(setLoading());
    const unsubscribeGetUser = getUser((data) => {
      dispatch(setProfile(data));
    });
    const unsubscribeGetOrderList = getUserOrderList((data) => {
      dispatch(setOrderList(data));
    });
    return () => {
      unsubscribeGetUser;
      unsubscribeGetOrderList;
    };
  }, [dispatch]);
  const logOut = () => {
    dispatch(setCartWhenLogOut());
    setMainLoading(true);
    const response = signOutUser();
    setMainLoading(false);
    if (response) {
      navigate("/authentication");
    }
  };
  if (loading) {
    return <Spinner fullScreenSpinner={true} />;
  }
  return (
    <section className="p-4 xl:py-10 xl:px-0">
      <div className="w-full md:max-w-[1000px] mx-auto flex flex-col gap-4 md:gap-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-10">
          <ProfileSection
            editSvg={EditSvg}
            logOut={logOut}
            userProfile={userProfile}
          />
          <OrderSection orderList={userOrderList} loading={loading} />
          <Address editSvg={EditSvg} userProfile={userProfile} />
          <Payment editSvg={EditSvg} userProfile={userProfile} />
          <OrderHistory orderList={userOrderList} />
        </div>
      </div>
    </section>
  );
}

export default Profile;
