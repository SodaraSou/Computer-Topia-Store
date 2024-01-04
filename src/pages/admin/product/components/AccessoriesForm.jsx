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

function AccessoriesForm({
  AccessoriesType,
  openModal,
  actionType,
  productId,
  item,
}) {
  const { productDispatch, loading } = useContext(ProductContext);
  const [productData, setProductData] = useState({
    model: item ? item.model : "",
    brand: item ? item.brand : "",
    type: AccessoriesType,
    year: item ? item.year : "",
    productImgs: item ? item.productImgs : [],
    accessoriesType: item ? item.accessoriesType : "",
    description1: item ? item.description1 : "",
    description2: item ? item.description2 : "",
    description3: item ? item.description3 : "",
    description4: item ? item.description4 : "",
    stock: item ? item.stock : 0,
    buyInPrice: item ? item.buyInPrice : 0,
    price: item ? item.price : 0,
    offer: item ? item.offer : 0,
    warranty: item ? item.warranty : "",
  });
  const onChange = (e) => {
    setProductData((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }));
  };
  const [imgIndex, setImgIndex] = useState([]);
  const [img, setImg] = useState([...productData.productImgs]);
  const [previewImg, setPreviewImg] = useState([...productData.productImgs]);
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
  let onClick = null;
  switch (actionType) {
    case "handleAddProduct":
      onClick = async () => {
        productDispatch({ type: "SET_LOADING" });
        await addProduct(productData, img);
        openModal(false);
        productDispatch({ type: "SET_LOADING_FALSE" });
      };
      break;
    case "handleUpdateProduct":
      onClick = async () => {
        productDispatch({ type: "SET_LOADING" });
        await updateProductById(productData, img, imgIndex, productId);
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
              {productData.model ? productData.model : AccessoriesType}
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
              <form className="grid grid-cols-2 gap-4 mb-4">
                <InputGroup
                  title="Brand"
                  type="text"
                  id="brand"
                  onChange={onChange}
                  value={productData.brand}
                />
                <InputGroup
                  title="Type"
                  type="text"
                  id="type"
                  onChange={onChange}
                  value={AccessoriesType}
                  disable={true}
                />
                <InputGroup
                  title="Model"
                  type="text"
                  id="model"
                  onChange={onChange}
                  value={productData.model}
                />
                <InputGroup
                  title="Year"
                  type="text"
                  id="year"
                  onChange={onChange}
                  value={productData.year}
                />
                <InputGroup
                  title="Accessories Type"
                  type="text"
                  id="accessoriesType"
                  onChange={onChange}
                  value={productData.accessoriesType}
                />
                <InputGroup
                  type="text"
                  title="Stock"
                  onChange={onChange}
                  id="stock"
                  value={productData.stock}
                />
                <InputGroup
                  type="text"
                  title="Buy In Price"
                  onChange={onChange}
                  id="buyInPrice"
                  value={productData.buyInPrice}
                />
                <InputGroup
                  type="text"
                  title="Price"
                  onChange={onChange}
                  id="price"
                  value={productData.price}
                />
                <InputGroup
                  type="text"
                  title="Offer"
                  onChange={onChange}
                  id="offer"
                  value={productData.offer}
                />
                <InputGroup
                  type="text"
                  title="Warranty"
                  onChange={onChange}
                  id="warranty"
                  value={productData.warranty}
                />
              </form>
              <div className="flex flex-col gap-4">
                <InputGroup
                  type="text"
                  title="Description 1"
                  onChange={onChange}
                  id="description1"
                  value={productData.description1}
                />
                <InputGroup
                  type="text"
                  title="Description 2"
                  onChange={onChange}
                  id="description2"
                  value={productData.description2}
                />
                <InputGroup
                  type="text"
                  title="Description 3"
                  onChange={onChange}
                  id="description3"
                  value={productData.description3}
                />
                <InputGroup
                  type="text"
                  title="Description 4"
                  onChange={onChange}
                  id="description4"
                  value={productData.description4}
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default AccessoriesForm;
