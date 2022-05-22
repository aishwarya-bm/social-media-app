import { Auth, Bookmarks, Error, Explore, Home, LandingPage, MainPage, Profile } from "pages";
import { Route, Routes } from "react-router-dom";

export function RoutePaths(){
    return (
      <>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route element={<MainPage />}>
            <Route path="/bookmarks" element={<Bookmarks />} />
            <Route path="/home" element={<Home />} />
            <Route path="/explore" element={<Explore />} />
            <Route path="/profile" element={<Profile />} />
          </Route>
          <Route path="/auth" element={<Auth />}></Route>
          <Route path="/messages" element={<Auth />}></Route>
          <Route path="/notifications" element={<Auth />}></Route>
          <Route path="*" element={<Error />}></Route>
        </Routes>
      </>
    );
}