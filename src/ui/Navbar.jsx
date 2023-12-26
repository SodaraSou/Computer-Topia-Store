import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCartPlus,
  faUser,
  faMagnifyingGlass,
  faLaptop,
  faMicrochip,
  faHeadphones,
  faEthernet,
} from "@fortawesome/free-solid-svg-icons";

function Navbar() {
  return (
    <nav className="bg-[#5E17EB] text-white p-4 xl:py-4 xl:px-0 sticky top-0 z-40">
      <ul className="max-w-7xl mx-auto flex justify-between items-center">
        |
        <li>
          <Link
            to="productList/type/Laptop"
            className="flex items-center gap-4"
          >
            <FontAwesomeIcon icon={faLaptop} />
            <span className="hidden md:block">Laptop</span>
          </Link>
        </li>
        |
        <li>
          <Link
            to="productList/type/PC-Hardware"
            className="flex items-center gap-4"
          >
            <FontAwesomeIcon icon={faMicrochip} />
            <span className="hidden md:block">PC-Hardware</span>
          </Link>
        </li>
        |
        <li>
          <Link
            to="productList/type/Peripherals"
            className="flex items-center gap-4"
          >
            <FontAwesomeIcon icon={faHeadphones} />
            <span className="hidden md:block">Peripherals</span>
          </Link>
        </li>
        |
        <li>
          <Link
            to="productList/type/Accessories"
            className="flex items-center gap-4"
          >
            <FontAwesomeIcon icon={faEthernet} />
            <span className="hidden md:block">Accessories</span>
          </Link>
        </li>
        |
      </ul>
    </nav>
  );
}

export default Navbar;
