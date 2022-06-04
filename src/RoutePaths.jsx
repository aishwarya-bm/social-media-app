import { RequiresAuth } from "components";
import { Signup } from "components/auth/Signup";
import { Auth, Bookmarks, Error, Explore, Home, LandingPage, MainPage, Profile } from "pages";
import { Route, Routes } from "react-router-dom";

export function RoutePaths(){
    return (
      <>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<Auth />} />
          <Route
            element={
              <RequiresAuth>
                <MainPage />
              </RequiresAuth>
            }>
            <Route path="/saved" element={<Bookmarks />} />
            <Route path="/home" element={<Home />} />
            <Route path="/explore" element={<Explore />} />
            <Route path="/profile/:profileId" element={<Profile />} />
          </Route>
          <Route path="*" element={<Error />}></Route>
        </Routes>
      </>
    );
}