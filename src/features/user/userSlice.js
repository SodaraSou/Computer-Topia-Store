import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userProfile: {},
  userOrderList: [],
  userOrderHistoryList: [],
  loading: false,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setProfile: (state, action) => {
      state.userProfile = action.payload;
    },
    setOrderList: (state, action) => {
      state.userOrderList = action.payload;
    },
    setOrderListHistory: (state, action) => {
      state.userOrderHistoryList = action.payload;
      state.loading = false;
    },
    setLoading: (state) => {
      state.loading = true;
    },
  },
});

export const { setProfile, setOrderList, setOrderListHistory, setLoading } =
  userSlice.actions;

export default userSlice.reducer;
