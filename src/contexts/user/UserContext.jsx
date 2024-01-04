import { createContext, useReducer } from "react";
import UserReducer from "./UserReducer";

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const initialState = {
    userList: [],
    loading: false,
  };

  const [state, userDispatch] = useReducer(UserReducer, initialState);

  return (
    <UserContext.Provider value={{ ...state, userDispatch }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContext;
