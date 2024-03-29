import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Element } from "react-scroll";
import {
  getProductByType,
  getProductByBrand,
} from "../../../services/product.api";
import {
  setLoading,
  setProductList,
  sortByPrice,
  setIsEmpty,
  setOpenMenuProduct,
} from "./productSlice";
import { setOpenMenu } from "../home/homeslice";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faBox } from "@fortawesome/free-solid-svg-icons";
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
  const isEmpty = useSelector((state) => state.product.isEmpty);
  const loading = useSelector((state) => state.product.loading);
  const filter = [
    { id: 1, type: "Highest Price" },
    { id: 2, type: "Lowest Price" },
    { id: 3, type: "Name A-Z" },
    { id: 4, type: "Offer" },
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
          name: "HDD",
        },
        {
          name: "SSD",
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
        {
          name: "Cable",
        },
        {
          name: "Adapter",
        },
      ];
    default:
      break;
  }
  const [selectedType, setSelectedType] = useState(null);
  useEffect(() => {
    setSelectedType(null);
    dispatch(setIsEmpty());
  }, [type, productType]);

  useEffect(() => {
    dispatch(setLoading());
    dispatch(setOpenMenu(false));
    dispatch(setOpenMenuProduct(false));
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
  const openMenu = useSelector((state) => state.product.openMenuProduct);
  const toggleMenu = () => {
    dispatch(setOpenMenuProduct(!openMenu));
  };
  if (loading) {
    return <Spinner fullScreenSpinner={true} />;
  }
  return (
    <>
      <section className="p-4 md:py-10 max-w-7xl mx-auto">
        <div className="w-full">
          <div className="flex justify-between items-center mb-4 md:mb-10">
            <div className="flex items-center gap-4">
              <h1 className="text-2xl md:text-4xl font-bold">{productType}</h1>
              <button className="lg:hidden" onClick={toggleMenu}>
                <FontAwesomeIcon icon={faBars} />
              </button>
            </div>
            <div>
              <DropdownButton
                dropdownContent={filter}
                onSelect={handleTypeSelect}
              >
                Sort by: {selectedType}
              </DropdownButton>
            </div>
          </div>
          {openMenu && (
            <div className="absolute bg-white top-34 z-100 lg:hidden">
              {productType === "Laptop" && (
                <div className="p-4">
                  <BrandSidebar toggleMenu={toggleMenu} />
                </div>
              )}
              {productType === "PC-Hardware" && (
                <div className="p-4">
                  <HardwareTypeSidebar toggleMenu={toggleMenu} />
                </div>
              )}
              {productType === "Peripherals" && (
                <div className="p-4">
                  <PeripheralSidebar toggleMenu={toggleMenu} />
                </div>
              )}
              {productType === "Accessories" && (
                <div className="p-4">
                  <AccessorySidebar toggleMenu={toggleMenu} />
                </div>
              )}
            </div>
          )}
        </div>
        <div className="flex flex-col lg:flex-row">
          <div className="hidden lg:block">
            {productType === "Laptop" && <BrandSidebar />}
            {productType === "PC-Hardware" && <HardwareTypeSidebar />}
            {productType === "Peripherals" && <PeripheralSidebar />}
            {productType === "Accessories" && <AccessorySidebar />}
          </div>
          <div className="flex flex-col gap-4 md:gap-10 w-full">
            {section.map((section, index) => (
              <Element key={index} name={section.name}>
                <div className="bg-[#5E17EB] text-white p-4 mb-4 md:mb-10">
                  <h1 className="text-2xl font-bold">{section.name}</h1>
                </div>
                <div>
                  {productType === "Laptop" && (
                    <>
                      {isEmpty ? (
                        <div className="flex flex-col justify-center items-center gap-4">
                          <FontAwesomeIcon
                            icon={faBox}
                            className="text-[#5E17EB] w-10 h-10"
                          />
                          <p className="text-xl md:text-2xl font-semibold">
                            No Products
                          </p>
                        </div>
                      ) : (
                        <>
                          {productList.filter(
                            (product) => product.data.brand === section.name
                          ).length === 0 ? (
                            <div className="flex flex-col justify-center items-center gap-4">
                              <FontAwesomeIcon
                                icon={faBox}
                                className="text-[#5E17EB] w-10 h-10"
                              />
                              <p className="text-xl md:text-2xl font-semibold">
                                No Products
                              </p>
                            </div>
                          ) : (
                            <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                              {" "}
                              <ProductList
                                productList={productList.filter(
                                  (product) =>
                                    product.data.brand === section.name
                                )}
                              />
                            </div>
                          )}
                        </>
                      )}
                    </>
                  )}
                  {productType === "PC-Hardware" && (
                    <>
                      {isEmpty ? (
                        <div className="flex flex-col justify-center items-center gap-4">
                          <FontAwesomeIcon
                            icon={faBox}
                            className="text-[#5E17EB] w-10 h-10"
                          />
                          <p className="text-xl md:text-2xl font-semibold">
                            No Products
                          </p>
                        </div>
                      ) : (
                        <>
                          {productList.filter(
                            (product) =>
                              product.data.hardwareType === section.name
                          ).length === 0 ? (
                            <div className="flex flex-col justify-center items-center gap-4">
                              <FontAwesomeIcon
                                icon={faBox}
                                className="text-[#5E17EB] w-10 h-10"
                              />
                              <p className="text-xl md:text-2xl font-semibold">
                                No Products
                              </p>
                            </div>
                          ) : (
                            <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                              {" "}
                              <ProductList
                                productList={productList.filter(
                                  (product) =>
                                    product.data.hardwareType === section.name
                                )}
                              />
                            </div>
                          )}
                        </>
                      )}
                    </>
                  )}
                  {productType === "Peripherals" && (
                    <>
                      {isEmpty ? (
                        <div className="flex flex-col justify-center items-center gap-4">
                          <FontAwesomeIcon
                            icon={faBox}
                            className="text-[#5E17EB] w-10 h-10"
                          />
                          <p className="text-xl md:text-2xl font-semibold">
                            No Products
                          </p>
                        </div>
                      ) : (
                        <>
                          {productList.filter(
                            (product) =>
                              product.data.peripheralType === section.name
                          ).length === 0 ? (
                            <div className="flex flex-col justify-center items-center gap-4">
                              <FontAwesomeIcon
                                icon={faBox}
                                className="text-[#5E17EB] w-10 h-10"
                              />
                              <p className="text-xl md:text-2xl font-semibold">
                                No Products
                              </p>
                            </div>
                          ) : (
                            <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                              {" "}
                              <ProductList
                                productList={productList.filter(
                                  (product) =>
                                    product.data.peripheralType === section.name
                                )}
                              />
                            </div>
                          )}
                        </>
                      )}
                    </>
                  )}
                  {productType === "Accessories" && (
                    <>
                      {isEmpty ? (
                        <div className="flex flex-col justify-center items-center gap-4">
                          <FontAwesomeIcon
                            icon={faBox}
                            className="text-[#5E17EB] w-10 h-10"
                          />
                          <p className="text-xl md:text-2xl font-semibold">
                            No Products
                          </p>
                        </div>
                      ) : (
                        <>
                          {productList.filter(
                            (product) =>
                              product.data.accessoriesType === section.name
                          ).length === 0 ? (
                            <div className="flex flex-col justify-center items-center gap-4">
                              <FontAwesomeIcon
                                icon={faBox}
                                className="text-[#5E17EB] w-10 h-10"
                              />
                              <p className="text-xl md:text-2xl font-semibold">
                                No Products
                              </p>
                            </div>
                          ) : (
                            <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                              {" "}
                              <ProductList
                                productList={productList.filter(
                                  (product) =>
                                    product.data.accessoriesType ===
                                    section.name
                                )}
                              />
                            </div>
                          )}
                        </>
                      )}
                    </>
                  )}
                </div>
              </Element>
            ))}
            {type === "brand" && (
              <>
                {isEmpty ? (
                  <div className="flex flex-col justify-center items-center gap-4">
                    <FontAwesomeIcon
                      icon={faBox}
                      className="text-[#5E17EB] w-10 h-10"
                    />
                    <p className="text-xl md:text-2xl font-semibold">
                      No Products
                    </p>
                  </div>
                ) : (
                  <>
                    {productList.length === 0 ? (
                      <div className="flex flex-col justify-center items-center gap-4">
                        <FontAwesomeIcon
                          icon={faBox}
                          className="text-[#5E17EB] w-10 h-10"
                        />
                        <p className="text-xl md:text-2xl font-semibold">
                          No Products
                        </p>
                      </div>
                    ) : (
                      <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                        {" "}
                        <ProductList productList={productList} />
                      </div>
                    )}
                  </>
                )}
              </>
            )}
          </div>
        </div>
      </section>
      <ScrollUpButton />
    </>
  );
}

export default ProductListPage;
