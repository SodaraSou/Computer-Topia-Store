import { useState } from "react";
import { updateUserAddress } from "../../../../services/user.api";
import SaveSvg from "../../../assets/svg/floppy-disk-solid.svg";

function Address({ editSvg, userProfile }) {
  const [inputData, setInputData] = useState({
    houseNo: userProfile.houseNo,
    streetNo: userProfile.streetNo,
    village: userProfile.village,
    commune: userProfile.commune,
    district: userProfile.district,
    province: userProfile.province,
  });
  const { houseNo, streetNo, village, commune, district, province } = inputData;
  const onChange = (e) => {
    setInputData((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }));
  };
  const [editMode, setEditMode] = useState(true);
  const onSubmit = async () => {
    if (!editMode) {
      await updateUserAddress(inputData);
    }
    setEditMode(!editMode);
  };
  return (
    <div className="w-full border border-[#D9D9D9] rounded-xl p-4 md:p-10">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl md:text-4xl font-bold">Address</h1>
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
      <div className="text-lg">
        <div className="flex">
          <input
            type="text"
            placeholder="House No"
            id="houseNo"
            className="outline-none text-lg w-full"
            disabled={editMode}
            onChange={onChange}
            value={houseNo}
          />
          <input
            type="text"
            placeholder="Street No"
            id="streetNo"
            className="outline-none text-lg w-full"
            disabled={editMode}
            onChange={onChange}
            value={streetNo}
          />
        </div>
        <div className="flex">
          <input
            type="text"
            placeholder="Village"
            id="village"
            className="outline-none text-lg w-full"
            disabled={editMode}
            onChange={onChange}
            value={village}
          />
          <input
            type="text"
            placeholder="Commune"
            id="commune"
            className="outline-none text-lg w-full"
            disabled={editMode}
            onChange={onChange}
            value={commune}
          />
        </div>
        <div className="flex">
          <input
            type="text"
            placeholder="District"
            id="district"
            className="outline-none text-lg w-full"
            disabled={editMode}
            onChange={onChange}
            value={district}
          />
          <input
            type="text"
            placeholder="City/Province"
            id="province"
            className="outline-none text-lg w-full"
            disabled={editMode}
            onChange={onChange}
            value={province}
          />
        </div>
      </div>
    </div>
  );
}

export default Address;
