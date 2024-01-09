import { useState } from "react";
import {
  updateUserProfile,
} from "../../../../services/user.api";
import SaveSvg from "../../../../assets/svg/floppy-disk-solid.svg";
import Button from "../../../../ui/shared/Button";
import ProfileAvatar from "../../../../ui/ProfileAvatar";
import Input from "../../../../ui/shared/Input";
import Address from "./Address";
import Payment from "./Payment";

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
    <section className="flex flex-col gap-4 md:gap-10">
      <div className="w-full border border-gray-200 shadow dark:bg-gray-800 dark:border-gray-700 p-4 md:p-10">
        <div className="flex justify-between items-center mb-4 md:mb-10">
          <h1 className="font-bold text-2xl md:text-4xl">My Profile</h1>
          <Button onClick={logOut} customClass="bg-red-500">
            Log Out
          </Button>
        </div>
        <div className="flex flex-col md:flex-row justify-between gap-4 md:gap-10">
          <div className="flex flex-col gap-4 justify-center items-center">
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
          <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-4">
            <Input
              title="Username"
              type="text"
              placeholder=""
              id="username"
              className="outline-none text-lg"
              disabled={editMode}
              onChange={onChange}
              value={username}
            />
            <Input
              title="Email"
              type="text"
              placeholder=""
              id="email"
              className="outline-none text-lg"
              disabled={true}
              onChange={onChange}
              value={email}
            />
            <Input
              title="Phone Number"
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
      <Address editSvg={editSvg} userProfile={userProfile} />
      <Payment editSvg={editSvg} userProfile={userProfile} />
      {/* <div className="w-full flex flex-col md:flex-row gap-4 md:gap-10 border border-gray-200 shadow dark:bg-gray-800 dark:border-gray-700 p-4 md:p-10">
        <div className="w-full md:w-1/2 flex items-center justify-between">
          <h2 className="text-2xl font-bold">Reset Password</h2>
          <Button
            onClick={() => resetPassword(email)}
            customClass="bg-blue-500 md:w-44"
          >
            Reset
          </Button>
        </div>
        <div className="w-full md:w-1/2 flex items-center justify-between">
          <h2 className="text-2xl font-bold">Delete Account</h2>
          <Button customClass="bg-red-500 md:w-44">Delete</Button>
        </div>
      </div> */}
    </section>
  );
}

export default ProfileSection;
