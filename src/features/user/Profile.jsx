import { useDispatch, useSelector } from "react-redux";
import { useLoaderData, useNavigate } from "react-router-dom";
import {
  signOutUser,
  getUser,
  getUserId,
  getUserOrderList,
  getUserOrderHistoryList,
} from "../../services/user.api";
import { getProfile, getOrderList, getOrderHistoryList } from "./userSlice";
import EditSvg from "../../assets/svg/pen-to-square-solid.svg";
import ProfileSection from "./components/ProfileSection";
import Address from "./components/Address";
import Payment from "./components/Payment";
import OrderSection from "./components/OrderSection";
import OrderHistory from "./components/OrderHistory";

function Profile() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { profileData, orderListData, orderHistoryListData } = useLoaderData();

  dispatch(getProfile(profileData));
  dispatch(getOrderList(orderListData));
  dispatch(getOrderHistoryList(orderHistoryListData));

  const userProfile = useSelector((state) => state.user.userProfile);
  const userOrderHistoryList = useSelector(
    (state) => state.user.userOrderHistoryList
  );
  const userOrderList = useSelector((state) => state.user.userOrderList);

  const logOut = () => {
    const response = signOutUser();
    if (response) {
      navigate("/signin");
    }
  };
  return (
    <section className="p-4 xl:py-10 xl:px-0">
      {/* {loading && <Spinner />} */}
      <div className="w-full md:max-w-[1000px] mx-auto flex flex-col gap-4 md:gap-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-10">
          <ProfileSection
            editSvg={EditSvg}
            logOut={logOut}
            userProfile={userProfile}
          />
          <OrderSection orderList={userOrderList} />
          <Address editSvg={EditSvg} userProfile={userProfile} />
          <Payment editSvg={EditSvg} userProfile={userProfile} />
          <OrderHistory orderHistoryList={userOrderHistoryList} />
        </div>
      </div>
    </section>
  );
}

export const loader = async () => {
  const userId = await getUserId();
  if (userId) {
    const [profileData, orderListData, orderHistoryListData] =
      await Promise.all([
        getUser(userId),
        getUserOrderList(userId),
        getUserOrderHistoryList(userId),
      ]);
    return { profileData, orderListData, orderHistoryListData };
  }
  return null;
};

export default Profile;
