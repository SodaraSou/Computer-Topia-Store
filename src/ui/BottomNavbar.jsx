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
        {/* <li>
          <Link to="/" className="flex items-center">
            <FontAwesomeIcon
              icon={faFilePen}
              className="text-[#5E17EB] w-5 h-5"
            />
          </Link>
        </li> */}
      </ul>
    </div>
  );
}

export default BottomNavbar;
