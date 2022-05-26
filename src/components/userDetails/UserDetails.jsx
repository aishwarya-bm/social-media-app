import { ThemeProvider } from "@emotion/react";
import { Button, Link, Stack } from "@mui/material";
import { Box } from "@mui/system";
import { EditProfileForm, Followers, Following } from "components";
import { useState } from "react";
import "./userdetails.css";
import { theme } from "App";
import { useDispatch, useSelector } from "react-redux";

export function UserDetails() {
  const [open, setOpen] = useState(false);
  const handleOpenModal = () => setOpen(true);
  const handleCloseModal = () => setOpen(false);

  const [openFollowers, setOpenFollowers] = useState(false);
  const handleOpenFollowersModal = () => setOpenFollowers(true);
  const handleCloseFollowersModal = () => setOpenFollowers(false);

  const [openFollowing, setOpenFollowing] = useState(false);
  const handleOpenFollowingModal = () => setOpenFollowing(true);
  const handleCloseFollowingModal = () => setOpenFollowing(false);

  const { id, user } = useSelector(store => store.auth);
  const {firstname, lastname,bio,website,followers,following} = user;
  const dispatch = useDispatch();
  return (
    <>
      <ThemeProvider theme={theme}>
        <Stack direction="column" gap={1} className="profile-details" mt={1}>
          <Stack direction="row" gap={1} justifyContent="space-between" mt={2} sx={{ typography: "body1" }}>
            <Box sx={{ fontWeight: "bold" }}>
              {firstname} {lastname} &nbsp;
              <Button variant="outlined" color="error">
                Follow
              </Button>
            </Box>
            <Button variant="outlined" color="secondary" onClick={handleOpenModal}>
              Edit profile
            </Button>
            <EditProfileForm open={open} handleCloseModal={handleCloseModal} />
          </Stack>

          {/* TODO: redirect needs to be done */}
          <Link href={website} target="_blank" underline="none">
            {website}
          </Link>
          <Box component={"div"} sx={{ typography: "body1" }}>
            {bio}
          </Box>

          <Stack direction={"row"} gap={1} justifyContent="flex-start">
            <Stack direction={"row"} gap={1} alignItems="center">
              <Box sx={{ typography: "subtitle2" }}> 2</Box>
              <Box sx={{ typography: "body2" }}>posts</Box>
            </Stack>
            <Button component={Link} variant="string" onClick={handleOpenFollowersModal}>
              <Stack direction={"row"} gap={1}>
                <Box sx={{ typography: "subtitle2" }}> {followers.length}</Box>
                <Box sx={{ typography: "body2", textTransform: "lowerCase" }}>followers</Box>
              </Stack>
            </Button>
            <Followers open={openFollowers} handleClose={handleCloseFollowersModal} />
            <Button component={Link} variant="string" onClick={handleOpenFollowingModal}>
              <Stack direction={"row"} gap={1}>
                <Box sx={{ typography: "subtitle2" }}> {following.length}</Box>
                <Box sx={{ typography: "body2", textTransform: "lowerCase" }}>following</Box>
              </Stack>
            </Button>
            <Following open={openFollowing} handleClose={handleCloseFollowingModal} />
          </Stack>
        </Stack>
      </ThemeProvider>
    </>
  );
}
