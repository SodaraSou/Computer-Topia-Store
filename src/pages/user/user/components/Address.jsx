import { useState } from "react";
import { updateUserAddress } from "../../../../services/user.api";
import SaveSvg from "../../../../assets/svg/floppy-disk-solid.svg";
import { toast } from "react-toastify";
import Input from "../../../../ui/shared/Input";

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
      const response = await updateUserAddress(inputData);
      if (response) {
        toast.success("Successfully Updated!");
      }
    }
    setEditMode(!editMode);
  };
  return (
    <div className="w-full border border-gray-200 shadow dark:bg-gray-800 dark:border-gray-700 p-4 md:p-10">
      <div className="flex justify-between items-center mb-4 md:mb-10">
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
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-lg">
        <Input
          title="House No"
          type="text"
          placeholder="House No"
          id="houseNo"
          className="outline-none text-lg w-full"
          disabled={editMode}
          onChange={onChange}
          value={houseNo}
        />
        <Input
          title="Street No"
          type="text"
          placeholder="Street No"
          id="streetNo"
          className="outline-none text-lg w-full"
          disabled={editMode}
          onChange={onChange}
          value={streetNo}
        />
        <Input
          title="Village"
          type="text"
          placeholder="Village"
          id="village"
          className="outline-none text-lg w-full"
          disabled={editMode}
          onChange={onChange}
          value={village}
        />
        <Input
          title="Commune"
          type="text"
          placeholder="Commune"
          id="commune"
          className="outline-none text-lg w-full"
          disabled={editMode}
          onChange={onChange}
          value={commune}
        />
        <Input
          title="District"
          type="text"
          placeholder="District"
          id="district"
          className="outline-none text-lg w-full"
          disabled={editMode}
          onChange={onChange}
          value={district}
        />
        <Input
          title="City/Province"
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
  );
}

export default Address;
