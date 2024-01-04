import { useState, useEffect, useContext } from "react";
// import { getAllUser } from "../../../contexts/user/UserAction";
import UserContext from "../../../contexts/user/UserContext";
import UserList from "./components/UserList";
// import Spinner from "../../../ui/Spinner";

function User() {
  const { userList } = useContext(UserContext);
  // useEffect(() => {
  //   userDispatch({ type: "SET_LOADING" });
  //   // const unsubscribeUserList = getAllUser((data) => {
  //   //   userDispatch({ type: "SET_USER_LIST", payload: data });
  //   // });
  //   // return () => {
  //   //   unsubscribeUserList();
  //   // };
  // }, [userDispatch]);
  // if (loading) {
  //   return <Spinner fullScreenSpinner={true} />;
  // }
  return (
    <section className="p-4 md:p-10">
      <div className="flex justify-between mb-4 md:mb-10">
        <h1 className="text-2xl md:text-4xl font-bold">User</h1>
      </div>
      <div>
        <UserList userList={userList} />
      </div>
    </section>
  );
}

export default User;
