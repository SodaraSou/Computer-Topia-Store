function ProfileAvatar({ disabled, onChange, imgUrl }) {
  return (
    <div className="relative inline-block">
      <label htmlFor="fileInput" className={!disabled ? `cursor-pointer` : ""}>
        <img
          src={
            imgUrl ||
            "https://static.vecteezy.com/system/resources/previews/001/840/612/non_2x/picture-profile-icon-male-icon-human-or-people-sign-and-symbol-free-vector.jpg"
          }
          alt="Profile Image"
          className="rounded-full w-40"
        />
      </label>
      <input
        id="fileInput"
        type="file"
        className="hidden"
        onChange={onChange}
        disabled={disabled}
      />
    </div>
  );
}

export default ProfileAvatar;
