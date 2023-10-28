import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userId: "",
  userProfile: {},
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    getUserId(state, action) {
      state.userId = action.payload;
    },
    getProfile: (state, action) => {
      state.userProfile = action.payload;
    },
  },
});

export const { getProfile, getUserId } = userSlice.actions;

export default userSlice.reducer;
