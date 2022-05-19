import { Avatar, Box, Container, Grid, Tab, Tabs } from "@mui/material";
import { UserDetails } from "components/userDetails/UserDetails";
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
        <Box sx={{ rowGap: 1, display: "flex", flexDirection:"column" }}>
          <Grid item  className="profile-header">
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
            <Tab value="saved" label="Saved"></Tab>
            <Tab value="archives" label="Archives"></Tab>
          </Tabs>
        </Box>
      </div>
    </>
  );
}
