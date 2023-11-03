import { useDispatch, useSelector } from "react-redux";
import { useLoaderData, useNavigate } from "react-router-dom";
import {
  signOutUser,
  getUser,
  getUserId,
  getUserOrderHistoryList,
} from "../../services/user.api";
import { getProfile, getOrderHistoryList } from "./userSlice";
import EditSvg from "../../assets/svg/pen-to-square-solid.svg";
import ProfileSection from "./components/ProfileSection";
import Address from "./components/Address";
import Payment from "./components/Payment";
import OrderSection from "./components/OrderSection";
import OrderHistory from "./components/OrderHistory";

function Profile() {
  const dispatch = useDispatch();
  const { profileData, orderHistoryListData } = useLoaderData();
  dispatch(getProfile(profileData));
  dispatch(getOrderHistoryList(orderHistoryListData));

  const userProfile = useSelector((state) => state.user.userProfile);
  const userOrderHistoryList = useSelector(
    (state) => state.user.userOrderHistoryList
  );
  const navigate = useNavigate();
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
        {/* Profile Section */}
        <div className="flex flex-col md:flex-row gap-4 md:gap-10">
          <ProfileSection
            editSvg={EditSvg}
            logOut={logOut}
            userProfile={userProfile}
          />
          <OrderSection />
        </div>
        {/* Address and Payment Section */}
        <div className="flex flex-col md:flex-row gap-4 md:gap-10">
          <Address editSvg={EditSvg} userProfile={userProfile} />
          <Payment editSvg={EditSvg} userProfile={userProfile} />
        </div>
        {/* Order History */}
        {/* <div className="flex flex-col md:flex-row gap-4 md:gap-10"> */}
          <OrderHistory orderHistoryList={userOrderHistoryList} />
        {/* </div> */}
      </div>
    </section>
  );
}

export const loader = async () => {
  const userId = await getUserId();
  if (userId) {
    const [profileData, orderHistoryListData] = await Promise.all([
      getUser(userId),
      getUserOrderHistoryList(userId),
    ]);
    return { profileData, orderHistoryListData };
  }
  return null;
};

export default Profile;
