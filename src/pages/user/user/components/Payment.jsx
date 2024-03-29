import { useState } from "react";
import { updateUserPayment } from "../../../../services/user.api";
import SaveSvg from "../../../../assets/svg/floppy-disk-solid.svg";
import { toast } from "react-toastify";
import Input from "../../../../ui/shared/Input";

function Payment({ editSvg, userProfile }) {
  const [inputData, setInputData] = useState({
    cardName: userProfile.cardName,
    cardNumber: userProfile.cardNumber,
    cardExpDate: userProfile.cardExpDate,
  });
  const { cardName, cardNumber, cardExpDate } = inputData;
  const onChange = (e) => {
    setInputData((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }));
  };
  const [editMode, setEditMode] = useState(true);
  const onSubmit = async () => {
    if (!editMode) {
      const response = await updateUserPayment(inputData);
      if (response) {
        toast.success("Successfully Updated!");
      }
    }
    setEditMode(!editMode);
  };
  return (
    <div className="w-full border border-gray-200 shadow dark:bg-gray-800 dark:border-gray-700 p-4 md:p-10">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl md:text-4xl font-bold">Payment</h1>
        <button onClick={onSubmit} className="text-lg flex items-center gap-2">
          {editMode ? (
            <>
              <img src={editSvg} alt="editMode" width={18} height={18} />
              Edit
            </>
          ) : (
            <>
              <img src={SaveSvg} alt="editMode" width={18} height={18} /> Save
            </>
          )}
        </button>
      </div>
      <div className="h-[1px] bg-[#D9D9D9] mb-4"></div>
      <div className="grid grid-cols-3 gap-4 text-lg">
        <Input
          title="Card Name"
          type="text"
          placeholder="Card Name"
          id="cardName"
          className="outline-none text-lg w-full"
          disabled={editMode}
          onChange={onChange}
          value={cardName}
        />
        <Input
          title="Card Number"
          type="text"
          placeholder="Card Number"
          id="cardNumber"
          className="outline-none text-lg w-full"
          disabled={editMode}
          onChange={onChange}
          value={cardNumber}
        />
        <Input
          title="Expiration Date"
          type="text"
          placeholder="Expiration Date"
          id="cardExpDate"
          className="outline-none text-lg w-full"
          disabled={editMode}
          onChange={onChange}
          value={cardExpDate}
        />
      </div>
    </div>
  );
}

export default Payment;
