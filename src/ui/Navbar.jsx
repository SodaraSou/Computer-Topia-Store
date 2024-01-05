import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLaptop,
  faMicrochip,
  faHeadphones,
  faEthernet,
  faBars,
} from "@fortawesome/free-solid-svg-icons";
import { setOpenMenu } from "../pages/user/home/homeslice";

function Navbar() {
  const dispatch = useDispatch();
  const openMenu = useSelector((state) => state.home.openMenu);

  const toggleMenu = () => {
    dispatch(setOpenMenu(!openMenu));
  };
  return (
    <nav className="bg-[#5E17EB] text-white sticky top-0 z-40">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="hidden lg:flex w-full justify-between items-center p-4">
          <div>|</div>
          <div>
            <Link
              to="productList/type/Laptop"
              className="flex items-center gap-4"
              aria-label="Explore our Laptop"
            >
              <FontAwesomeIcon icon={faLaptop} />
              <span className="hidden md:block">Laptop</span>
            </Link>
          </div>
          <div>|</div>
          <div>
            <Link
              to="productList/type/PC-Hardware"
              className="flex items-center gap-4"
              aria-label="Explore our PC-Hardware"
            >
              <FontAwesomeIcon icon={faMicrochip} />
              <span className="hidden md:block">PC-Hardware</span>
            </Link>
          </div>
          <div>|</div>
          <div>
            <Link
              to="productList/type/Peripherals"
              className="flex items-center gap-4"
              aria-label="Explore our Peripherals"
            >
              <FontAwesomeIcon icon={faHeadphones} />
              <span className="hidden md:block">Peripherals</span>
            </Link>
          </div>
          <div>|</div>
          <div>
            <Link
              to="productList/type/Accessories"
              className="flex items-center gap-4"
              aria-label="Explore our Accessories"
            >
              <FontAwesomeIcon icon={faEthernet} />
              <span className="hidden md:block">Accessories</span>
            </Link>
          </div>
          <div>|</div>
        </div>
        <div className="w-full block lg:hidden">
          <div className="flex p-4 justify-between items-center">
            <h1>Categories</h1>
            <button
              id="menu-btn"
              className="hamburger focus:outline-none"
              type="button"
              onClick={toggleMenu}
            >
              <FontAwesomeIcon icon={faBars} />
            </button>
          </div>
          {openMenu && (
            <div
              id="menu"
              className="absolute bg-[#5E17EB] top-14 w-full z-100"
            >
              <div className="flex flex-col">
                <Link to="productList/type/Laptop" className="p-4">
                  <FontAwesomeIcon icon={faLaptop} className="mr-4" />
                  Laptop
                </Link>
                <Link to="productList/type/PC-Hardware" className="p-4">
                  <FontAwesomeIcon icon={faMicrochip} className="mr-4" />
                  PC-Hardware
                </Link>
                <Link to="productList/type/Peripherals" className="p-4">
                  <FontAwesomeIcon icon={faHeadphones} className="mr-4" />
                  Peripherals
                </Link>
                <Link to="productList/type/Accessories" className="p-4">
                  <FontAwesomeIcon icon={faEthernet} className="mr-4" />
                  Accessories
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
