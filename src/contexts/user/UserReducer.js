const UserReducer = (state, action) => {
  switch (action.type) {
    case "SET_USER_LIST":
      return {
        ...state,
        userList: action.payload,
        loading: false,
      };
    case "SET_LOADING":
      return {
        ...state,
        loading: true,
      };
    default:
      return state;
  }
};

export default UserReducer;
