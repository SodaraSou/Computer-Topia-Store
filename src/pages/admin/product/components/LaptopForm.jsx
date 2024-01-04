import { useState, useContext } from "react";
import {
  addProduct,
  updateProductById,
} from "../../../../contexts/product/ProductAction";
import StockImg from "../../../../assets/img/Computer_Topia_Stock_Img.png";
import Button from "../../../../ui/shared/Button";
import InputGroup from "../../../../ui/shared/InputGroup";
import Spinner from "../../../../ui/Spinner";
import ProductContext from "../../../../contexts/product/ProductContext";

function LaptopForm({ laptopType, openModal, item, actionType, productId }) {
  const { productDispatch, loading } = useContext(ProductContext);
  const [inputData, setInputData] = useState({
    brand: item ? item.brand : "",
    type: laptopType,
    productImgs: item
      ? item.productImgs
      : [StockImg, StockImg, StockImg, StockImg],
    model: item ? item.model : "",
    year: item ? item.year : "",
    cpu: item ? item.cpu : "",
    ram: item ? item.ram : "",
    storage: item ? item.storage : "",
    screen: item ? item.screen : "",
    vga: item ? item.vga : "",
    connectivity: item ? item.connectivity : "",
    os: item ? item.os : "",
    battery: item ? item.battery : "",
    keyboard: item ? item.keyboard : "",
    weight: item ? item.weight : "",
    color: item ? item.color : [],
    stock: item ? item.stock : 0,
    buyInPrice: item ? item.buyInPrice : 0,
    price: item ? item.price : 0,
    offer: item ? item.offer : 0,
    warranty: item ? item.warranty : "",
  });
  const onChange = (e) => {
    setInputData((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }));
  };
  const imgUrls = ["", "", "", ""];
  const [img, setImg] = useState([...inputData.productImgs]);
  const [previewImg, setPreviewImg] = useState([...inputData.productImgs]);
  const [imgIndex, setImgIndex] = useState([]);
  const onImgUrlChange = (e, index) => {
    setImg((prevImgUrls) => {
      const newImgUrls = [...prevImgUrls];
      newImgUrls[index] = e.target.files[0];
      return newImgUrls;
    });
    setPreviewImg((prevPreviewImg) => {
      const newImgUrls = [...prevPreviewImg];
      newImgUrls[index] = URL.createObjectURL(e.target.files[0]);
      return newImgUrls;
    });
    setImgIndex((prevImgIndex) => {
      const newImgIndex = [...prevImgIndex, index];
      return newImgIndex;
    });
  };
  let onClick = null;
  switch (actionType) {
    case "handleAddProduct":
      onClick = async () => {
        productDispatch({ type: "SET_LOADING" });
        await addProduct(inputData, img);
        openModal(false);
        productDispatch({ type: "SET_LOADING_FALSE" });
      };
      break;
    case "handleUpdateProduct":
      onClick = async () => {
        productDispatch({ type: "SET_LOADING" });
        await updateProductById(inputData, img, imgIndex, productId);
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
              {inputData.model ? inputData.model : laptopType}
            </h1>
            <Button customClass="bg-green-500" onClick={onClick}>
              Save
            </Button>
          </div>
          <div className="flex flex-col md:flex-row gap-4 md:gap-10">
            <div className="w-full md:w-1/2">
              <div className="grid grid-cols-2 gap-4 ">
                {imgUrls.map((_, index) => (
                  <div className="relative inline-block" key={index}>
                    <label
                      htmlFor={`fileInput${index}`}
                      className="cursor-pointer"
                    >
                      <img
                        src={
                          previewImg.length > 0 ? previewImg[index] : StockImg
                        }
                        alt={`stock_img_${index}`}
                      />
                    </label>
                    <input
                      id={`fileInput${index}`}
                      type="file"
                      className="hidden"
                      onChange={(e) => onImgUrlChange(e, index)}
                    />
                  </div>
                ))}
              </div>
            </div>
            <div className="w-full md:w-1/2">
              <form className="grid grid-cols-2 gap-4 pb-4 md:pb-10">
                <InputGroup
                  title="Brand"
                  type="text"
                  id="brand"
                  onChange={onChange}
                  value={inputData.brand}
                />
                <InputGroup
                  title="Type"
                  type="text"
                  id="type"
                  onChange={onChange}
                  value={laptopType}
                  disable={true}
                />
                <InputGroup
                  title="Model"
                  type="text"
                  id="model"
                  onChange={onChange}
                  value={inputData.model}
                />
                <InputGroup
                  title="Year"
                  type="text"
                  id="year"
                  onChange={onChange}
                  value={inputData.year}
                />
                <InputGroup
                  title="CPU"
                  type="text"
                  id="cpu"
                  onChange={onChange}
                  value={inputData.cpu}
                />
                <InputGroup
                  type="text"
                  title="RAM"
                  onChange={onChange}
                  id="ram"
                  value={inputData.ram}
                />
                <InputGroup
                  type="text"
                  title="Storage"
                  onChange={onChange}
                  id="storage"
                  value={inputData.storage}
                />
                <InputGroup
                  type="text"
                  title="Screen"
                  onChange={onChange}
                  id="screen"
                  value={inputData.screen}
                />
                <InputGroup
                  type="text"
                  title="VGA"
                  onChange={onChange}
                  id="vga"
                  value={inputData.vga}
                />
                <InputGroup
                  type="text"
                  title="Connectivity"
                  onChange={onChange}
                  id="connectivity"
                  value={inputData.connectivity}
                />
                <InputGroup
                  type="text"
                  title="OS"
                  onChange={onChange}
                  id="os"
                  value={inputData.os}
                />
                <InputGroup
                  type="text"
                  title="Battery"
                  onChange={onChange}
                  id="battery"
                  value={inputData.battery}
                />
                <InputGroup
                  type="text"
                  title="Keyboard"
                  onChange={onChange}
                  id="keyboard"
                  value={inputData.keyboard}
                />
                <InputGroup
                  type="text"
                  title="Weight"
                  onChange={onChange}
                  id="weight"
                  value={inputData.weight}
                />
                <InputGroup
                  type="text"
                  title="Color"
                  onChange={onChange}
                  id="color"
                  value={inputData.color}
                />
                <InputGroup
                  type="text"
                  title="Stock"
                  onChange={onChange}
                  id="stock"
                  value={inputData.stock}
                />
                <InputGroup
                  type="text"
                  title="Buy In Price"
                  onChange={onChange}
                  id="buyInPrice"
                  value={inputData.buyInPrice}
                />
                <InputGroup
                  type="text"
                  title="Price"
                  onChange={onChange}
                  id="price"
                  value={inputData.price}
                />
                <InputGroup
                  type="text"
                  title="Warranty"
                  onChange={onChange}
                  id="warranty"
                  value={inputData.warranty}
                />
                <InputGroup
                  type="text"
                  title="Offer"
                  onChange={onChange}
                  id="offer"
                  value={inputData.offer}
                />
              </form>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default LaptopForm;
