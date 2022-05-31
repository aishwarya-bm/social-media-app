import { createSlice } from "@reduxjs/toolkit";
import { getAllUsers, getUserData, getUserProfile } from "firebaseUtils/auth";

const initialState = {
  user: {},
  isLoggedIn: localStorage.getItem("userId") !== "" ? true : false,
  id: localStorage.getItem("userId"),
  isLoading: false,
  suggested:[],
  profileDetails:{}
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
      state.suggested = [];
      state.profileDetails={}
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
    [getAllUsers.pending]: state => {
      state.isLoading = true;
    },
    [getAllUsers.fulfilled]: (state, action) => {
      // const following = [...state.user.following, id]
      // const suggestedUsers = action.payload.filter(user => following.some(f.userId === user.id) )
      console.log(action.payload)
      state.suggested = action.payload;
      state.isLoading = false;
    },
    [getAllUsers.rejected]: state => {
      state.isLoading = false;
    },

    [getUserProfile.pending]: state => {
      state.isLoading = true;
    },
    [getUserProfile.fulfilled]: (state, action) => {
      state.profileDetails = action.payload;
      state.isLoading = false;
    },
    [getUserProfile.rejected]: state => {
      state.isLoading = false;
    },
  },
});

export const { login, logout, setUserProfile } = authSlice.actions;
export default authSlice.reducer;
