import { MainPage } from "pages";
import { Bookmarks, Error, Explore, Home, Login, Profile, Signup } from "pages";
import { Route, Routes } from "react-router-dom";

export function RoutePaths(){
    return (
      <>
        <Routes>
          <Route element={<MainPage />}>
            <Route path="/" element={<Explore />} />
            <Route path="/bookmarks" element={<Bookmarks />} />
            <Route path="/explore" element={<Explore />} />
            <Route path="/profile" element={<Profile />} />
          </Route>
          <Route path="/signup" element={<Signup />}></Route>
          <Route path="/messages" element={<Signup />}></Route>
          <Route path="/notifications" element={<Signup />}></Route>
          <Route path="*" element={<Error />}></Route>
        </Routes>
      </>
    );
}