import { useEffect, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { Carousel } from "@material-tailwind/react";
import useEmblaCarousel from "embla-carousel-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronRight,
  faChevronLeft,
} from "@fortawesome/free-solid-svg-icons";
// import { setLoading, setListProduct } from "./homeslice";
// import { getAllProduct } from "../../../services/product.api";
import StockImg from "../../../assets/img/Computer_Topia_Stock_Img.webp";
import ProductItem from "../../../ui/ProductItem";
import ScrollUpButton from "../../../ui/ScrollUpButton";
// import Spinner from "../../../ui/Spinner";

function Home() {
  const dispatch = useDispatch();
  const OPTIONS = { slidesToScroll: "auto", containScroll: "trimSnaps" };
  const [emblaRef1, emblaApi1] = useEmblaCarousel(OPTIONS);
  const [emblaRef2, emblaApi2] = useEmblaCarousel(OPTIONS);
  const [emblaRef3, emblaApi3] = useEmblaCarousel(OPTIONS);

  const scrollPrev1 = useCallback(() => {
    if (emblaApi1) {
      emblaApi1.scrollPrev();
    }
  }, [emblaApi1]);

  const scrollNext1 = useCallback(() => {
    if (emblaApi1) {
      emblaApi1.scrollNext();
    }
  }, [emblaApi1]);

  const scrollPrev2 = useCallback(() => {
    if (emblaApi2) {
      emblaApi2.scrollPrev();
    }
  }, [emblaApi2]);

  const scrollNext2 = useCallback(() => {
    if (emblaApi2) {
      emblaApi2.scrollNext();
    }
  }, [emblaApi2]);

  const scrollPrev3 = useCallback(() => {
    if (emblaApi3) {
      emblaApi3.scrollPrev();
    }
  }, [emblaApi3]);

  const scrollNext3 = useCallback(() => {
    if (emblaApi3) {
      emblaApi3.scrollNext();
    }
  }, [emblaApi3]);
  const brand = [
    { id: 1, brand: "APPLE", img: null },
    { id: 2, brand: "ASUS", img: null },
    { id: 3, brand: "TUF-GAMING", img: null },
    { id: 4, brand: "ASUS ROG", img: null },
    { id: 5, brand: "LENOVO", img: null },
    { id: 6, brand: "GIGABYTE", img: null },
    { id: 7, brand: "MICROSOFT", img: null },
    { id: 8, brand: "DELL", img: null },
  ];
  const productList = useSelector((state) => state.home.listProduct);
  // const loading = useSelector((state) => state.home.loading);
  // useEffect(() => {
  //   dispatch(setLoading());
  //   const fetchAllProduct = async () => {
  //     const data = await getAllProduct();
  //     dispatch(setListProduct(data));
  //   };
  //   fetchAllProduct();
  // }, [dispatch]);

  // if (loading) {
  //   return <Spinner fullScreenSpinner={true} />;
  // }
  return (
    <>
      <section>
        <Carousel
          className="md:h-[300px] xl:h-[400px]"
          autoplay={true}
          loop={true}
        >
          <img
            src="https://images.unsplash.com/photo-1518623489648-a173ef7824f3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2762&q=80"
            alt="image 3"
            className="h-full w-full object-cover"
          />
          <img
            src="https://images.unsplash.com/photo-1518623489648-a173ef7824f3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2762&q=80"
            alt="image 3"
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
          <div className="flex justify-between mb-4 md:mb-10">
            <h1 className="text-2xl md:text-4xl font-bold">Latest Products</h1>
            <div className="flex xl:hidden gap-4">
              <button onClick={scrollPrev1}>
                <FontAwesomeIcon
                  icon={faChevronLeft}
                  className="text-[#5E17EB] w-5 h-5"
                />
              </button>
              <button onClick={scrollNext1}>
                <FontAwesomeIcon
                  icon={faChevronRight}
                  className="text-[#5E17EB] w-5 h-5"
                />
              </button>
            </div>
          </div>
          <div className="hidden xl:grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {productList.slice(0, 8).map((item) => (
              <ProductItem item={item.data} id={item.id} key={item.id} />
            ))}
          </div>
          <div className="block xl:hidden">
            <div className="embla">
              <div className="embla__viewport" ref={emblaRef1}>
                <div className="embla__container">
                  {productList.slice(0, 8).map((item, index) => (
                    <div className="embla__slide" key={index}>
                      <ProductItem item={item.data} id={item.id} />
                    </div>
                  ))}
                </div>
              </div>
            </div>
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
          <div className="flex justify-between mb-4 md:mb-10">
            <h1 className="text-2xl md:text-4xl font-bold">Popular Products</h1>
            <div className="flex xl:hidden gap-4">
              <button onClick={scrollPrev2}>
                <FontAwesomeIcon
                  icon={faChevronLeft}
                  className="text-[#5E17EB] w-5 h-5"
                />
              </button>
              <button onClick={scrollNext2}>
                <FontAwesomeIcon
                  icon={faChevronRight}
                  className="text-[#5E17EB] w-5 h-5"
                />
              </button>
            </div>
          </div>
          <div className="hidden xl:grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {productList.slice(0, 8).map((item) => (
              <ProductItem item={item.data} id={item.id} key={item.id} />
            ))}
          </div>
          <div className="block xl:hidden">
            <div className="embla">
              <div className="embla__viewport" ref={emblaRef2}>
                <div className="embla__container">
                  {productList.slice(0, 8).map((item, index) => (
                    <div className="embla__slide" key={index}>
                      <ProductItem item={item.data} id={item.id} />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </section>
      <ScrollUpButton />
    </>
  );
}

export default Home;
