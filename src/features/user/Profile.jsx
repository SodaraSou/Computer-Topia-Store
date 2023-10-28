import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { signOutUser, getUser } from "../../services/user.api";
import { getProfile } from "./userSlice";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../../firebase.config";
import EditSvg from "../../assets/svg/pen-to-square-solid.svg";
import ProfileSection from "./components/ProfileSection";
import Address from "./components/Address";
import Payment from "./components/Payment";
import OrderHistory from "./components/OrderHistory";
import Admin from "../admin/Admin";

function Profile() {
  const dispatch = useDispatch();
  const userRole = useSelector((state) => state.user.userProfile.role);
  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        onAuthStateChanged(auth, async (user) => {
          if (user) {
            const userId = user.uid;
            const data = await getUser(userId);
            dispatch(getProfile(data));
          } else {
            console.log("No user is currently authenticated");
          }
        });
      } catch (error) {
        console.error(error);
      }
    };
    fetchUserProfile();
  }, []);
  const navigate = useNavigate();
  const logOut = (e) => {
    e.preventDefault();
    const logoutStatus = signOutUser();
    if (logoutStatus) {
      navigate("/signin");
    }
  };
  if (userRole === "admin") return <Admin logOut={logOut} />;
  return (
    <section className="p-4 xl:py-10 xl:px-0">
      <div className="w-full md:max-w-[1000px] mx-auto flex flex-col gap-4 md:gap-10">
        {/* Profile Section */}
        <ProfileSection editSvg={EditSvg} logOut={logOut} />
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

export default Profile;

// export const loader = async () => {
//   const userRole = () => {
//     onAuthStateChanged(auth, (user) => {
//       if (user) {
//         return user.uid;
//       }
//     });
//   };
//   console.log(userRole());
//   const data = await getUser(userRole());
//   return data;
// };
