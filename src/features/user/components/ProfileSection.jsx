import { useState } from "react";
import { updateUserProfile } from "../../../services/user.api";
import SaveSvg from "../../../assets/svg/floppy-disk-solid.svg";
import Button from "../../../ui/shared/Button";
import ProfileAvatar from "../../../ui/ProfileAvatar";
import Spinner from "../../../ui/Spinner";

function ProfileSection({ editSvg, logOut, userProfile, loading }) {
  const [inputData, setInputData] = useState({
    username: userProfile.username,
    email: userProfile.email,
    phoneNumber: userProfile.phoneNumber,
    profileImg: userProfile.profileImg,
  });
  const [imgUrl, setImgUrl] = useState("");
  const onImgUrlChange = (e) => {
    setImgUrl(e.target.files[0]);
  };
  const { username, email, phoneNumber, profileImg } = inputData;
  const [editMode, setEditMode] = useState(true);
  const onChange = (e) => {
    setInputData((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }));
  };
  const onSubmit = async () => {
    if (!editMode) {
      await updateUserProfile(username, phoneNumber, imgUrl);
    }
    setEditMode(!editMode);
  };
  return (
    <div className="w-full border border-[#D9D9D9] rounded-xl p-4 md:p-10">
      <div className="flex justify-between items-center mb-4">
        <h1 className="font-bold text-2xl md:text-4xl">My Profile</h1>
        <Button onClick={logOut} customClass="bg-red-500">
          Log Out
        </Button>
      </div>
      <div className="h-[1px] w-full bg-[#D9D9D9] my-4"></div>
      {loading ? (
        <div className="w-full p-10 flex justify-center items-center">
          <Spinner />
        </div>
      ) : (
        <div className="flex flex-col items-center md:flex-row gap-10">
          <div className="w-full md:w-1/2 flex flex-col gap-4 justify-center items-center">
            <ProfileAvatar
              disabled={editMode}
              onChange={onImgUrlChange}
              imgUrl={profileImg}
            />
            <button
              onClick={onSubmit}
              className="text-lg flex items-center gap-2"
            >
              {editMode ? (
                <>
                  <img src={editSvg} alt="editMode" width={18} height={18} />
                  Edit
                </>
              ) : (
                <>
                  <img src={SaveSvg} alt="editMode" width={18} height={18} />{" "}
                  Save
                </>
              )}
            </button>
          </div>
          <div className="w-full md:w-1/2 flex flex-col gap-4">
            <div className="w-full flex flex-col gap-2">
              <label
                htmlFor="username"
                className="text-md md:text-lg font-semibold"
              >
                Username
              </label>
              <input
                type="text"
                placeholder=""
                id="username"
                className="outline-none text-lg"
                disabled={editMode}
                onChange={onChange}
                value={username}
              />
            </div>
            <div className="w-full flex flex-col gap-2">
              <label
                htmlFor="email"
                className="text-md md:text-lg font-semibold"
              >
                Email
              </label>
              <input
                type="text"
                placeholder=""
                id="email"
                className="outline-none text-lg"
                disabled={true}
                onChange={onChange}
                value={email}
              />
            </div>
            <div className="w-full flex flex-col gap-2">
              <label
                htmlFor="phoneNumber"
                className="text-md md:text-lg font-semibold"
              >
                Phone
              </label>
              <input
                type="text"
                placeholder=""
                id="phoneNumber"
                className="outline-none text-lg"
                disabled={editMode}
                onChange={onChange}
                value={phoneNumber}
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default ProfileSection;
