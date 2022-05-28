import { createSlice } from "@reduxjs/toolkit";
import { getUserData } from "firebaseUtils/auth";

const initialState = {
    user :{},
    isLoggedIn : false,
    id:null,
    isLoading:false
}

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action) => {
      state.isLoggedIn = true;
      state.id = action.payload;
    },
    logout: state => {
      return initialState;
    },
    setUserProfile: (state, action) => {
      state.user = action.payload;
    },
  },
  extraReducers: {
    [getUserData.pending]: state => {
      state.isLoading = true;
    },
    [getUserData.fulfilled]: (state,action) => {
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