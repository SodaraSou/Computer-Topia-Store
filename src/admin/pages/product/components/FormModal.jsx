import LaptopForm from "./LaptopForm";
import PCHardwareForm from "./PCHardwareForm";
import PeripheralForm from "./PeripheralForm";
import AccessoriesForm from "./AccessoriesForm";
import Modal from "../../../components/shared/Modal";

function FormModal({ selectedType, openModal, actionType, productId, item }) {
  let selectedComponent = null;
  switch (selectedType) {
    case "Laptop":
      selectedComponent = (
        <LaptopForm
          laptopType={selectedType}
          openModal={openModal}
          actionType={actionType}
          productId={productId}
          item={item}
        />
      );
      break;
    case "PC-Hardware":
      selectedComponent = (
        <PCHardwareForm
          PCHardwareType={selectedType}
          openModal={openModal}
          actionType={actionType}
          productId={productId}
          item={item}
        />
      );
      break;
    case "Peripherals":
      selectedComponent = (
        <PeripheralForm
          PeripheralsType={selectedType}
          openModal={openModal}
          actionType={actionType}
          productId={productId}
          item={item}
        />
      );
      break;
    case "Accessories":
      selectedComponent = (
        <AccessoriesForm
          AccessoriesType={selectedType}
          openModal={openModal}
          actionType={actionType}
          productId={productId}
          item={item}
        />
      );
      break;
    default:
      selectedComponent = null;
  }
  return <Modal openModal={openModal}>{selectedComponent}</Modal>;
}

export default FormModal;
