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
    {
      id: 1,
      brand: "APPLE",
      img: "https://firebasestorage.googleapis.com/v0/b/computer-store-d3f3d.appspot.com/o/store-assets%2FAPPLE.webp?alt=media&token=ff9ae895-bdda-457e-9a19-8993dcecc34c",
    },
    {
      id: 2,
      brand: "ASUS",
      img: "https://firebasestorage.googleapis.com/v0/b/computer-store-d3f3d.appspot.com/o/store-assets%2FASUS.png?alt=media&token=4212ea6e-6a12-48ed-83da-d85192b58f0a",
    },
    {
      id: 3,
      brand: "TUF-GAMING",
      img: "https://firebasestorage.googleapis.com/v0/b/computer-store-d3f3d.appspot.com/o/store-assets%2FTUFGAMING.png?alt=media&token=09fde5d4-2a1e-4e5f-8ad8-5827bb719490",
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
                className="w-full bg-[#EAECF6] p-4 hidden xl:flex flex-col items-center justify-center gap-4"
              >
                <img
                  src={brand.img ? brand.img : StockImg}
                  alt="avatar"
                  className="w-[100px] h-[100px] object-cover xl:object-contain bg-white rounded-full"
                />
                <h1 className=" font-semibold">{brand.brand}</h1>
              </Link>
            ))}
          </div>
          <div className="block xl:hidden">
            <div className="embla">
              <div className="embla__viewport" ref={emblaRef3}>
                <div className="embla__container">
                  {brand.map((brand, index) => (
                    <div className="embla__slide__multiple" key={index}>
                      <Link
                        to={`productList/brand/${brand.brand}`}
                        key={brand.id}
                        className="w-full bg-[#EAECF6] p-4 flex flex-col items-center justify-center gap-4"
                      >
                        <img
                          src={brand.img ? brand.img : StockImg}
                          alt="avatar"
                          className="w-full"
                        />
                        <h1 className=" font-semibold">{brand.brand}</h1>
                      </Link>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Popular Product */}
        <section className="px-4 mt-4 md:my-10">
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
