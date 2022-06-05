const { createSlice } = require("@reduxjs/toolkit");
const { getUserFeedPosts } = require("firebaseUtils/posts");

const initialState = {
  feed: [],
  isLoadingPosts: false,
  myposts:[]
};

const postSlice = createSlice({
  name: "feedPosts",
  initialState,
  reducers:{
    setProfilePosts : (state,action) =>{
      state.myposts = action.payload
    }
  },
  extraReducers: {
    [getUserFeedPosts.pending]: state => {
      state.isLoadingPosts = true;
    },
    [getUserFeedPosts.fulfilled]: (state, action) => {
      state.feed = action.payload;
      state.isLoadingPosts = false;
    },
    [getUserFeedPosts.rejected]: state => {
      state.isLoadingPosts = false;
    },
  },
});

export const { setProfilePosts } = postSlice.actions;
export default postSlice.reducer;
