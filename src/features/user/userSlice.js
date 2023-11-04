import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userProfile: {},
  userOrderList: [],
  userOrderHistoryList: [],
  userOrderItem: {},
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    getProfile: (state, action) => {
      state.userProfile = action.payload;
    },
    getOrderList: (state, action) => {
      state.userOrderList = action.payload;
    },
    getOrderHistoryList: (state, action) => {
      state.userOrderHistoryList = action.payload;
    },
    getOrderItem: (state, action) => {
      state.userOrderItem = action.payload;
    },
  },
});

export const { getProfile, getOrderList, getOrderHistoryList, getOrderItem } =
  userSlice.actions;

export default userSlice.reducer;
