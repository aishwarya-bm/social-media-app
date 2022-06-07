const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
        mode: localStorage.getItem("appTheme") || "light"
    }

const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    setMode: (state, action) => {
      state.mode = action.payload;
    },
  },
});
export const { setMode } = themeSlice.actions;
export default themeSlice.reducer;