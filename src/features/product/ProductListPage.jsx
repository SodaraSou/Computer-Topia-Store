import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  getProductByType,
  getProductByBrand,
} from "../../services/product.api";
import { setLoading, setProductList, sortByPrice } from "./productSlice";
import ProductList from "../../ui/ProductList";
import DropdownButton from "../../ui/shared/DropdownButton";
import Spinner from "../../ui/Spinner";

function ProductListPage() {
  const { type, productType } = useParams();
  const dispatch = useDispatch();
  const productList = useSelector((state) => state.product.productList);
  const loading = useSelector((state) => state.product.loading);
  const filter = [
    { id: 1, type: "Highest Price" },
    { id: 2, type: "Lowest Price" },
  ];
  const [selectedType, setSelectedType] = useState(null);
  // let itemNavbar = null;
  // switch (productType) {
  //   case "Laptop":
  //     itemNavbar = <BrandSidebar />;
  //     break;
  //   case "PC-Hardware":
  //     itemNavbar = <HardwareTypeSidebar />;
  //     break;
  //   default:
  //     break;
  // }
  useEffect(() => {
    dispatch(setLoading());
    setSelectedType(null);
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

  return (
    <section className="p-4 xl:px-0 xl:py-10">
      <div className="flex justify-end items-center mb-4 xl:mb-10">
        {/* <h1 className="text-2xl font-semibold">Brand:</h1> */}
        <div>
          <DropdownButton dropdownContent={filter} onSelect={handleTypeSelect}>
            Sort by: {selectedType}
          </DropdownButton>
        </div>
      </div>
      <div>
        {/* <aside className="w-1/6">{itemNavbar}</aside> */}
        {loading ? (
          <Spinner fullScreenSpinner={true} />
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            <ProductList productList={productList} />
          </div>
        )}
      </div>
    </section>
  );
}

export default ProductListPage;
