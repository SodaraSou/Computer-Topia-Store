import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userProfile: {},
  userOrderHistoryList: [],
  userOrderHistoryItem: {},
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    getProfile: (state, action) => {
      state.userProfile = action.payload;
    },
    getOrderHistoryList: (state, action) => {
      state.userOrderHistoryList = action.payload;
    },
    getOrderHistoryItem: (state, action) => {
      state.userOrderHistoryItem = action.payload;
    },
  },
});

export const { getProfile, getOrderHistoryList, getOrderHistoryItem } =
  userSlice.actions;

export default userSlice.reducer;
