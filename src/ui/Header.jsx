import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartPlus, faUser } from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faInstagram,
  faTelegram,
} from "@fortawesome/free-brands-svg-icons";
import { setDropdownVisible, setQuery } from "../pages/user/home/homeslice";
import Logo from "../assets/img/Logo 240 x 56.webp";

function Header() {
  const dispatch = useDispatch();
  const searchBoxRef = useRef();
  const productList = useSelector((state) => state.home.listProduct);
  const totalItem = useSelector((state) => state.cart.totalCartItem);
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
  return (
    <header className="flex flex-col">
      <div className="bg-[#EAECF6]">
        <div className="max-w-7xl mx-auto p-2 flex justify-between">
          <div className="flex items-center gap-2">
            <span>Follow</span>
            <FontAwesomeIcon icon={faFacebook} className="text-[#5E17EB]" />
            <FontAwesomeIcon icon={faInstagram} className="text-[#5E17EB]" />
            <FontAwesomeIcon icon={faTelegram} className="text-[#5E17EB]" />
          </div>
          <div className="flex items-center gap-4">
            <Link
              to="/profile"
              className="flex flex-row items-center gap-2"
              aria-label="View your profile"
            >
              <FontAwesomeIcon icon={faUser} className="text-[#5E17EB]" />
            </Link>
            <span>
              <button>EN</button> | <button>KH</button>
            </span>
          </div>
        </div>
      </div>
      <div className="w-full max-w-7xl mx-auto flex flex-col md:flex-row justify-between p-4 gap-4 md:gap-8 bg-white">
        <div className="flex justify-between items-center">
          <Link to="/">
            <img src={Logo} alt="Logo" className="w-[200px] md:w-full" />
          </Link>
          <Link
            to="/cart"
            className="flex flex-row md:hidden items-center"
            aria-label="View your Shopping Cart"
          >
            <div className="relative">
              <FontAwesomeIcon icon={faCartPlus} className="text-[#5E17EB]" />
              {totalItem > 0 && (
                <span className="absolute top-[-6px] right-[-6px] w-3 h-3 p-2 bg-red-500 rounded-full flex items-center justify-center text-white text-xs">
                  {totalItem}
                </span>
              )}
            </div>
          </Link>
        </div>
        <div className="flex items-center gap-4 text-lg">
          <div className="relative w-full" ref={searchBoxRef}>
            <input
              type="text"
              onFocus={handleFocus}
              value={query}
              onChange={onChange}
              className="w-full md:w-[347px] h-[38px] bg-[#EAECF6] rounded-xl px-4 py-2 border focus:outline-none focus:ring focus:border-[#5E17EB]"
              placeholder="Search Product"
            />
            {dropdownVisible && (
              <div className="absolute z-50 top-[50px] w-full md:w-[347px] bg-white border rounded-xl p-4 flex flex-col">
                {products.length !== 0 ? (
                  products.slice(0, 4).map((product) => (
                    <Link
                      to={`/product/${product.id}`}
                      key={product.id}
                      className="p-4"
                    >
                      {product.data.model}
                    </Link>
                  ))
                ) : (
                  <p className="text-center">No Product Found</p>
                )}
              </div>
            )}
          </div>
          <Link to="/cart" className="hidden md:flex flex-row items-center">
            <div className="relative">
              <FontAwesomeIcon icon={faCartPlus} className="text-[#5E17EB]" />
              {totalItem > 0 && (
                <span className="absolute top-[-6px] right-[-6px] w-3 h-3 p-2 bg-red-500 rounded-full flex items-center justify-center text-white text-xs">
                  {totalItem}
                </span>
              )}
            </div>
          </Link>
        </div>
      </div>
    </header>
  );
}

export default Header;
