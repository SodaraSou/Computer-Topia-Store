import { useEffect, useState } from "react";
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
import OrderSection from "./components/OrderSection";
import OrderHistory from "./components/OrderHistory";
import Address from "./components/Address";
import Payment from "./components/Payment";
import Spinner from "../../../ui/Spinner";

function Profile({ setMainLoading }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userProfile = useSelector((state) => state.user.userProfile);
  const userOrderList = useSelector((state) => state.user.userOrderList);
  const loading = useSelector((state) => state.user.loading);
  const [section, setSection] = useState("Profile");
  const selectSection = (selectedSection) => {
    setSection(selectedSection);
  };
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
  let selectedComponent;
  switch (section) {
    case "Profile":
      selectedComponent = (
        <ProfileSection
          editSvg={EditSvg}
          logOut={logOut}
          userProfile={userProfile}
        />
      );
      break;
    case "Order":
      selectedComponent = (
        <OrderSection orderList={userOrderList} loading={loading} />
      );
      break;
    case "Order History":
      selectedComponent = <OrderHistory orderList={userOrderList} />;
      break;
    default:
      selectedComponent = (
        <>
          <ProfileSection
            editSvg={EditSvg}
            logOut={logOut}
            userProfile={userProfile}
          />
        </>
      );
  }
  return (
    <section className="p-4 md:py-10 max-w-7xl mx-auto">
      <div className="w-full hidden lg:flex flex-col lg:flex-row gap-4 md:gap-10">
        <ul className="w-full lg:w-1/5 flex flex-col gap-4 font-semibold">
          <li className="text-xl">
            <button onClick={() => selectSection("Profile")}>Profile</button>
          </li>
          <li className="text-xl">
            <button onClick={() => selectSection("Order")}>Order</button>
          </li>
          <li className="text-xl">
            <button onClick={() => selectSection("Order History")}>
              Order History
            </button>
          </li>
        </ul>
        <div className="w-full lg:w-4/5 flex flex-col gap-4">
          {selectedComponent}
        </div>
      </div>
      <div className="flex flex-col lg:hidden gap-4">
        <ProfileSection
          editSvg={EditSvg}
          logOut={logOut}
          userProfile={userProfile}
        />
        <Address editSvg={EditSvg} userProfile={userProfile} />
        <Payment editSvg={EditSvg} userProfile={userProfile} />
        <OrderSection orderList={userOrderList} loading={loading} />
        <OrderHistory orderList={userOrderList} />
      </div>
    </section>
  );
}

export default Profile;
