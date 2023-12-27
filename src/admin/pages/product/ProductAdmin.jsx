import { useContext, useEffect, useState } from "react";
import {
  calculateNumberOfProduct,
  getAllProduct,
} from "../../../contexts/product/ProductAction";
import ProductContext from "../../../contexts/product/ProductContext";
import ProductList from "./components/ProductList";
import DropdownButton from "../../components/shared/DropdownButton";
import Spinner from "../../components/Spinner";
import FormModal from "./components/FormModal";

function ProductAdmin() {
  const { dispatch, listProduct, loading } = useContext(ProductContext);
  const [chartData, setChartData] = useState({
    labels: ["Laptop", "PC-Hardware", "Peripherals", "Accessories"],
    datasets: [
      {
        label: "Number Of Products",
        data: [0, 0, 0, 0],
        backgroundColor: [
          "rgba(255, 99, 132, 0.6)",
          "rgba(54, 162, 235, 0.6)",
          "rgba(255, 206, 86, 0.6)",
          "rgba(75, 192, 192, 0.6)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
        ],
        borderWidth: 4,
      },
    ],
  });
  useEffect(() => {
    dispatch({ type: "SET_LOADING" });
    const unsubscribe = getAllProduct((data) => {
      dispatch({ type: "SET_LIST_PRODUCT", payload: data });
      dispatch({ type: "SET_LOADING_FALSE" });
      const totalProduct = calculateNumberOfProduct(data);
      setChartData((prevChartData) => ({
        ...prevChartData,
        datasets: [
          {
            ...prevChartData.datasets[0],
            data: [
              totalProduct.Laptop,
              totalProduct["PC-Hardware"],
              totalProduct.Peripherals,
              totalProduct.Accessories,
            ],
          },
        ],
      }));
    });
    return () => unsubscribe();
  }, [dispatch]);
  const type = [
    { id: 1, type: "Laptop" },
    { id: 2, type: "PC-Hardware" },
    { id: 3, type: "Peripherals" },
    { id: 4, type: "Accessories" },
  ];
  const [selectedType, setSelectedType] = useState(null);
  const handleTypeSelect = (type) => {
    setSelectedType(type);
  };
  const [openModel, setOpenModal] = useState(false);
  const handleModal = (state) => {
    setOpenModal(state);
  };
  if (loading) {
    return <Spinner />;
  }
  return (
    <section className="p-4 md:p-10">
      {openModel && (
        <FormModal
          selectedType={selectedType}
          openModal={handleModal}
          actionType="handleAddProduct"
        />
      )}
      <div className="flex justify-between mb-10">
        <button onClick={() => setSelectedType(null)}>
          <h1 className="text-2xl md:text-4xl font-bold">Product</h1>
        </button>
        <DropdownButton
          dropdownContent={type}
          onSelect={handleTypeSelect}
          openModal={handleModal}
        >
          Add Item
        </DropdownButton>
      </div>
      <div className="mt-10">
        <ProductList title="Product List" listProduct={listProduct} />
      </div>
    </section>
  );
}

export default ProductAdmin;
