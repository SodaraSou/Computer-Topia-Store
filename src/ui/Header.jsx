import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
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
import {
  faFacebook,
  faInstagram,
  faTelegram,
  faXTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { setDropdownVisible, setQuery } from "../features/home/homeslice";
import Logo from "../assets/img/Logo 240 x 56.png";

function Header({ totalItem }) {
  const dispatch = useDispatch();
  const searchBoxRef = useRef();
  const productList = useSelector((state) => state.home.listProduct);
  const dropdownVisible = useSelector((state) => state.home.dropdownVisible);
  const query = useSelector((state) => state.home.query);
  const [products, setProducts] = useState([]);
  useEffect(() => {
    setProducts(productList);
    const handler = (e) => {
      if (searchBoxRef.current && !searchBoxRef.current.contains(e.target)) {
        dispatch(setDropdownVisible(false));
      }
    };
    const escHandler = (e) => {
      if (e.key === "Escape") {
        dispatch(setDropdownVisible(false));
      }
    };
    document.addEventListener("mousedown", handler);
    document.addEventListener("keydown", escHandler);
    return () => {
      document.removeEventListener("mousedown", handler);
      document.removeEventListener("keydown", escHandler);
    };
  }, [productList]);
  const handleFocus = () => {
    dispatch(setDropdownVisible(true));
  };
  const onChange = (e) => {
    const value = e.target.value;
    dispatch(setQuery(value));
    handleQuery(value);
  };
  const handleQuery = (newQuery) => {
    if (query === "") {
      setProducts(productList);
    } else {
      const queryProduct = productList.filter((product) => {
        return product.data.model
          .toLocaleLowerCase()
          .includes(newQuery.toLocaleLowerCase());
      });
      setProducts(queryProduct);
    }
  };
  // sticky top-0 z-40
  return (
    <header className="flex flex-col">
      <div className="bg-[#EAECF6]">
        <div className="max-w-7xl mx-auto p-2 xl:py-2 xl:px-0 flex justify-between">
          <div className="flex items-center gap-2">
            <span>Follow</span>
            <FontAwesomeIcon icon={faFacebook} className="text-[#5E17EB]" />
            <FontAwesomeIcon icon={faInstagram} className="text-[#5E17EB]" />
            <FontAwesomeIcon icon={faTelegram} className="text-[#5E17EB]" />
            <FontAwesomeIcon icon={faXTwitter} className="text-[#5E17EB]" />
          </div>
          <div className="flex items-center gap-4">
            <Link to="/profile" className="flex flex-row items-center gap-2">
              <FontAwesomeIcon icon={faUser} className="text-[#5E17EB]" />
            </Link>
            <span>
              <button>EN</button> | <button>KH</button>
            </span>
          </div>
        </div>
      </div>
      <div className="w-full max-w-7xl mx-auto flex flex-col md:flex-row justify-between p-4 xl:px-0 xl:py-6 gap-4 md:gap-8 bg-white">
        <Link to="/">
          <img src={Logo} alt="Logo" />
        </Link>
        <div className="flex items-center gap-4 text-lg">
          <div className="relative w-full" ref={searchBoxRef}>
            <input
              type="text"
              value={query}
              onFocus={handleFocus}
              onChange={onChange}
              className="w-full md:w-[347px] h-[38px] bg-[#EAECF6] rounded-xl px-4 py-2 border focus:outline-none focus:ring focus:border-[#5E17EB]"
              placeholder="Search Product"
            />
            {dropdownVisible && (
              <div className="absolute top-[50px] w-[347px] bg-white border rounded-xl p-4 flex flex-col">
                {products.slice(0, 4).map((product) => (
                  <Link
                    to={`/product/${product.id}`}
                    key={product.id}
                    className="p-4"
                  >
                    {product.data.model}
                  </Link>
                ))}
              </div>
            )}
            <button className="svg-size absolute top-[6px] right-4">
              <FontAwesomeIcon
                icon={faMagnifyingGlass}
                className="text-[#5E17EB]"
              />
            </button>
          </div>
          {/* <ul> */}
          {/* <li className="flex items-center"> */}
          <Link to="/cart" className="flex flex-row items-center">
            <div className="relative">
              <FontAwesomeIcon icon={faCartPlus} className="text-[#5E17EB]" />
              {totalItem > 0 && (
                <span className="absolute top-[-6px] right-[-6px] w-3 h-3 p-2 bg-red-500 rounded-full flex items-center justify-center text-white text-xs">
                  {totalItem}
                </span>
              )}
            </div>
          </Link>
          {/* </li> */}
          {/* <li className="flex items-center">
              <Link to="/profile" className="flex flex-row items-center gap-2">
                <FontAwesomeIcon icon={faUser} className="text-[#5E17EB]" />
                <span className="hidden md:block font-semibold">Account</span>
              </Link>
            </li> */}
          {/* </ul> */}
        </div>
      </div>
      <div className="bg-[#5E17EB] text-white p-4 xl:py-4 xl:px-0">
        <ul className="max-w-7xl mx-auto flex justify-between">
          |
          <li className="flex items-center gap-4">
            <FontAwesomeIcon icon={faLaptop} />
            <Link to="productList/type/Laptop" className="hidden md:block">
              Laptop
            </Link>
          </li>
          |
          <li className="flex items-center gap-4">
            <FontAwesomeIcon icon={faMicrochip} />
            <Link to="productList/type/PC-Hardware" className="hidden md:block">
              PC-Hardware
            </Link>
          </li>
          |
          <li className="flex items-center gap-4">
            <FontAwesomeIcon icon={faHeadphones} />
            <Link to="productList/type/Peripherals" className="hidden md:block">
              Peripherals
            </Link>
          </li>
          |
          <li className="flex items-center gap-4">
            <FontAwesomeIcon icon={faEthernet} />
            <Link to="productList/type/Accessories" className="hidden md:block">
              Accessories
            </Link>
          </li>
          |
        </ul>
      </div>
    </header>
  );
}

export default Header;
