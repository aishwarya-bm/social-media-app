import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    user :{},
    isLoggedIn : false,
    id:null
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
    setUserProfile: (state,action) => {
      state.user = action.payload;
    },
  },
});

export const { login, logout, setUserProfile } = authSlice.actions;
export default authSlice.reducer;