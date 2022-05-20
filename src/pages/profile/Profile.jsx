import { Avatar, Box, Container, Grid, Tab, Tabs } from "@mui/material";
import { Postlist } from "components";
import { UserDetails } from "components/userDetails/UserDetails";
import { Bookmarks } from "pages";
import {useState} from "react";
import "./profile.css"

export function Profile() {
  const [value, setValue] = useState("posts");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <>
      <div className="profile-container">
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <Grid item className="profile-header"  >
            <img
              className="profile-cover"
              src="https://picsum.photos/200/300"
            />
            <Avatar
              className="profile-image"
              alt="Remy Sharp"
              src="https://picsum.photos/200/300"
              sx={{ width: 56, height: 56, position: "absolute" }}
            />
          </Grid>
          <UserDetails />

          <Tabs
            value={value}
            onChange={handleChange}
            textColor="secondary"
            indicatorColor="secondary"
            aria-label="secondary tabs example"
            variant="fullWidth"
          >
            <Tab value="posts" label="Posts"></Tab>
            <Tab value="bookmarks" label="Bookmarks"></Tab>
            {/* <Tab value="archives" label="Archives"></Tab> */}
          </Tabs>
          {value === "posts" && <Postlist />}
          {value === "bookmarks" && <Bookmarks />}
        </Box>
      </div>
    </>
  );
}
