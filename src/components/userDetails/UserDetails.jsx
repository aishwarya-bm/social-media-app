import { ThemeProvider } from "@emotion/react";
import { Button, Link, Stack } from "@mui/material";
import { Box } from "@mui/system";
import { EditProfileForm, Followers, Following } from "components";
import { useEffect, useState } from "react";
import "./userdetails.css";
import { theme } from "App";
import { useDispatch, useSelector } from "react-redux";
import { addUserToFollowing, isFollowing, removeUserFromFollowing } from "firebaseUtils/auth";
import { setUserProfile } from "features/auth/authSlice";

export function UserDetails({ profileDetails }) {
  const dispatch = useDispatch();
  const { id, user } = useSelector(store => store.auth);
  const { myposts } = useSelector(store => store.feedPosts);
  const [open, setOpen] = useState(false);
  const handleOpenModal = () => setOpen(true);
  const handleCloseModal = () => setOpen(false);

  const [openFollowers, setOpenFollowers] = useState(false);
  const handleOpenFollowersModal = () => setOpenFollowers(true);
  const handleCloseFollowersModal = () => setOpenFollowers(false);

  const [openFollowing, setOpenFollowing] = useState(false);
  const handleOpenFollowingModal = () => setOpenFollowing(true);
  const {firstname, lastname,avatar,id : profileId,website, bio, followers,following} = profileDetails
  const handleCloseFollowingModal = () => setOpenFollowing(false);

  return (
    <>
      <ThemeProvider theme={theme}>
        <Stack direction="column" gap={1} className="profile-details" mt={1} alignItems="center">
          <Stack
            direction="row"
            gap={1}
            justifyContent="space-between"
            mt={2}
            sx={{ typography: "body1" }}
            alignItems="center">
            <Box sx={{ fontWeight: "bold" }}>
              {firstname} {lastname} &nbsp;
              {id !== profileId &&
                (isFollowing(profileId, user?.following) ? (
                  <Button
                    variant="outlined"
                    color="error"
                    onClick={() =>
                      removeUserFromFollowing(id, user, profileDetails, dispatch, setUserProfile, profileId)
                    }>
                    Unfollow
                  </Button>
                ) : (
                  <Button
                    variant="outlined"
                    color="error"
                    onClick={() => addUserToFollowing(id, user, profileDetails, dispatch, setUserProfile, profileId)}>
                    Follow
                  </Button>
                ))}
            </Box>
            {id === profileId && (
              <Button variant="outlined" color="secondary" onClick={handleOpenModal}>
                Edit profile
              </Button>
            )}
            <EditProfileForm open={open} handleCloseModal={handleCloseModal} />
          </Stack>

          {/* TODO: redirect needs to be done */}
          <Link href={website} component="a" target="_blank" underline="none">
            {website}
          </Link>
          <Box component={"div"} sx={{ typography: "body1" }}>
            {bio}
          </Box>

          <Stack direction={"row"} gap={1} justifyContent="flex-start">
            <Button component={Link} color="error" onClick={handleOpenFollowersModal}>
              <Stack direction={"row"} gap={1} alignItems="center">
                <Box sx={{ typography: "subtitle2" }}> {followers?.length}</Box>
                <Box sx={{ typography: "body2", textTransform: "lowerCase" }}>followers</Box>
              </Stack>
            </Button>
            <Stack direction={"row"} gap={1} alignItems="center">
              <Box sx={{ typography: "subtitle2" }}> {myposts?.length}</Box>
              <Box sx={{ typography: "body2" }}>{myposts?.length > 1 ? "posts" : "post"}</Box>
            </Stack>

            <Followers open={openFollowers} handleClose={handleCloseFollowersModal} followers={followers} />
            <Button component={Link} color="error" onClick={handleOpenFollowingModal}>
              <Stack direction={"row"} gap={1} alignItems="center">
                <Box sx={{ typography: "subtitle2" }}> {following?.length}</Box>
                <Box sx={{ typography: "body2", textTransform: "lowerCase" }}>following</Box>
              </Stack>
            </Button>
            <Following open={openFollowing} handleClose={handleCloseFollowingModal} following={following} />
          </Stack>
        </Stack>
      </ThemeProvider>
    </>
  );
}
