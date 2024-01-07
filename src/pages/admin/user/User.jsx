import { useContext, useState } from "react";
import { createAdminAcc } from "../../../contexts/user/UserAction";
import UserContext from "../../../contexts/user/UserContext";
import UserList from "./components/UserList";
import Button from "../../../ui/shared/Button";
import Modal from "../../../ui/shared/Modal";
import Input from "../../../ui/shared/Input";

function User() {
  const { userList } = useContext(UserContext);
  const [openModal, setOpenModal] = useState(false);
  const [inputData, setInputData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const onChange = (e) => {
    setInputData((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }));
  };
  const handleOpenModal = (state) => {
    setOpenModal(state);
  };
  const onSubmit = async (e) => {
    e.preventDefault();
    const response = await createAdminAcc(inputData);
    if (response) {
      setOpenModal(false);
    }
  };
  return (
    <>
      {openModal && (
        <Modal handleModal={handleOpenModal}>
          <section className="w-full p-4 md:p-10 border bg-white border-gray-200 shadow dark:bg-gray-800 dark:border-gray-700">
            <h1 className="text-2xl md:text-4xl font-bold mb-4 md:mb-10">
              Register Admin
            </h1>
            <form onSubmit={onSubmit} className="flex flex-col gap-4">
              <div className="flex flex-col gap-4">
                <Input
                  type="text"
                  title="Username"
                  placeholder="Username"
                  id="username"
                  onChange={onChange}
                  isRequired={true}
                />
                <Input
                  type="email"
                  title="Email"
                  placeholder="email@gmail.com"
                  id="email"
                  onChange={onChange}
                  isRequired={true}
                />
                <Input
                  type="password"
                  title="Password"
                  placeholder="********"
                  id="password"
                  onChange={onChange}
                  isRequired={true}
                />
                <Input
                  type="password"
                  title="Confirm Password"
                  placeholder="********"
                  id="confirmPassword"
                  onChange={onChange}
                  isRequired={true}
                />
              </div>
              <div className="flex justify-end">
                <Button type="submit">Register</Button>
              </div>
            </form>
          </section>
        </Modal>
      )}
      <section className="p-4 md:p-10">
        <div className="flex justify-between mb-4 md:mb-10">
          <h1 className="text-2xl md:text-4xl font-bold">User</h1>
          <Button onClick={() => handleOpenModal(true)} customClass="md:w-36">
            Register Admin
          </Button>
        </div>
        <div>
          <UserList userList={userList} />
        </div>
      </section>
    </>
  );
}

export default User;
