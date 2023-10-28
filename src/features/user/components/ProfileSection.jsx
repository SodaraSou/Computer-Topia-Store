function ProfileSection({ editSvg, logOut }) {
  return (
    <div className="w-full border rounded-xl p-4 md:p-10">
      <div className="flex justify-between items-center mb-4 md:mb-10">
        <h1 className="font-bold text-2xl md:text-4xl">My Profile</h1>
        <button
          onClick={logOut}
          className="bg-red-500 h-10 w-32 rounded-full font-bold"
        >
          Log Out
        </button>
      </div>
      <div className="flex flex-col items-center md:flex-row gap-10">
        <div className="w-full md:w-1/4 flex flex-col gap-4 justify-center items-center">
          <img
            src="https://static.vecteezy.com/system/resources/previews/001/840/612/non_2x/picture-profile-icon-male-icon-human-or-people-sign-and-symbol-free-vector.jpg"
            alt="Profile Image"
            className="rounded-full w-40 h-40"
          />
          <button
            // onClick={() => setEditStatus(!editStatus)}
            className="text-lg flex items-center gap-2"
          >
            <img src={editSvg} alt="edit" width={18} height={18} />
            Edit Profile
          </button>
        </div>
        <div className="w-full flex flex-col gap-4">
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
              className="rounded-lg w-full h-[38px] px-4 border"
              //   disabled={editStatus}
              // value={test}
            />
          </div>
          <div className="w-full flex flex-col gap-2">
            <label htmlFor="email" className="text-md md:text-lg font-semibold">
              Email
            </label>
            <input
              type="text"
              placeholder=""
              id="email"
              className="rounded-lg w-full h-[38px] px-4 border"
              //   disabled={editStatus}
            />
          </div>
          <div className="w-full md:w-1/2 flex flex-col gap-2">
            <label
              htmlFor="phoneNumber"
              className="text-md md:text-lg font-semibold"
            >
              Phone Number
            </label>
            <input
              type="text"
              placeholder=""
              id="phoneNumber"
              className="rounded-lg w-full h-[38px] px-4 border"
              //   disabled={editStatus}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfileSection;
