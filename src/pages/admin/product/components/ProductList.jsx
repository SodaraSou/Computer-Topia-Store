import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { sortProductByType } from "../../../../contexts/product/ProductAction";
import DropdownButton from "../../../../ui/shared/DropdownButton";
import Paginaiton from "../../../../ui/shared/Pagination";

function ProductList({ title, listProduct }) {
  const sortType = [
    { id: 1, type: "Highest Price" },
    { id: 2, type: "Lowest Price" },
    { id: 3, type: "Laptop" },
    { id: 4, type: "PC-Hardware" },
    { id: 5, type: "Peripherals" },
    { id: 6, type: "Accessories" },
  ];
  const [selectedType, setSelectedType] = useState(null);
  const [sortedList, setSortedList] = useState(null);
  const [products, setProducts] = useState([]);
  const [query, setQuery] = useState("");
  useEffect(() => {
    setProducts(listProduct);
  }, [listProduct]);
  const handleTypeSelect = (type) => {
    setQuery("");
    setSelectedType(type);
    const filterList = sortProductByType(listProduct, type);
    setSortedList(filterList);
  };
  const onChange = (e) => {
    setSelectedType(null);
    const value = e.target.value;
    setQuery(value);
    handleQuery(value);
  };
  const handleQuery = (newQuery) => {
    if (query !== "") {
      const queryProduct = listProduct.filter((product) => {
        return product.data.model
          .toLocaleLowerCase()
          .includes(newQuery.toLocaleLowerCase());
      });
      setProducts(queryProduct);
    }
  };
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
      className="p-4 md:p-10 bg-[#EAECF6] h-auto flex flex-col justify-between"
    >
      <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-4 md:mb-10">
        <div className="mb-4 md:mb-0">
          <button onClick={() => setSelectedType(null)}>
            <h1 className="text-2xl md:text-4xl font-bold">
              {selectedType ? selectedType : title}
            </h1>
          </button>
        </div>
        <div className="flex items-center gap-4">
          <input
            type="text"
            value={query}
            onChange={onChange}
            className="w-full md:w-[347px] h-[40px] rounded-xl px-4 py-2 border focus:outline-none focus:ring focus:border-[#5E17EB]"
            placeholder="Search Product"
          />
          <DropdownButton
            children="Sort"
            dropdownContent={sortType}
            onSelect={handleTypeSelect}
          />
        </div>
      </div>
      <Paginaiton
        listItem={selectedType ? sortedList : products}
        listType="Product"
      />
    </motion.div>
  );
}

export default ProductList;
