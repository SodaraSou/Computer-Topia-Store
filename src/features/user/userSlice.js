import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userProfile: {},
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    getProfile: (state, action) => {
      state.userProfile = action.payload;
    },
  },
});

export const { getProfile } = userSlice.actions;

export default userSlice.reducer;

// export const getUserProfile = (state) => {
//   state.user.userProfile;
// };
