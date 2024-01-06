import { useContext, useState } from "react";
import {
  addProduct,
  updateProductById,
} from "../../../../contexts/product/ProductAction";
import StockImg from "../../../../assets/img/Computer_Topia_Stock_Img.png";
import ProductContext from "../../../../contexts/product/ProductContext";
import InputGroup from "../../../../ui/shared/InputGroup";
import Button from "../../../../ui/shared/Button";
import Spinner from "../../../../ui/Spinner";

function PCHardwareForm({
  PCHardwareType,
  openModal,
  item,
  actionType,
  productId,
}) {
  const { productDispatch, loading } = useContext(ProductContext);
  const [selectedValue, setSelectedValue] = useState(
    actionType === "handleUpdateProduct" ? item.hardwareType : "CPU"
  );
  const initialProductState = {
    CPU: {
      model: item ? item.model : "",
      brand: item ? item.brand : "",
      year: item ? item.year : "",
      productImgs: item ? item.productImgs : [],
      cores: item ? item.cores : "",
      type: PCHardwareType,
      hardwareType: "CPU",
      threads: item ? item.threads : "",
      clock_speed: item ? item.clock_speed : "",
      socket: item ? item.manufacturing_process : "",
      manufacturing_process: item ? item.manufacturing_process : "",
      integrated_graphics: item ? item.integrated_graphics : "",
      tdp: item ? item.tdp : "",
      cache: item ? item.cache : "",
      stock: item ? item.stock : 0,
      buyInPrice: item ? item.buyInPrice : 0,
      price: item ? item.price : 0,
      offer: item ? item.offer : 0,
      warranty: item ? item.warranty : "",
    },
    RAM: {
      model: item ? item.model : "",
      brand: item ? item.brand : "",
      year: item ? item.year : "",
      productImgs: item ? item.productImgs : [],
      type: PCHardwareType,
      hardwareType: "RAM",
      ram_type: item ? item.ram_type : "",
      capacity: item ? item.capacity : "",
      speed: item ? item.speed : "",
      stock: item ? item.stock : 0,
      buyInPrice: item ? item.buyInPrice : 0,
      price: item ? item.price : 0,
      offer: item ? item.offer : 0,
      warranty: item ? item.warranty : "",
    },
    GPU: {
      model: item ? item.model : "",
      brand: item ? item.brand : "",
      year: item ? item.year : "",
      productImgs: item ? item.productImgs : [],
      type: PCHardwareType,
      hardwareType: "GPU",
      vram: item ? item.vram : "",
      architecture: item ? item.architecture : "",
      base_clock: item ? item.base_clock : "",
      boost_clock: item ? item.boost_clock : "",
      connector: item ? item.connector : "",
      stock: item ? item.stock : 0,
      buyInPrice: item ? item.buyInPrice : 0,
      price: item ? item.price : 0,
      offer: item ? item.offer : 0,
      warranty: item ? item.warranty : "",
    },
    Motherboard: {
      model: item ? item.model : "",
      brand: item ? item.brand : "",
      year: item ? item.year : "",
      productImgs: item ? item.productImgs : [],
      type: PCHardwareType,
      hardwareType: "Motherboard",
      socket: item ? item.socket : "",
      form_factor: item ? item.form_factor : "",
      memory_slots: item ? item.memory_slots : "",
      pcie_slots: item ? item.pcie_slots : "",
      usb_slots: item ? item.usb_slots : "",
      ethernet_ports: item ? item.ethernet_ports : "",
      stock: item ? item.stock : 0,
      buyInPrice: item ? item.buyInPrice : 0,
      price: item ? item.price : 0,
      offer: item ? item.offer : 0,
      warranty: item ? item.warranty : "",
    },
    SSD: {
      model: item ? item.model : "",
      brand: item ? item.brand : "",
      year: item ? item.year : "",
      productImgs: item ? item.productImgs : [],
      type: PCHardwareType,
      hardwareType: "SSD",
      capacity: item ? item.capacity : "",
      form_factor: item ? item.form_factor : "",
      interface: item ? item.interface : "",
      read_speed: item ? item.read_speed : "",
      wirte_speed: item ? item.wirte_speed : "",
      stock: item ? item.stock : 0,
      buyInPrice: item ? item.buyInPrice : 0,
      price: item ? item.price : 0,
      offer: item ? item.offer : 0,
      warranty: item ? item.warranty : "",
    },
    HDD: {
      model: item ? item.model : "",
      brand: item ? item.brand : "",
      year: item ? item.year : "",
      productImgs: item ? item.productImgs : [],
      type: PCHardwareType,
      hardwareType: "HDD",
      capacity: item ? item.capacity : "",
      form_factor: item ? item.form_factor : "",
      interface: item ? item.interface : "",
      rotation_speed: item ? item.rotation_speed : "",
      stock: item ? item.stock : 0,
      buyInPrice: item ? item.buyInPrice : 0,
      price: item ? item.price : 0,
      offer: item ? item.offer : 0,
      warranty: item ? item.warranty : "",
    },
    Cooler: {
      model: item ? item.model : "",
      brand: item ? item.brand : "",
      year: item ? item.year : "",
      productImgs: item ? item.productImgs : [],
      type: PCHardwareType,
      hardwareType: "Cooler",
      coolerType: item ? item.coolerType : "",
      blockCompatibility: item ? item.blockCompatibility : "",
      fanSize: item ? item.fanSize : "",
      fanNoise: item ? item.fanNoise : "",
      fanConnector: item ? item.fanConnector : "",
      stock: item ? item.stock : 0,
      buyInPrice: item ? item.buyInPrice : 0,
      price: item ? item.price : 0,
      offer: item ? item.offer : 0,
      warranty: item ? item.warranty : "",
    },
    PSU: {
      model: item ? item.model : "",
      brand: item ? item.brand : "",
      year: item ? item.year : "",
      productImgs: item ? item.productImgs : [],
      type: PCHardwareType,
      hardwareType: "PSU",
      wattage: item ? item.wattage : "",
      efficiency_rating: item ? item.efficiency_rating : "",
      connector: item ? item.connector : "",
      dimension: item ? item.dimension : "",
      stock: item ? item.stock : 0,
      buyInPrice: item ? item.buyInPrice : 0,
      price: item ? item.price : 0,
      offer: item ? item.offer : 0,
      warranty: item ? item.warranty : "",
    },
    Case: {
      model: item ? item.model : "",
      brand: item ? item.brand : "",
      year: item ? item.year : "",
      productImgs: item ? item.productImgs : [],
      type: PCHardwareType,
      hardwareType: "Case",
      form_factor: item ? item.form_factor : "",
      side_panel: item ? item.side_panel : "",
      connector: item ? item.connector : "",
      fan_support: item ? item.fan_support : "",
      liquid_cooling: item ? item.liquid_cooling : "",
      dimension: item ? item.dimension : "",
      stock: item ? item.stock : 0,
      buyInPrice: item ? item.buyInPrice : 0,
      price: item ? item.price : 0,
      offer: item ? item.offer : 0,
      warranty: item ? item.warranty : "",
    },
  };
  const handleOption = (e) => {
    setSelectedValue(e.target.value);
  };
  const [productData, setProductData] = useState(initialProductState);
  const onChange = (e) => {
    const selectedProductType = productData[selectedValue];
    setProductData({
      ...productData,
      [selectedValue]: {
        ...selectedProductType,
        [e.target.id]: e.target.value,
      },
    });
  };
  const [imgIndex, setImgIndex] = useState([]);
  const [img, setImg] = useState([...productData[selectedValue].productImgs]);
  const [previewImg, setPreviewImg] = useState([
    ...productData[selectedValue].productImgs,
  ]);
  const onImgUrlChange = (e) => {
    setImg((prevImgUrl) => {
      const newImgUrl = [...prevImgUrl];
      newImgUrl[0] = e.target.files[0];
      return newImgUrl;
    });
    setPreviewImg((prevPreviewImg) => {
      const newImgUrl = [...prevPreviewImg];
      newImgUrl[0] = URL.createObjectURL(e.target.files[0]);
      return newImgUrl;
    });
    setImgIndex((prevImgIndex) => {
      const newImgIndex = [...prevImgIndex, 0];
      return newImgIndex;
    });
  };
  let hardwareFields = null;
  switch (selectedValue) {
    case "CPU":
      hardwareFields = Object.keys(initialProductState.CPU)
        .filter(
          (key) =>
            key !== "type" && key !== "hardwareType" && key !== "productImgs"
        )
        .map((key) => (
          <InputGroup
            key={key}
            title={key}
            id={key}
            onChange={onChange}
            value={productData.CPU[key]}
          />
        ));
      break;
    case "RAM":
      hardwareFields = Object.keys(initialProductState.RAM)
        .filter(
          (key) =>
            key !== "type" && key !== "hardwareType" && key !== "productImgs"
        )
        .map((key) => (
          <InputGroup
            key={key}
            title={key}
            id={key}
            onChange={onChange}
            value={productData.RAM[key]}
          />
        ));
      break;
    case "GPU":
      hardwareFields = Object.keys(initialProductState.GPU)
        .filter(
          (key) =>
            key !== "type" && key !== "hardwareType" && key !== "productImgs"
        )
        .map((key) => (
          <InputGroup
            key={key}
            title={key}
            id={key}
            onChange={onChange}
            value={productData.GPU[key]}
          />
        ));
      break;
    case "Motherboard":
      hardwareFields = Object.keys(initialProductState.Motherboard)
        .filter(
          (key) =>
            key !== "type" && key !== "hardwareType" && key !== "productImgs"
        )
        .map((key) => (
          <InputGroup
            key={key}
            title={key}
            id={key}
            onChange={onChange}
            value={productData.Motherboard[key]}
          />
        ));
      break;
    case "SSD":
      hardwareFields = Object.keys(initialProductState.SSD)
        .filter(
          (key) =>
            key !== "type" && key !== "hardwareType" && key !== "productImgs"
        )
        .map((key) => (
          <InputGroup
            key={key}
            title={key}
            id={key}
            onChange={onChange}
            value={productData.SSD[key]}
          />
        ));
      break;
    case "HDD":
      hardwareFields = Object.keys(initialProductState.HDD)
        .filter(
          (key) =>
            key !== "type" && key !== "hardwareType" && key !== "productImgs"
        )
        .map((key) => (
          <InputGroup
            key={key}
            title={key}
            id={key}
            onChange={onChange}
            value={productData.HDD[key]}
          />
        ));
      break;
    case "Cooler":
      hardwareFields = Object.keys(initialProductState.Cooler)
        .filter(
          (key) =>
            key !== "type" && key !== "hardwareType" && key !== "productImgs"
        )
        .map((key) => (
          <InputGroup
            key={key}
            title={key}
            id={key}
            onChange={onChange}
            value={productData.Cooler[key]}
          />
        ));
      break;
    case "PSU":
      hardwareFields = Object.keys(initialProductState.PSU)
        .filter(
          (key) =>
            key !== "type" && key !== "hardwareType" && key !== "productImgs"
        )
        .map((key) => (
          <InputGroup
            key={key}
            title={key}
            id={key}
            onChange={onChange}
            value={productData.PSU[key]}
          />
        ));
      break;
    case "Case":
      hardwareFields = Object.keys(initialProductState.Case)
        .filter(
          (key) =>
            key !== "type" && key !== "hardwareType" && key !== "productImgs"
        )
        .map((key) => (
          <InputGroup
            key={key}
            title={key}
            id={key}
            onChange={onChange}
            value={productData.Case[key]}
          />
        ));
      break;
    default:
      hardwareFields = null;
  }
  let onClick = null;
  switch (actionType) {
    case "handleAddProduct":
      onClick = async () => {
        productDispatch({ type: "SET_LOADING" });
        await addProduct(productData[selectedValue], img);
        openModal(false);
        productDispatch({ type: "SET_LOADING_FALSE" });
      };
      break;
    case "handleUpdateProduct":
      onClick = async () => {
        productDispatch({ type: "SET_LOADING" });
        await updateProductById(
          productData[selectedValue],
          img,
          imgIndex,
          productId
        );
        productDispatch({ type: "SET_LOADING_FALSE" });
      };
      break;
    default:
      return;
  }
  return (
    <>
      {loading ? (
        <Spinner />
      ) : (
        <div className="max-w-[1200px]">
          <div className="flex justify-between items-center mb-4 md:mb-10">
            <h1 className="text-2xl md:text-4xl font-bold">
              {item ? productData[selectedValue].model : PCHardwareType}
            </h1>
            <Button customClass="bg-green-500" onClick={onClick}>
              Save
            </Button>
          </div>
          <div className="flex flex-col md:flex-row gap-4 md:gap-10">
            <div className="w-full md:w-1/2">
              <div className="relative inline-block">
                <label htmlFor="fileInput" className="cursor-pointer">
                  <img
                    src={previewImg.length > 0 ? previewImg[0] : StockImg}
                    alt="stock_img"
                  />
                </label>
                <input
                  id="fileInput"
                  type="file"
                  className="hidden"
                  onChange={onImgUrlChange}
                />
              </div>
            </div>
            <div className="w-full md:w-1/2">
              <form className="grid grid-cols-2 gap-4">
                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="hardwareType"
                    className="text-sm md:text-lg font-semibold"
                  >
                    Hardware Type
                  </label>
                  <select
                    name="hardwareType"
                    id="hardwareType"
                    className="rounded-xl w-full px-4 py-2 border focus:outline-none focus:ring focus:border-[#5E17EB]"
                    disabled={
                      actionType === "handleUpdateProduct" ? true : false
                    }
                    onChange={handleOption}
                  >
                    <option value="CPU">CPU</option>
                    <option value="RAM">RAM</option>
                    <option value="GPU">GPU</option>
                    <option value="Motherboard">Mother Board</option>
                    <option value="SSD">SSD</option>
                    <option value="HDD">Hard Drive</option>
                    <option value="Cooler">Cooler</option>
                    <option value="PSU">Power Supply</option>
                    <option value="Case">PC Case</option>
                  </select>
                </div>
                <InputGroup
                  title="Type"
                  id="type"
                  value={PCHardwareType}
                  onChange={onChange}
                  disable={true}
                />
                {hardwareFields}
              </form>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default PCHardwareForm;
