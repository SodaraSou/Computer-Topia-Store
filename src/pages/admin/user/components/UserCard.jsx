function UserCard({ user, userId }) {
  return (
    <div className="border bg-white border-gray-200 shadow dark:bg-gray-800 dark:border-gray-700 p-4 flex flex-col md:flex-row justify-between md:items-center">
      <div className="flex items-center gap-4">
        <img
          src={
            user.profileImg ||
            "https://static.vecteezy.com/system/resources/previews/001/840/612/non_2x/picture-profile-icon-male-icon-human-or-people-sign-and-symbol-free-vector.jpg"
          }
          alt="user-profile"
          className="h-20 w-20 rounded-full object-cover"
        />
        <div className="flex flex-col gap-1 items-start">
          <h2 className="text-base md:text-lg font-semibold">
            {user.username}
          </h2>
          <h3 className="text-base">{user.email}</h3>
          <h3 className="text-base">{user.phoneNumber}</h3>
        </div>
      </div>
    </div>
  );
}

export default UserCard;
