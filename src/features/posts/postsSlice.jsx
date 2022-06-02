const { createSlice } = require("@reduxjs/toolkit");
const { getUserFeedPosts } = require("firebaseUtils/posts");

const initialState = {
  feed: [],
  isLoading: false,
  myposts:[]
};

const postSlice = createSlice({
  name: "feedPosts",
  initialState,
  reducers:{
    setMyPosts : (state,action) =>{
      state.myposts = action.payload
    }
  },
  extraReducers: {
    [getUserFeedPosts.pending]: state => {
      state.isLoading = true;
    },
    [getUserFeedPosts.fulfilled]: (state, action) => {
      state.feed = action.payload;
      state.isLoading = false;
    },
    [getUserFeedPosts.rejected]: state => {
      state.isLoading = false;
    },
  },
});

export const { setMyPosts } = postSlice.actions;
export default postSlice.reducer;
