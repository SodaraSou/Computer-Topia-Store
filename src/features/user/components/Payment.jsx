import { useState } from "react";
import { updateUserPayment } from "../../../services/user.api";
import SaveSvg from "../../../assets/svg/floppy-disk-solid.svg";
import Spinner from "../../../ui/Spinner";

function Payment({ editSvg, userProfile, loading }) {
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
      await updateUserPayment(inputData);
    }
    setEditMode(!editMode);
  };
  return (
    <div className="w-full border border-[#D9D9D9] rounded-xl p-4 md:p-10">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl md:text-4xl font-bold">Payment</h1>
        <button onClick={onSubmit}>
          {editMode ? (
            <>
              <img src={editSvg} alt="editMode" width={18} height={18} />
            </>
          ) : (
            <>
              <img src={SaveSvg} alt="editMode" width={18} height={18} />
            </>
          )}
        </button>
      </div>
      <div className="h-[1px] w-full bg-[#D9D9D9] my-4"></div>
      {loading ? (
        <div className="flex justify-center items-center">
          <Spinner />
        </div>
      ) : (
        <div className="text-lg">
          <input
            type="text"
            placeholder="Card Name"
            id="cardName"
            className="outline-none text-lg w-full"
            disabled={editMode}
            onChange={onChange}
            value={cardName}
          />
          <input
            type="text"
            placeholder="Card Number"
            id="cardNumber"
            className="outline-none text-lg w-full"
            disabled={editMode}
            onChange={onChange}
            value={cardNumber}
          />
          <input
            type="text"
            placeholder="Expiration Date"
            id="cardExpDate"
            className="outline-none text-lg w-full"
            disabled={editMode}
            onChange={onChange}
            value={cardExpDate}
          />
        </div>
      )}
    </div>
  );
}

export default Payment;
