import { useState } from "react";
import Modal from "../../../../ui/shared/Modal";
import Button from "../../../../ui/shared/Button";
import { resetPassword } from "../../../../services/user.api";

function UserCard({ user, userId }) {
  const [openUser, setOpenUser] = useState(false);
  const handleOpenModal = (state) => {
    setOpenUser(state);
  };
  return (
    <>
      {openUser && (
        <Modal handleModal={handleOpenModal}>
          <section className="max-w-[1200px]">
            <div className="w-full p-4 md:p-10 border bg-white border-gray-200 shadow dark:bg-gray-800 dark:border-gray-700">
              <h1 className="text-2xl md:text-4xl font-bold">User Address</h1>
              <div className="h-[1px] bg-[#D9D9D9] my-4"></div>
              <div className="flex">
                <input
                  type="text"
                  placeholder="House No"
                  className="outline-none text-sm md:text-lg w-full"
                  disabled={true}
                  value={user.houseNo}
                />
                <input
                  type="text"
                  placeholder="Street No"
                  className="outline-none text-sm md:text-lg w-full"
                  disabled={true}
                  value={user.streetNo}
                />
              </div>
              <div className="flex">
                <input
                  type="text"
                  placeholder="Village"
                  className="outline-none text-sm md:text-lg w-full"
                  disabled={true}
                  value={user.village}
                />
                <input
                  type="text"
                  placeholder="Commune"
                  className="outline-none text-sm md:text-lg w-full"
                  disabled={true}
                  value={user.commune}
                />
              </div>
              <div className="flex">
                <input
                  type="text"
                  placeholder="District"
                  className="outline-none text-sm md:text-lg w-full"
                  disabled={true}
                  value={user.district}
                />
                <input
                  type="text"
                  placeholder="City/Province"
                  className="outline-none text-sm md:text-lg w-full"
                  disabled={true}
                  value={user.province}
                />
              </div>
            </div>
          </section>
        </Modal>
      )}
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
            <h3 className="text-xs md:text-sm text-blue-500">{userId}</h3>
            <h2 className="text-base md:text-lg font-semibold">
              {user.username}
            </h2>
            <h3 className="text-base">{user.email}</h3>
            <h3 className="text-base">{user.phoneNumber}</h3>
          </div>
        </div>
        <div className="flex justify-end">
          {user.role === "user" && (
            <Button
              onClick={() => handleOpenModal(true)}
              customClass="text-sm md:text-base"
            >
              Address
            </Button>
          )}
        </div>
      </div>
    </>
  );
}

export default UserCard;
