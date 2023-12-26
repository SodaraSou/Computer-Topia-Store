import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userProfile: {},
  userOrderList: [],
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
      state.loading = false;
    },
    setLoading: (state) => {
      state.loading = true;
    },
  },
});

export const { setProfile, setOrderList, setLoading } = userSlice.actions;

export default userSlice.reducer;
