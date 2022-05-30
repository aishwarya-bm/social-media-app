import { configureStore } from "@reduxjs/toolkit";
import authReducer from "features/auth/authSlice";
import postReducer from "features/posts/postsSlice";

const store = configureStore({
  reducer: {
    auth: authReducer,
    feedPosts: postReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export { store };
