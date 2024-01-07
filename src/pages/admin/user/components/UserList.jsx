import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { sortUser } from "../../../../contexts/user/UserAction";
import Pagination from "../../../../ui/shared/Pagination";
import DropdownButton from "../../../../ui/shared/DropdownButton";

function UserList({ userList }) {
  const dropdownContent = [{ id: 1, type: "Name A-Z" }];
  const [selectedType, setSelectedType] = useState(null);
  const [sortedList, setSortedList] = useState(null);
  const [users, setUsers] = useState([]);
  const [query, setQuery] = useState("");
  useEffect(() => {
    setUsers(userList);
  }, [userList]);
  const handleTypeSelect = (type) => {
    setQuery("");
    setSelectedType(type);
    const filterList = sortUser(userList);
    setSortedList(filterList);
  };
  const onChange = (e) => {
    setSelectedType(null);
    const value = e.target.value;
    setQuery(value);
    handleQuery(value);
  };
  const handleQuery = (newQuery) => {
    if (query !== "") {
      const queryUser = userList.filter((user) => {
        console.log(user.data.username);
        return user.data.username
          .toLocaleLowerCase()
          .includes(newQuery.toLocaleLowerCase());
      });
      setUsers(queryUser);
    }
  };
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
      className="p-4 md:p-10 bg-[#EAECF6] h-auto flex flex-col justify-between"
    >
      <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-4 md:mb-10">
        <div className="mb-4 md:mb-0">
          <button onClick={() => setSelectedType(null)}>
            <h1 className="text-2xl md:text-4xl font-bold">
              {selectedType ? selectedType : "User List"}
            </h1>
          </button>
        </div>
        <div className="flex items-center gap-4">
          <input
            type="text"
            value={query}
            onChange={onChange}
            className="w-full md:w-[347px] h-[40px] rounded-xl px-4 py-2 border focus:outline-none focus:ring focus:border-[#5E17EB]"
            placeholder="Search User"
          />
          <DropdownButton
            dropdownContent={dropdownContent}
            onSelect={handleTypeSelect}
          >
            Filter
          </DropdownButton>
        </div>
      </div>
      <Pagination
        listItem={selectedType ? sortedList : users}
        listType="User"
      />
    </motion.div>
  );
}

export default UserList;
