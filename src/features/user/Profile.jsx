import { useDispatch, useSelector } from "react-redux";
import { useLoaderData, useNavigate } from "react-router-dom";
import { signOutUser, getUser } from "../../services/user.api";
import { getProfile } from "./userSlice";
import { getUserId } from "../../services/user.api";
import EditSvg from "../../assets/svg/pen-to-square-solid.svg";
import ProfileSection from "./components/ProfileSection";
import Address from "./components/Address";
import Payment from "./components/Payment";
import OrderHistory from "./components/OrderHistory";

function Profile() {
  const dispatch = useDispatch();
  const userProfileData = useLoaderData();
  dispatch(getProfile(userProfileData));

  const userProfile = useSelector((state) => state.user.userProfile);
  const navigate = useNavigate();
  const logOut = (e) => {
    e.preventDefault();
    const logoutStatus = signOutUser();
    if (logoutStatus) {
      navigate("/signin");
    }
  };
  return (
    <section className="p-4 xl:py-10 xl:px-0">
      {/* {loading && <Spinner />} */}
      <div className="w-full md:max-w-[1000px] mx-auto flex flex-col gap-4 md:gap-10">
        {/* Profile Section */}
        <ProfileSection
          editSvg={EditSvg}
          logOut={logOut}
          userProfile={userProfile}
        />
        {/* Address and Payment Section */}
        <div className="flex flex-col md:flex-row gap-4 md:gap-10">
          <Address editSvg={EditSvg} />
          <Payment editSvg={EditSvg} />
        </div>
        {/* Order History */}
        <OrderHistory />
      </div>
    </section>
  );
}

export const loader = async () => {
  const userId = await getUserId();
  if (userId) {
    const data = await getUser(userId);
    return data;
  }
  return null;
};

export default Profile;
