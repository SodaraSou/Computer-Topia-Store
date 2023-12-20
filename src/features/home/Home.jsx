import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLaptop,
  faMicrochip,
  faHeadphones,
  faEthernet,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import StockImg from "../../assets/img/Computer_Topia_Stock_Img.png";
import ProductList from "../../ui/ProductList";
import ProductItem from "../../ui/ProductItem";
import DropdownButton from "../../ui/shared/DropdownButton";
import Spinner from "../../ui/Spinner";
import Swiper from "swiper";
import "swiper/css/bundle";

function Home() {
  const swiper = new Swiper(".swiper", {
    direction: "horizontal",
    loop: true,
    autoplay: {
      delay: 5000,
    },
    pagination: {
      el: ".swiper-pagination",
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    scrollbar: {
      el: ".swiper-scrollbar",
    },
  });
  const type = [
    { id: 1, type: "Laptop", icon: faLaptop },
    { id: 2, type: "PC-Hardware", icon: faMicrochip },
    { id: 3, type: "Peripherals", icon: faHeadphones },
    { id: 4, type: "Accessories", icon: faEthernet },
  ];
  const price = [
    { id: 1, type: "Highest Price" },
    { id: 2, type: "Lowest Price" },
  ];
  const brand = [
    { id: 1, brand: "APPLE", img: null },
    { id: 2, brand: "ASUS", img: null },
    { id: 3, brand: "TUF-GAMING", img: null },
    { id: 4, brand: "ROG", img: null },
    { id: 5, brand: "LENOVO", img: null },
    { id: 6, brand: "GIGABYTE", img: null },
    { id: 7, brand: "MICROSOFT", img: null },
    { id: 8, brand: "DELL", img: null },
  ];
  const productList = useSelector((state) => state.home.listProduct);
  const loading = useSelector((state) => state.home.loading);

  if (loading) {
    return <Spinner fullScreenSpinner={true} />;
  }
  return (
    <section>
      <div className="max-w-7xl mx-auto">
        <section>
          <div className="swiper h-[500px]">
            {/* <!-- Additional required wrapper --> */}
            <div className="swiper-wrapper">
              {/* <!-- Slides --> */}
              <div className="swiper-slide bg-blue-500">Slide 1</div>
              <div className="swiper-slide bg-red-500">Slide 2</div>
              <div className="swiper-slide bg-green-500">Slide 3</div>
            </div>
            {/* <!-- If we need navigation buttons --> */}
            <div className="swiper-button-prev text-[#5E17EB]"></div>
            <div className="swiper-button-next text-[#5E17EB]"></div>
          </div>
        </section>
        {/* Categories Section */}
        {/* <section className="p-4 xl:py-10 xl:px-0 flex items-center justify-between">
          <div className="w-full flex justify-evenly md:justify-start gap-4">
            <DropdownButton dropdownContent={type}>Type</DropdownButton>
            <DropdownButton dropdownContent={price}>Price</DropdownButton>
            <DropdownButton dropdownContent={price}>Offer</DropdownButton>
          </div>
        </section> */}
        {/* Main Product Grid Section */}
        {/* Top Categories Section */}
        <section className="px-4 mt-4 md:mt-10 xl:p-0">
          <h1 className="text-2xl md:text-4xl font-bold mb-4 md:mb-10">
            Shop Our Top Categories
          </h1>
          <div className="grid grid-cols-2 grid-rows-2 md:grid-cols-4 md:grid-rows-1 gap-4">
            {type.map((type) => (
              <Link
                to={`productList/type/${type.type}`}
                key={type.id}
                className="w-full h-[250px] bg-[#EAECF6] rounded-2xl flex flex-col justify-center items-center gap-4"
              >
                <FontAwesomeIcon
                  icon={type.icon}
                  className="text-[#5E17EB] w-24 h-24"
                />
                <h1 className="text-lg md:text-2xl font-semibold">
                  {type.type}
                </h1>
              </Link>
            ))}
          </div>
        </section>
        {/* <section className="px-4 mt-4 md:mt-10 xl:p-0">
          <h1 className="text-2xl md:text-4xl font-bold mb-4 md:mb-10">
            This For You!
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            <ProductList productList={productList} />
          </div>
        </section> */}
        {/* Latest Product */}
        <section className="px-4 mt-4 md:mt-10 xl:p-0">
          <h1 className="text-2xl md:text-4xl font-bold mb-4 md:mb-10">
            Latest Products
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {productList.slice(0, 8).map((item) => (
              <ProductItem item={item.data} id={item.id} key={item.id} />
            ))}
          </div>
        </section>
        {/* By Brand Section */}
        <section className="px-4 mt-4 md:mt-10 xl:p-0">
          <h1 className="text-2xl md:text-4xl font-bold mb-4 md:mb-10">
            Choose by Brand
          </h1>
          <div className="grid grid-cols-1 grid-rows-8 md:grid-cols-2 md:grid-rows-4 xl:grid-cols-4 xl:grid-rows-2 gap-4">
            {brand.map((brand) => (
              <Link
                to={`productList/brand/${brand.brand}`}
                key={brand.id}
                className="w-full bg-[#EAECF6] rounded-2xl p-4 flex items-center gap-4"
              >
                <img
                  src={brand.img ? brand.img : StockImg}
                  alt="avatar"
                  className="w-[100px] h-[100px] bg-white rounded-full"
                />
                <h1 className="text-2xl font-semibold">{brand.brand}</h1>
              </Link>
            ))}
          </div>
        </section>
        <section className="my-4 md:my-10">
          <div className="swiper h-[500px]">
            <div className="swiper-wrapper">
              <div className="swiper-slide bg-blue-500">Slide 1</div>
              <div className="swiper-slide bg-red-500">Slide 2</div>
              <div className="swiper-slide bg-green-500">Slide 3</div>
            </div>
            {/* <div className="swiper-pagination fill-[#5E17EB]"></div> */}
            <div className="swiper-button-prev text-[#5E17EB]"></div>
            <div className="swiper-button-next text-[#5E17EB]"></div>
          </div>
        </section>
        {/* Popular Product */}
        <section className="px-4 mt-4 md:mt-10 xl:p-0">
          <h1 className="text-2xl md:text-4xl font-bold mb-4 md:mb-10">
            Popular Products
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {productList.slice(0, 8).map((item) => (
              <ProductItem item={item.data} id={item.id} key={item.id} />
            ))}
          </div>
        </section>
      </div>
    </section>
  );
}

export default Home;
