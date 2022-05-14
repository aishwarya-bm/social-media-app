import { Bookmarks, Error, Explore, Home, Login, Post, Profile, Signup } from "pages";
import { Route, Routes } from "react-router-dom";

export function RoutePaths(){
    return (
      <>
        <Routes>
          {/* <Route path="/" element={<Home />}></Route> */}
          <Route path="/" element={<Explore />}></Route>
          <Route path="/profile/:userId" element={<Profile />}></Route>
          <Route path="/post/:postId" element={<Post />}></Route>
          <Route path="/bookmarks" element={<Bookmarks />}></Route>
          <Route path="/" element={<Login />}></Route>
          <Route path="/signup" element={<Signup />}></Route>
          <Route path="*" element={<Error />}></Route>
        </Routes>
      </>
    );
}