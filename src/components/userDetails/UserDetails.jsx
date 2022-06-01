import { ThemeProvider } from "@emotion/react";
import { Button, Link, Stack } from "@mui/material";
import { Box } from "@mui/system";
import { EditProfileForm, Followers, Following } from "components";
import { useState } from "react";
import "./userdetails.css";
import { theme } from "App";
import { useDispatch, useSelector } from "react-redux";
import { addUserToFollowing, getAllUsers, isFollowing, removeUserFromFollowing } from "firebaseUtils/auth";
import { setUserProfile } from "features/auth/authSlice";

export function UserDetails({ profileDetails }) {
  const dispatch = useDispatch();
  const { id, user } = useSelector(store => store.auth);
  const [open, setOpen] = useState(false);
  const handleOpenModal = () => setOpen(true);
  const handleCloseModal = () => setOpen(false);

  const [openFollowers, setOpenFollowers] = useState(false);
  const handleOpenFollowersModal = () => setOpenFollowers(true);
  const handleCloseFollowersModal = () => setOpenFollowers(false);

  const [openFollowing, setOpenFollowing] = useState(false);
  const handleOpenFollowingModal = () => setOpenFollowing(true);
  const handleCloseFollowingModal = () => setOpenFollowing(false);
  // const { firstname, lastname, bio, website, followers, following } = profileDetails;
const isFollowingUser = isFollowing(profileDetails?.id, user?.following);
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
              {profileDetails?.firstname} {profileDetails?.lastname} &nbsp;
              {id !== profileDetails?.id &&
                (isFollowing(profileDetails?.id, user?.following) ? (
                  <Button
                    variant="outlined"
                    color="error"
                    onClick={() =>
                      removeUserFromFollowing(id, user, profileDetails, dispatch, setUserProfile, profileDetails.id)
                    }>
                    Unfollow
                  </Button>
                ) : (
                  <Button
                    variant="outlined"
                    color="error"
                    onClick={() =>
                      addUserToFollowing(id, user, profileDetails, dispatch, setUserProfile, profileDetails.id)
                    }>
                    Follow
                  </Button>
                ))}
            </Box>
            {id === profileDetails?.id && (
              <Button variant="outlined" color="secondary" onClick={handleOpenModal}>
                Edit profile
              </Button>
            )}
            <EditProfileForm open={open} handleCloseModal={handleCloseModal} />
          </Stack>

          {/* TODO: redirect needs to be done */}
          <Link href={profileDetails?.website} component="a" target="_blank" underline="none">
            {profileDetails?.website}
          </Link>
          <Box component={"div"} sx={{ typography: "body1" }}>
            {profileDetails?.bio}
          </Box>

          <Stack direction={"row"} gap={1} justifyContent="flex-start">
            <Stack direction={"row"} gap={1} alignItems="center">
              <Box sx={{ typography: "subtitle2" }}> 2</Box>
              <Box sx={{ typography: "body2" }}>posts</Box>
            </Stack>
            <Button component={Link} variant="string" onClick={handleOpenFollowersModal}>
              <Stack direction={"row"} gap={1}>
                <Box sx={{ typography: "subtitle2" }}> {profileDetails?.followers?.length}</Box>
                <Box sx={{ typography: "body2", textTransform: "lowerCase" }}>followers</Box>
              </Stack>
            </Button>
            <Followers
              open={openFollowers}
              handleClose={handleCloseFollowersModal}
              followers={profileDetails?.followers}
            />
            <Button component={Link} variant="string" onClick={handleOpenFollowingModal}>
              <Stack direction={"row"} gap={1}>
                <Box sx={{ typography: "subtitle2" }}> {profileDetails?.following?.length}</Box>
                <Box sx={{ typography: "body2", textTransform: "lowerCase" }}>following</Box>
              </Stack>
            </Button>
            <Following
              open={openFollowing}
              handleClose={handleCloseFollowingModal}
              following={profileDetails?.following}
            />
          </Stack>
        </Stack>
      </ThemeProvider>
    </>
  );
}
