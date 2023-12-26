import { Link, useNavigate } from "react-router-dom";
// import { signOutUser } from "../contexts/user/UserAction";
import { signOutUser } from "../../services/user.api";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGauge,
  faBox,
  faBoxesPacking,
  faUser,
  faFilePen,
  faRightFromBracket,
} from "@fortawesome/free-solid-svg-icons";
import Logo from "../assets/img/Logo 150 x 100.png";

function Sidebar({ handleUser }) {
  const navigate = useNavigate();
  const logOut = () => {
    const response = signOutUser();
    handleUser();
    if (response) {
      navigate("/");
    }
  };
  return (
    <div className="bg-[#EAECF6] p-4 md:p-10 h-screen hidden xl:flex flex-col gap-10">
      <Link to="/" className="flex justify-center">
        <img src={Logo} alt="Logo" className="hidden md:block" />
      </Link>
      <ul className="flex flex-col gap-10 font-semibold text-xl">
        <li>
          <Link to="/" className="flex items-center gap-4">
            <FontAwesomeIcon
              icon={faGauge}
              className="text-[#5E17EB] w-5 h-5"
            />
            <span className="hidden md:block">Dashboard</span>
          </Link>
        </li>
        <li>
          <Link to="/admin/product" className="flex items-center gap-4">
            <FontAwesomeIcon icon={faBox} className="text-[#5E17EB] w-5 h-5" />
            <span className="hidden md:block">Product</span>
          </Link>
        </li>
        <li>
          <Link to="/admin/order" className="flex items-center gap-4">
            <FontAwesomeIcon
              icon={faBoxesPacking}
              className="text-[#5E17EB] w-5 h-5"
            />
            <span className="hidden md:block">Order</span>
          </Link>
        </li>
        <li>
          <Link to="/admin/user" className="flex items-center gap-4">
            <FontAwesomeIcon icon={faUser} className="text-[#5E17EB] w-5 h-5" />
            <span className="hidden md:block">User</span>
          </Link>
        </li>
        <li>
          <Link to="/admin/report" className="flex items-center gap-4">
            <FontAwesomeIcon
              icon={faFilePen}
              className="text-[#5E17EB] w-5 h-5"
            />
            <span className="hidden md:block">Report</span>
          </Link>
        </li>
        <li>
          <button onClick={logOut} className="w-full">
            <div className="hidden md:flex justify-center items-center bg-[#5E17EB] p-2 h-10 gap-2 rounded-xl">
              <FontAwesomeIcon
                icon={faRightFromBracket}
                className="text-white w-5 h-5"
              />
              <span className="text-white text-base">Log Out</span>
            </div>
            <FontAwesomeIcon
              icon={faRightFromBracket}
              className="block md:hidden text-[#5E17EB] w-5 h-5"
            />
          </button>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;
