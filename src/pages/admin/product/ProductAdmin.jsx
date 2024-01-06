import { useContext, useEffect, useState } from "react";
import ProductContext from "../../../contexts/product/ProductContext";
import ProductList from "./components/ProductList";
import DropdownButton from "../../../ui/shared/DropdownButton";
import Spinner from "../../../ui/Spinner";
import FormModal from "./components/FormModal";

function ProductAdmin() {
  const { listProduct, loading } = useContext(ProductContext);
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
    return <Spinner fullScreenSpinner={true} />;
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
