import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useLoaderData } from "react-router-dom";
import {
  signOutUser,
  getUser,
  getUserOrderList,
  getUserOrderHistoryList,
  getUserId,
} from "../../services/user.api";
import {
  setProfile,
  setOrderList,
  setOrderListHistory,
  setLoading,
} from "./userSlice";
import EditSvg from "../../assets/svg/pen-to-square-solid.svg";
import ProfileSection from "./components/ProfileSection";
import Address from "./components/Address";
import Payment from "./components/Payment";
import OrderSection from "./components/OrderSection";
import OrderHistory from "./components/OrderHistory";

function Profile() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  // const user = useLoaderData();
  const userProfile = useSelector((state) => state.user.userProfile);
  const userOrderHistoryList = useSelector(
    (state) => state.user.userOrderHistoryList
  );
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
    const unsubscribeGetOrderListHistory = getUserOrderHistoryList((data) => {
      dispatch(setOrderListHistory(data));
    });
    return () => {
      unsubscribeGetUser,
        unsubscribeGetOrderList,
        unsubscribeGetOrderListHistory;
    };
  }, [dispatch]);

  const logOut = () => {
    const response = signOutUser();
    if (response) {
      navigate("/signin");
    }
  };
  return (
    <section className="p-4 xl:py-10 xl:px-0">
      <div className="w-full md:max-w-[1000px] mx-auto flex flex-col gap-4 md:gap-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-10">
          <ProfileSection
            editSvg={EditSvg}
            logOut={logOut}
            userProfile={userProfile}
            loading={loading}
          />
          <OrderSection orderList={userOrderList} loading={loading} />
          <Address
            editSvg={EditSvg}
            userProfile={userProfile}
            loading={loading}
          />
          <Payment
            editSvg={EditSvg}
            userProfile={userProfile}
            loading={loading}
          />
          <OrderHistory
            orderHistoryList={userOrderHistoryList}
            loading={loading}
          />
        </div>
      </div>
    </section>
  );
}

// export const loader = async () => {
//   const userId = await getUserId();
//   const user = await getUser(userId);
//   return user;
// };

export default Profile;
