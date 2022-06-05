import { RequiresAuth } from "components";
import { Auth, Bookmarks, Error, Explore, Home, MainPage, Profile } from "pages";
import { Route, Routes } from "react-router-dom";

export function RoutePaths(){
    return (
      <>
        <Routes>
          <Route path="/" element={<Auth />} />
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
          <Route
            path="*"
            element={
                <Error />
            }></Route>
        </Routes>
      </>
    );
}