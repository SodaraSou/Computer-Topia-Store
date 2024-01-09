import { useCallback } from "react";
import { useSelector } from "react-redux";
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
  const OPTIONS = {
    slidesToScroll: "auto",
    containScroll: "trimSnaps",
  };
  const [emblaRef1, emblaApi1] = useEmblaCarousel(OPTIONS);
  // const [emblaRef2, emblaApi2] = useEmblaCarousel(OPTIONS);
  const [emblaRef3, emblaApi3] = useEmblaCarousel(OPTIONS);

  const [emblaRef4, emblaApi4] = useEmblaCarousel(OPTIONS);
  const [emblaRef5, emblaApi5] = useEmblaCarousel(OPTIONS);
  const [emblaRef6, emblaApi6] = useEmblaCarousel(OPTIONS);
  const [emblaRef7, emblaApi7] = useEmblaCarousel(OPTIONS);

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

  // const scrollPrev2 = useCallback(() => {
  //   if (emblaApi2) {
  //     emblaApi2.scrollPrev();
  //   }
  // }, [emblaApi2]);

  // const scrollNext2 = useCallback(() => {
  //   if (emblaApi2) {
  //     emblaApi2.scrollNext();
  //   }
  // }, [emblaApi2]);

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

  const scrollPrev4 = useCallback(() => {
    if (emblaApi4) {
      emblaApi4.scrollPrev();
    }
  }, [emblaApi4]);

  const scrollNext4 = useCallback(() => {
    if (emblaApi4) {
      emblaApi4.scrollNext();
    }
  }, [emblaApi4]);

  const scrollPrev5 = useCallback(() => {
    if (emblaApi5) {
      emblaApi5.scrollPrev();
    }
  }, [emblaApi5]);

  const scrollNext5 = useCallback(() => {
    if (emblaApi5) {
      emblaApi5.scrollNext();
    }
  }, [emblaApi5]);

  const scrollPrev6 = useCallback(() => {
    if (emblaApi6) {
      emblaApi6.scrollPrev();
    }
  }, [emblaApi6]);

  const scrollNext6 = useCallback(() => {
    if (emblaApi6) {
      emblaApi6.scrollNext();
    }
  }, [emblaApi6]);

  const scrollPrev7 = useCallback(() => {
    if (emblaApi7) {
      emblaApi7.scrollPrev();
    }
  }, [emblaApi7]);

  const scrollNext7 = useCallback(() => {
    if (emblaApi7) {
      emblaApi7.scrollNext();
    }
  }, [emblaApi7]);

  const brand = [
    {
      id: 1,
      brand: "APPLE",
      img: "https://firebasestorage.googleapis.com/v0/b/computer-store-d3f3d.appspot.com/o/store-assets%2FAPPLE.png?alt=media&token=c6d4d6f6-9a8d-40cd-9a6a-f77eead46f81",
    },
    {
      id: 2,
      brand: "ASUS",
      img: "https://firebasestorage.googleapis.com/v0/b/computer-store-d3f3d.appspot.com/o/store-assets%2FASUS-LOGO.png?alt=media&token=22b6795d-5dc5-41f7-b81d-aff51f0cbbcf",
    },
    {
      id: 3,
      brand: "ASUS TUF GAMING",
      img: "https://firebasestorage.googleapis.com/v0/b/computer-store-d3f3d.appspot.com/o/store-assets%2Ftuf_logo.png?alt=media&token=82e1acfb-b88d-4f69-b151-ca90bd5e1043",
    },
    {
      id: 4,
      brand: "ASUS ROG",
      img: "https://firebasestorage.googleapis.com/v0/b/computer-store-d3f3d.appspot.com/o/store-assets%2FROG.png?alt=media&token=fdddbe7c-7f3b-4655-bfbb-6e2f8aafe87d",
    },
    {
      id: 5,
      brand: "LENOVO",
      img: "https://firebasestorage.googleapis.com/v0/b/computer-store-d3f3d.appspot.com/o/store-assets%2FLENOVO.png?alt=media&token=78bcaa61-33d0-4f76-9036-c7a0f8ebc741",
    },
    {
      id: 6,
      brand: "GIGABYTE",
      img: "https://firebasestorage.googleapis.com/v0/b/computer-store-d3f3d.appspot.com/o/store-assets%2FGIGABYTE.webp?alt=media&token=b4b781a8-6dca-4411-893e-e1890612dea3",
    },
    {
      id: 7,
      brand: "MICROSOFT",
      img: "https://firebasestorage.googleapis.com/v0/b/computer-store-d3f3d.appspot.com/o/store-assets%2FMICROSOFT.png?alt=media&token=61d269dd-159e-4153-8e69-c1c8f8d39161",
    },
    {
      id: 8,
      brand: "DELL",
      img: "https://firebasestorage.googleapis.com/v0/b/computer-store-d3f3d.appspot.com/o/store-assets%2FDELL.png?alt=media&token=1de666d5-0476-49ed-9537-24eb9795ea17",
    },
  ];
  const productList = useSelector((state) => state.home.listProduct);
  return (
    <>
      <Carousel
        className="md:h-[300px] xl:h-[400px] 2xl:h-[500px]"
        autoplay={true}
        loop={true}
        navigation={() => null}
      >
        <img
          src="https://firebasestorage.googleapis.com/v0/b/computer-store-d3f3d.appspot.com/o/store-assets%2FRog_banner.webp?alt=media&token=7bc2e04b-1475-4ec9-8887-e5a4bee76a52"
          alt="image 1"
          className="h-full w-full object-cover"
        />
        <img
          src="https://firebasestorage.googleapis.com/v0/b/computer-store-d3f3d.appspot.com/o/store-assets%2Frog_gpu_banner.webp?alt=media&token=2fb0275f-37a5-492f-8539-5cc308f610af"
          alt="image 2"
          className="h-full w-full object-cover"
        />
      </Carousel>
      <section className="max-w-7xl mx-auto ">
        {/* Latest Product */}
        <section className="px-4 mt-4 md:my-10">
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
          <div className="hidden xl:grid xl:grid-cols-4 gap-4">
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
        {/* Popular Product */}
        {/* <section className="px-4 mt-4 md:my-10">
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
        </section> */}
        {/* By Brand Section */}
        <section className="px-4 mt-4 md:mt-10">
          <div className="flex justify-between mb-4 md:mb-10">
            <h1 className="text-2xl md:text-4xl font-bold">Choose by Brand</h1>
            <div className="flex xl:hidden gap-4">
              <button onClick={scrollPrev3}>
                <FontAwesomeIcon
                  icon={faChevronLeft}
                  className="text-[#5E17EB] w-5 h-5"
                />
              </button>
              <button onClick={scrollNext3}>
                <FontAwesomeIcon
                  icon={faChevronRight}
                  className="text-[#5E17EB] w-5 h-5"
                />
              </button>
            </div>
          </div>
          <div className="grid grid-cols-8 gap-4">
            {brand.map((brand) => (
              <Link
                to={`productList/brand/${brand.brand}`}
                key={brand.id}
                className="w-full bg-white border border-gray-200 shadow dark:bg-gray-800 dark:border-gray-700 p-2 hidden lg:flex flex-col items-center justify-center gap-4 transform transition duration-300 hover:scale-110"
              >
                <img
                  src={brand.img ? brand.img : StockImg}
                  alt="avatar"
                  className="w-full"
                />
              </Link>
            ))}
          </div>
          <div className="block lg:hidden">
            <div className="embla">
              <div className="embla__viewport" ref={emblaRef3}>
                <div className="embla__container">
                  {brand.map((brand, index) => (
                    <div className="embla__slide__multiple" key={index}>
                      <Link
                        to={`productList/brand/${brand.brand}`}
                        key={brand.id}
                        className="w-full p-2 flex flex-col items-center justify-center gap-4 bg-white border border-gray-200 shadow dark:bg-gray-800 dark:border-gray-700"
                      >
                        <img
                          src={brand.img ? brand.img : StockImg}
                          alt="avatar"
                          className="w-full"
                        />
                      </Link>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Laptop */}
        <section className="px-4 mt-4 md:my-10">
          <div className="flex justify-between mb-4 md:mb-10">
            <h1 className="text-2xl md:text-4xl font-bold">Laptop</h1>
            <div className="xl:flex hidden">
              <Link
                to="/productList/type/Laptop"
                className="rounded-xl bg-[#5E17EB] text-white px-4 md:px-2 py-2 md:h-10 md:w-28 font-semibold text-center"
              >
                View More
              </Link>
            </div>
            <div className="flex xl:hidden gap-4">
              <button onClick={scrollPrev4}>
                <FontAwesomeIcon
                  icon={faChevronLeft}
                  className="text-[#5E17EB] w-5 h-5"
                />
              </button>
              <button onClick={scrollNext4}>
                <FontAwesomeIcon
                  icon={faChevronRight}
                  className="text-[#5E17EB] w-5 h-5"
                />
              </button>
            </div>
          </div>
          <div className="hidden xl:grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {productList
              .filter((product) => product.data.type === "Laptop")
              .slice(0, 8)
              .map((item) => (
                <ProductItem item={item.data} id={item.id} key={item.id} />
              ))}
          </div>
          <div className="block xl:hidden">
            <div className="embla">
              <div className="embla__viewport" ref={emblaRef4}>
                <div className="embla__container">
                  {productList
                    .filter((product) => product.data.type === "Laptop")
                    .slice(0, 8)
                    .map((item, index) => (
                      <div className="embla__slide" key={index}>
                        <ProductItem item={item.data} id={item.id} />
                      </div>
                    ))}
                </div>
              </div>
            </div>
            <div className="text-center mt-4 md:mt-10">
              <Link to="/productList/type/Laptop" className="text-[#5E17EB]">
                View More
              </Link>
            </div>
          </div>
        </section>
        {/* PC-Hardware */}
        <section className="px-4 mt-4 md:my-10">
          <div className="flex justify-between items-center mb-4 md:mb-10">
            <div>
              <h1 className="text-2xl md:text-4xl font-bold">PC-Hardware</h1>
            </div>
            <div className="xl:flex hidden">
              <Link
                to="/productList/type/PC-Hardware"
                className="rounded-xl bg-[#5E17EB] text-white px-4 md:px-2 py-2 md:h-10 md:w-28 font-semibold text-center"
              >
                View More
              </Link>
            </div>
            <div className="flex xl:hidden gap-4">
              <button onClick={scrollPrev5}>
                <FontAwesomeIcon
                  icon={faChevronLeft}
                  className="text-[#5E17EB] w-5 h-5"
                />
              </button>
              <button onClick={scrollNext5}>
                <FontAwesomeIcon
                  icon={faChevronRight}
                  className="text-[#5E17EB] w-5 h-5"
                />
              </button>
            </div>
          </div>
          <div className="hidden xl:grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {productList
              .filter((product) => product.data.type === "PC-Hardware")
              .slice(0, 8)
              .map((item) => (
                <ProductItem item={item.data} id={item.id} key={item.id} />
              ))}
          </div>
          <div className="block xl:hidden">
            <div className="embla">
              <div className="embla__viewport" ref={emblaRef5}>
                <div className="embla__container">
                  {productList
                    .filter((product) => product.data.type === "PC-Hardware")
                    .slice(0, 8)
                    .map((item, index) => (
                      <div className="embla__slide" key={index}>
                        <ProductItem item={item.data} id={item.id} />
                      </div>
                    ))}
                </div>
              </div>
            </div>
            <div className="text-center mt-4 md:mt-10">
              <Link
                to="/productList/type/PC-Hardware"
                className="text-[#5E17EB]"
              >
                View More
              </Link>
            </div>
          </div>
        </section>
        {/* Peripherals */}
        <section className="px-4 mt-4 md:my-10">
          <div className="flex justify-between mb-4 md:mb-10">
            <h1 className="text-2xl md:text-4xl font-bold">Peripherals</h1>
            <div className="xl:flex hidden">
              <Link
                to="/productList/type/Peripherals"
                className="rounded-xl bg-[#5E17EB] text-white px-4 md:px-2 py-2 md:h-10 md:w-28 font-semibold text-center"
              >
                View More
              </Link>
            </div>
            <div className="flex xl:hidden gap-4">
              <button onClick={scrollPrev6}>
                <FontAwesomeIcon
                  icon={faChevronLeft}
                  className="text-[#5E17EB] w-5 h-5"
                />
              </button>
              <button onClick={scrollNext6}>
                <FontAwesomeIcon
                  icon={faChevronRight}
                  className="text-[#5E17EB] w-5 h-5"
                />
              </button>
            </div>
          </div>
          <div className="hidden xl:grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {productList
              .filter((product) => product.data.type === "Peripherals")
              .slice(0, 8)
              .map((item) => (
                <ProductItem item={item.data} id={item.id} key={item.id} />
              ))}
          </div>
          <div className="block xl:hidden">
            <div className="embla">
              <div className="embla__viewport" ref={emblaRef6}>
                <div className="embla__container">
                  {productList
                    .filter((product) => product.data.type === "Peripherals")
                    .slice(0, 8)
                    .map((item, index) => (
                      <div className="embla__slide" key={index}>
                        <ProductItem item={item.data} id={item.id} />
                      </div>
                    ))}
                </div>
              </div>
            </div>
            <div className="text-center mt-4 md:mt-10">
              <Link
                to="/productList/type/Peripherals"
                className="text-[#5E17EB]"
              >
                View More
              </Link>
            </div>
          </div>
        </section>
        {/* Accessories */}
        <section className="px-4 mt-4 md:my-10">
          <div className="flex justify-between mb-4 md:mb-10">
            <h1 className="text-2xl md:text-4xl font-bold">Accessories</h1>
            <div className="xl:flex hidden">
              <Link
                to="/productList/type/Accessories"
                className="rounded-xl bg-[#5E17EB] text-white px-4 md:px-2 py-2 md:h-10 md:w-28 font-semibold text-center"
              >
                View More
              </Link>
            </div>
            <div className="flex xl:hidden gap-4">
              <button onClick={scrollPrev7}>
                <FontAwesomeIcon
                  icon={faChevronLeft}
                  className="text-[#5E17EB] w-5 h-5"
                />
              </button>
              <button onClick={scrollNext7}>
                <FontAwesomeIcon
                  icon={faChevronRight}
                  className="text-[#5E17EB] w-5 h-5"
                />
              </button>
            </div>
          </div>
          <div className="hidden xl:grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {productList
              .filter((product) => product.data.type === "Accessories")
              .slice(0, 8)
              .map((item) => (
                <ProductItem item={item.data} id={item.id} key={item.id} />
              ))}
          </div>
          <div className="block xl:hidden">
            <div className="embla">
              <div className="embla__viewport" ref={emblaRef7}>
                <div className="embla__container">
                  {productList
                    .filter((product) => product.data.type === "Accessories")
                    .slice(0, 8)
                    .map((item, index) => (
                      <div className="embla__slide" key={index}>
                        <ProductItem item={item.data} id={item.id} />
                      </div>
                    ))}
                </div>
              </div>
            </div>
            <div className="text-center mt-4 md:mt-10">
              <Link
                to="/productList/type/Accessories"
                className="text-[#5E17EB]"
              >
                View More
              </Link>
            </div>
          </div>
        </section>
      </section>
      <ScrollUpButton />
    </>
  );
}

export default Home;
