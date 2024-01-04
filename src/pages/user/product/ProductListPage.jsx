import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Element } from "react-scroll";
import {
  getProductByType,
  getProductByBrand,
} from "../../../services/product.api";
import { setLoading, setProductList, sortByPrice } from "./productSlice";
import { setOpenMenu } from "../home/homeslice";
import BrandSidebar from "./components/BrandSidebar";
import ProductList from "../../../ui/ProductList";
import DropdownButton from "../../../ui/shared/DropdownButton";
import Spinner from "../../../ui/Spinner";
import HardwareTypeSidebar from "./components/HardwareSidebar";
import PeripheralSidebar from "./components/PeripheralSidebar";
import AccessorySidebar from "./components/AccessorySidebar";
import ScrollUpButton from "../../../ui/ScrollUpButton";

function ProductListPage() {
  const { type, productType } = useParams();
  const dispatch = useDispatch();
  const productList = useSelector((state) => state.product.productList);
  const loading = useSelector((state) => state.product.loading);
  const filter = [
    { id: 1, type: "Highest Price" },
    { id: 2, type: "Lowest Price" },
  ];
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
    dispatch(setOpenMenu(false));
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
    <>
      <section className="p-4 xl:px-0 xl:py-10">
        {/* <div className="flex justify-between items-center mb-4 md:mb-10">
        <h1 className="text-4xl font-bold">{productType}</h1>
        <div>
          <DropdownButton dropdownContent={filter} onSelect={handleTypeSelect}>
            Sort by: {selectedType}
          </DropdownButton>
        </div>
      </div> */}
        <div className="flex flex-col md:flex-row gap-4 md:gap-10">
          <div>
            {productType === "Laptop" && <BrandSidebar />}
            {productType === "PC-Hardware" && <HardwareTypeSidebar />}
            {productType === "Peripherals" && <PeripheralSidebar />}
            {productType === "Accessories" && <AccessorySidebar />}{" "}
          </div>
          <div className="flex flex-col gap-4 md:gap-10 w-full">
            {section.map((section, index) => (
              <Element key={index} name={section.name}>
                <div className="bg-[#5E17EB] text-white p-4 mb-4 md:mb-10">
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
            {type === "brand" && (
              <div>
                <div className="flex justify-between items-center mb-4 md:mb-10">
                  <h1 className="text-2xl md:text-4xl font-bold">
                    {productType}
                  </h1>
                  <div>
                    <DropdownButton
                      dropdownContent={filter}
                      onSelect={handleTypeSelect}
                    >
                      Sort by: {selectedType}
                    </DropdownButton>
                  </div>
                </div>
                <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                  <ProductList productList={productList} />
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
      <ScrollUpButton />
    </>
  );
}

export default ProductListPage;
