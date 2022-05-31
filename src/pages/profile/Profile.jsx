import { Avatar, Box, Grid, Tab, Tabs } from "@mui/material";
import { Postlist } from "components";
import { UserDetails } from "components/userDetails/UserDetails";
import { getUserProfile } from "firebaseUtils/auth";
import { Bookmarks } from "pages";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import "./profile.css";

export function Profile() {
  const [value, setValue] = useState("posts");
  const dispatch = useDispatch();
  const { profileId } = useParams();
  const { profileDetails, id } = useSelector(store => store.auth);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  useEffect(() => {
    dispatch(getUserProfile(profileId));
  }, [profileId]);
  return (
    <>
      <div className="profile-container">
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <Grid item className="profile-header">
            <img className="profile-cover" src="https://picsum.photos/200/300" />
            <Avatar
              className="profile-image"
              alt={profileDetails?.firstname}
              src={
                <Avatar aria-label="author">{profileDetails?.avatar || profileDetails?.firstname?.charAt(0)}</Avatar>
              }
              sx={{ width: 56, height: 56, position: "absolute" }}
            />
          </Grid>
          <UserDetails profileDetails={profileDetails} />

          <Tabs
            value={value}
            onChange={handleChange}
            textColor="secondary"
            indicatorColor="secondary"
            aria-label="secondary tabs example"
            variant="fullWidth">
            <Tab value="posts" label="Posts"></Tab>
            {id === profileDetails?.id && <Tab value="bookmarks" label="Saved"></Tab>}
          </Tabs>
          {value === "posts" && <Postlist isProfilePage={true} />}
          {value === "bookmarks" && <Bookmarks isProfilePage={true} />}
        </Box>
      </div>
    </>
  );
}
