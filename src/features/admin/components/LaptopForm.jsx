import { useState } from "react";
import { addProduct } from "../../../services/product.api";
import Input from "../../../ui/shared/Input";
import Button from "../../../ui/shared/Button";
import DropdownButton from "../../../ui/shared/DropdownButton";

function LaptopForm() {
  const type = [
    { id: 1, type: "Laptop" },
    { id: 2, type: "PC Hardware" },
    { id: 3, type: "Peripharals" },
    { id: 4, type: "Accessories" },
  ];
  const [inputData, setInputData] = useState({
    brand: "",
    type: "",
    model: "",
    cpu: "",
    ram: "",
    storage: "",
    screen: "",
    vga: "",
    os: "",
    battery: "",
    keyboard: "",
    weight: "",
    color: "",
    stock: "",
    price: "",
    offer: "",
  });
  const onChange = (e) => {
    setInputData((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }));
  };
  const onSubmit = (e) => {
    e.preventDefault();
    addProduct(inputData);
  };
  return (
    <div className="w-full border rounded-xl p-4 md:p-10">
      <div className="flex justify-between items-center mb-4 md:mb-10">
        <h1 className="font-bold text-2xl md:text-4xl">Laptop</h1>
        <DropdownButton dropdownContent={type}>Type</DropdownButton>
      </div>
      <form className="grid grid-cols-2 md:grid-cols-3 gap-4">
        <Input type="text" title="Brand" onChange={onChange} id="brand" />
        <Input
          type="text"
          title="Type"
          onChange={onChange}
          id="type"
          value={type.type}
        />
        <Input
          type="text"
          title="Product Model"
          onChange={onChange}
          id="model"
        />
        <Input type="text" title="CPU" onChange={onChange} id="cpu" />
        <Input type="text" title="RAM" onChange={onChange} id="ram" />
        <Input type="text" title="Storage" onChange={onChange} id="storage" />
        <Input type="text" title="Screen" onChange={onChange} id="screen" />
        <Input type="text" title="VGA" onChange={onChange} id="vga" />
        <Input type="text" title="OS" onChange={onChange} id="os" />
        <Input type="text" title="Battery" onChange={onChange} id="battery" />
        <Input type="text" title="Keyboard" onChange={onChange} id="keyboard" />
        <Input type="text" title="Weight" onChange={onChange} id="weight" />
        <Input type="text" title="Color" onChange={onChange} id="color" />
        <Input type="text" title="Stock" onChange={onChange} id="stock" />
        <Input type="text" title="Price" onChange={onChange} id="price" />
      </form>
      <div className="w-full flex justify-end">
        <div className="w-full md:w-[200px] flex justify-end">
          <Button title="Register" onClick={onSubmit} />
        </div>
      </div>
    </div>
  );
}

export default LaptopForm;
