import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Element } from "react-scroll";
import {
  getProductByType,
  getProductByBrand,
} from "../../../services/product.api";
import { setLoading, setProductList, sortByPrice } from "./productSlice";
import BrandNavbar from "./components/BrandNavbar";
import ProductList from "../../../ui/ProductList";
import DropdownButton from "../../../ui/shared/DropdownButton";
import Spinner from "../../../ui/Spinner";
import HardwareTypeNavbar from "./components/HardwareNavbar";
import PeripheralNavbar from "./components/PeripheralNavbar";
import AccessoryNavbar from "./components/AccessoryNavbar";

function ProductListPage() {
  const { type, productType } = useParams();
  const dispatch = useDispatch();
  const productList = useSelector((state) => state.product.productList);
  const loading = useSelector((state) => state.product.loading);
  const filter = [
    { id: 1, type: "Highest Price" },
    { id: 2, type: "Lowest Price" },
  ];
  // const laptopBrand = [
  //   {
  //     brand: "APPLE",
  //   },
  //   {
  //     brand: "ASUS",
  //   },
  //   {
  //     brand: "ASUS TUF GAMING",
  //   },
  //   {
  //     brand: "ASUS ROG",
  //   },
  //   {
  //     brand: "MSI",
  //   },
  //   {
  //     brand: "MICROSOFT",
  //   },
  //   {
  //     brand: "LENOVO",
  //   },
  //   {
  //     brand: "DELL",
  //   },
  //   {
  //     brand: "GIGABYTE",
  //   },
  // ];
  let section = [];
  switch (productType) {
    case "Laptop":
      section = [
        {
          name: "APPLE",
        },
        {
          name: "ASUS",
        },
        {
          name: "ASUS TUF GAMING",
        },
        {
          name: "ASUS ROG",
        },
        {
          name: "MSI",
        },
        {
          name: "MICROSOFT",
        },
        {
          name: "LENOVO",
        },
        {
          name: "DELL",
        },
        {
          name: "GIGABYTE",
        },
      ];
      break;
    case "PC-Hardware":
      section = [
        {
          name: "CPU",
        },
        {
          name: "GPU",
        },
        {
          name: "Cooler",
        },
        {
          name: "Motherboard",
        },
        {
          name: "RAM",
        },
        {
          name: "Storage",
        },
        {
          name: "PSU",
        },
        {
          name: "Case",
        },
        {
          name: "Monitor",
        },
      ];
      break;
    case "Peripherals":
      section = [
        {
          name: "Headphone",
        },
        {
          name: "Mouse",
        },
        {
          name: "Keyboard",
        },
        {
          name: "Gaming Chair",
        },
        {
          name: "Microphone",
        },
        {
          name: "Webcam",
        },
      ];
      break;
    case "Accessories":
      section = [
        {
          name: "Router",
        },
      ];
    default:
      break;
  }
  const [selectedType, setSelectedType] = useState(null);
  useEffect(() => {
    setSelectedType(null);
  }, [type, productType]);

  useEffect(() => {
    dispatch(setLoading());
    const fetchAllProduct = async () => {
      switch (type) {
        case "type":
          const dataByCategory = await getProductByType(productType);
          dispatch(setProductList(dataByCategory));
          break;
        case "brand":
          const dataByBrand = await getProductByBrand(productType);
          dispatch(setProductList(dataByBrand));
        default:
          break;
      }
      if (selectedType) {
        dispatch(sortByPrice(productList, selectedType));
      }
    };
    fetchAllProduct();
  }, [type, productType, selectedType]);
  const handleTypeSelect = (typeSelected) => {
    setSelectedType(typeSelected);
  };
  if (loading) {
    return <Spinner fullScreenSpinner={true} />;
  }
  return (
    <section className="p-4 xl:px-0 xl:py-10">
      <div className="flex justify-between items-center">
        <h1 className="text-4xl font-bold">{productType}</h1>
        <div>
          <DropdownButton dropdownContent={filter} onSelect={handleTypeSelect}>
            Sort by: {selectedType}
          </DropdownButton>
        </div>
      </div>
      {/* <div className="h-[1px] w-full bg-[#D9D9D9] mb-4"></div> */}
      <div className="my-4 md:my-10">
        {productType === "Laptop" && <BrandNavbar />}
        {productType === "PC-Hardware" && <HardwareTypeNavbar />}
        {productType === "Peripherals" && <PeripheralNavbar />}
        {productType === "Accessories" && <AccessoryNavbar />}
      </div>
      {/* <div className="h-[1px] w-full bg-[#D9D9D9] mt-4"></div> */}
      <div className="flex flex-col gap-4 md:gap-10">
        {section.map((section, index) => (
          <Element key={index} name={section.name}>
            <div className="bg-[#5E17EB] text-white p-4">
              <h1 className="text-2xl font-bold">{section.name}</h1>
            </div>
            <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
              <ProductList
                productList={productList.filter(
                  (product) => product.data.brand === section.name
                )}
              />
            </div>
          </Element>
        ))}
      </div>
    </section>
  );
}

export default ProductListPage;
