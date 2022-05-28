const { createSlice } = require("@reduxjs/toolkit");
const { getUserFeedPosts } = require("firebaseUtils/posts");

const initialState = {
  posts: [],
  isLoading: false,
};

const postSlice = createSlice({
  name: "feedPosts",
  initialState,
  extraReducers: {
    [getUserFeedPosts.pending]: state => {
      state.isLoading = true;
    },
    [getUserFeedPosts.fulfilled]: (state, action) => {
      state.posts = action.payload;
      state.isLoading = false;
    },
    [getUserFeedPosts.rejected]: state => {
      state.isLoading = false;
    },
  },
});

export default postSlice.reducer;
