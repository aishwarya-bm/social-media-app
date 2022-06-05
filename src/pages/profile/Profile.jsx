import { ThemeProvider } from "@mui/material/styles";
import { theme } from "App";
import { Avatar, Box, Grid, Tab, Tabs } from "@mui/material";
import { LikedPosts, Postlist } from "components";
import { UserDetails } from "components/userDetails/UserDetails";
import { getUserProfile, isFollowing } from "firebaseUtils/auth";
import { Bookmarks } from "pages";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import "./profile.css";

export function Profile() {
  const [value, setValue] = useState("posts");
  const dispatch = useDispatch();
  const { profileId } = useParams();
  const { profileDetails, id, user } = useSelector(store => store.auth);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const isFollowingUser = isFollowing(profileDetails?.id, user?.following);

  useEffect(() => {
    dispatch(getUserProfile(profileId));
    setValue("posts");
  }, [profileId, user]);

  return (
    <>
      <ThemeProvider theme={theme}>

      <div className="profile-container">
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <Grid item className="profile-header">
            <img
              className="profile-cover"
              src="https://4.bp.blogspot.com/-QeD3O-d5UOI/W390jAmnKLI/AAAAAAAAFXU/m26xdFe-XKcX7c24HZ8XOg9ekRkNfScXQCLcBGAs/s640/excuse-me-do-i-know-you-fb-cover.jpg"
            />
            <Avatar
              className="profile-image"
              sx={{ width: 56, height: 56, position: "absolute" }}
              src={profileDetails?.avatar || profileDetails?.firstname?.charAt(0)}
              alt={profileDetails?.firstname}
              aria-label={profileDetails?.firstname}
            />
          </Grid>
          <UserDetails isFollowingUser={isFollowingUser} />

          <Tabs
            value={value}
            onChange={handleChange}
            textColor="secondary"
            indicatorColor="secondary"
            aria-label="profile tabs"
            variant="fullWidth">
            <Tab value="posts" label="Posts"></Tab>
            {id === profileDetails?.id && <Tab value="bookmarks" label="Saved"></Tab>}
            <Tab value="likes" label="Likes"></Tab>
          </Tabs>
          {value === "posts" && <Postlist type="profile" isFollowingUser={isFollowingUser} />}
          {value === "bookmarks" && <Bookmarks type="profile" />}
          {value === "likes" && <LikedPosts isFollowingUser={isFollowingUser} />}
        </Box>
      </div>
      </ThemeProvider>
    </>
  );
}
