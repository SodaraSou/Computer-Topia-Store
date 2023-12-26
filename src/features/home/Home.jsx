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
import ProductItem from "../../ui/ProductItem";
import Spinner from "../../ui/Spinner";

function Home() {
  const type = [
    { id: 1, type: "Laptop", icon: faLaptop },
    { id: 2, type: "PC-Hardware", icon: faMicrochip },
    { id: 3, type: "Peripherals", icon: faHeadphones },
    { id: 4, type: "Accessories", icon: faEthernet },
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
      {/* Top Categories Section */}
      {/* <section className="px-4 mt-4 md:mt-10 xl:p-0">
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
              <h1 className="text-lg md:text-2xl font-semibold">{type.type}</h1>
            </Link>
          ))}
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
      {/* Popular Product */}
      <section className="px-4 mt-4 md:my-10 xl:p-0">
        <h1 className="text-2xl md:text-4xl font-bold mb-4 md:mb-10">
          Popular Products
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {productList.slice(0, 8).map((item) => (
            <ProductItem item={item.data} id={item.id} key={item.id} />
          ))}
        </div>
      </section>
    </section>
  );
}

export default Home;
