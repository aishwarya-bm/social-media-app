import { createSlice } from "@reduxjs/toolkit";
import { getUserData } from "firebaseUtils/auth";

const initialState = {
  user: {},
  isLoggedIn: localStorage.getItem("userId") !== "" ? true : false,
  id: localStorage.getItem("userId"),
  isLoading: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action) => {
      state.isLoggedIn = true;
      state.id = action.payload;
    },
    logout: state => {
      state.isLoggedIn = false;
      state.id = null;
      state.user = {};
      localStorage.removeItem("userId");
    },
    setUserProfile: (state, action) => {
      state.user = action.payload;
    },
  },
  extraReducers: {
    [getUserData.pending]: state => {
      state.isLoading = true;
    },
    [getUserData.fulfilled]: (state, action) => {
      state.user = action.payload;
      state.isLoading = false;
    },
    [getUserData.rejected]: state => {
      state.isLoading = false;
    },
  },
});

export const { login, logout, setUserProfile } = authSlice.actions;
export default authSlice.reducer;
