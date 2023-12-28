import { useState } from "react";
import { removeProductById } from "../../../../contexts/product/ProductAction";
import StockImg from "../../../../assets/img/Computer_Topia_Stock_Img.png";
import Button from "../../../../ui/shared/Button";
import FormModal from "./FormModal";

function ProductTile({ item, productId }) {
  const [openModal, setOpenModal] = useState(false);
  const handleModal = (state) => {
    setOpenModal(state);
  };
  const handleDelete = async () => {
    const response = await removeProductById(productId);
    if (response) {
      setOpenModal(false);
    }
  };
  return (
    <>
      {openModal && (
        <FormModal
          selectedType={item.type}
          openModal={handleModal}
          actionType="handleUpdateProduct"
          item={item}
          productId={productId}
        />
      )}
      <div className="w-full bg-white p-4 flex gap-4 items-center">
        <img
          src={item.productImgs.length > 0 ? item.productImgs[0] : StockImg}
          alt="stock_img"
          className="h-20 w-20"
        />
        <div className="w-full flex flex-col md:flex-row gap-2 justify-center md:justify-between items-start md:items-center">
          <h3 className="text-md md:text-lg font-semibold">{item.model}</h3>
          <div className="flex w-full md:w-auto justify-between items-center gap-2 md:gap-4">
            {item.stock === 0 || item.stock === "0" ? (
              <p>Out of stock</p>
            ) : (
              <p>Stock: {item.stock}</p>
            )}
            <div className="flex gap-2 md:gap-4">
              <Button
                customClass="bg-blue-500"
                onClick={() => handleModal(true)}
              >
                Edit
              </Button>
              <Button customClass="bg-red-500" onClick={handleDelete}>
                Delete
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductTile;
