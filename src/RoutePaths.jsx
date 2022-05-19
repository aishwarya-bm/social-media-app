import { MainPage } from "pages";
import { Bookmarks, Error, Explore, Home, Login, Profile, Signup } from "pages";
import { Route, Routes } from "react-router-dom";

export function RoutePaths(){
    return (
      <>
        <Routes>
          <Route
            path="/"
            element={
              <MainPage>
                <Explore />
              </MainPage>
            }
          ></Route>
          <Route
            path="/explore"
            element={
              <MainPage>
                <Explore />
              </MainPage>
            }
          ></Route>
          <Route
            path="/profile"
            element={
              <MainPage>
                <Profile />
              </MainPage>
            }
          ></Route>
          <Route
            path="/profile/:userId"
            element={
              <MainPage>
                <Profile />
              </MainPage>
            }
          ></Route>
          <Route
            path="/bookmarks"
            element={
              <MainPage>
                <Bookmarks />
              </MainPage>
            }
          ></Route>
          <Route path="/signup" element={<Signup />}></Route>
          <Route path="/messages" element={<Signup />}></Route>
          <Route path="/notifications" element={<Signup />}></Route>
          <Route path="*" element={<Error />}></Route>
        </Routes>
      </>
    );
}