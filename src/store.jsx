import { configureStore } from "@reduxjs/toolkit";
import authReducer from "features/auth/authSlice";
import postReducer from "features/posts/postsSlice";
import themeReducer from "features/theme/themeSlice";


const store = configureStore({
  reducer: {
    auth: authReducer,
    feedPosts: postReducer,
    theme: themeReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export { store };
