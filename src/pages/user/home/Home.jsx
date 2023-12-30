import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { Carousel } from "@material-tailwind/react";
import StockImg from "../../../assets/img/Computer_Topia_Stock_Img.webp";
import ProductItem from "../../../ui/ProductItem";
import Spinner from "../../../ui/Spinner";
import { setLoading, setListProduct } from "./homeslice";
import { getAllProduct } from "../../../services/product.api";

function Home() {
  const dispatch = useDispatch();
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
  useEffect(() => {
    dispatch(setLoading());
    const fetchAllProduct = async () => {
      const data = await getAllProduct();
      dispatch(setListProduct(data));
    };
    fetchAllProduct();
  }, [dispatch]);

  if (loading) {
    return <Spinner fullScreenSpinner={true} />;
  }
  return (
    <section>
      <Carousel className="h-[300px] lg:h-[400px]" autoplay={true} loop={true}>
        <img
          src="https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2560&q=80"
          alt="image 1"
          className="h-full w-full object-cover"
        />
        <img
          src="https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80"
          alt="image 2"
          className="h-full w-full object-cover"
        />
        <img
          src="https://images.unsplash.com/photo-1518623489648-a173ef7824f3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2762&q=80"
          alt="image 3"
          className="h-full w-full object-cover"
        />
      </Carousel>
      {/* Latest Product */}
      <section className="px-4 mt-4 md:my-10 xl:p-0">
        <h1 className="text-2xl md:text-4xl font-bold mb-4 md:mb-10">
          Latest Products
        </h1>
        <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
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
        <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {productList.slice(0, 8).map((item) => (
            <ProductItem item={item.data} id={item.id} key={item.id} />
          ))}
        </div>
      </section>
    </section>
  );
}

export default Home;
