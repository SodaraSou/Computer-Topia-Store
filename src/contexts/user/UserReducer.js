const UserReducer = (state, action) => {
  switch (action.type) {
    case "GET_ALL_USER":
      return {
        ...state,
        userList: action.payload,
      };
    default:
      return state;
  }
};

export default UserReducer;
