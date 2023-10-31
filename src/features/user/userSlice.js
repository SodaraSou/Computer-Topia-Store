import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userId: "",
  userProfile: {},
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    getId: (state, action) => {
      state.userId = action.payload;
    },
    getProfile: (state, action) => {
      state.userProfile = action.payload;
    },
  },
});

export const { getProfile, getId } = userSlice.actions;

export default userSlice.reducer;

// export const getUserProfile = (state) => {
//   state.user.userProfile;
// };
