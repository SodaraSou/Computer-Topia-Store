import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGauge,
  faBox,
  faBoxesPacking,
  faUser,
  faFilePen,
} from "@fortawesome/free-solid-svg-icons";

function BottomNavbar() {
  return (
    <div className="block xl:hidden bg-[#EAECF6] p-4 md:p-6 fixed bottom-0 left-0 w-full">
      <ul className="flex justify-between">
        <li>
          <Link to="/" className="flex items-center">
            <FontAwesomeIcon
              icon={faGauge}
              className="text-[#5E17EB] w-5 h-5"
            />
          </Link>
        </li>
        <li>
          <Link to="/product" className="flex items-center">
            <FontAwesomeIcon icon={faBox} className="text-[#5E17EB] w-5 h-5" />
          </Link>
        </li>
        <li>
          <Link to="/order" className="flex items-center">
            <FontAwesomeIcon
              icon={faBoxesPacking}
              className="text-[#5E17EB] w-5 h-5"
            />
          </Link>
        </li>
        <li>
          <Link to="/user" className="flex items-center">
            <FontAwesomeIcon icon={faUser} className="text-[#5E17EB] w-5 h-5" />
          </Link>
        </li>
        <li>
          <Link to="/report" className="flex items-center">
            <FontAwesomeIcon
              icon={faFilePen}
              className="text-[#5E17EB] w-5 h-5"
            />
          </Link>
        </li>
        {/* <li>
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
        </li> */}
      </ul>
    </div>
  );
}

export default BottomNavbar;
