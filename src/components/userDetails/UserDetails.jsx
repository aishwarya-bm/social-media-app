import { Button, Link, Stack } from "@mui/material";
import { Box } from "@mui/system";
import { EditProfileForm, Followers, Following } from "components";
import { useEffect, useState } from "react";
import "./userdetails.css";
import { useDispatch, useSelector } from "react-redux";
import { addUserToFollowing, isFollowing, removeUserFromFollowing } from "firebaseUtils/auth";
import { setUserProfile } from "features/auth/authSlice";

export function UserDetails({ isFollowingUser }) {
  const dispatch = useDispatch();
  const { id, user, profileDetails } = useSelector(store => store.auth);
  const { myposts } = useSelector(store => store.feedPosts);
  const [open, setOpen] = useState(false);
  const handleOpenModal = () => setOpen(true);
  const handleCloseModal = () => setOpen(false);

  const [openFollowers, setOpenFollowers] = useState(false);
  const handleOpenFollowersModal = () => setOpenFollowers(true);
  const handleCloseFollowersModal = () => setOpenFollowers(false);

  const [openFollowing, setOpenFollowing] = useState(false);
  const handleOpenFollowingModal = () => setOpenFollowing(true);
  const handleCloseFollowingModal = () => setOpenFollowing(false);

  return (
    <>
        <Stack direction="column" gap={1} className="profile-details" mt={1} alignItems="center" border="1px solid">
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
                (isFollowingUser ? (
                  <Button
                    variant="outlined"
                    color="error"
                    onClick={() =>
                      removeUserFromFollowing(id, user, profileDetails, dispatch, setUserProfile, profileDetails?.id)
                    }>
                    Unfollow
                  </Button>
                ) : (
                  <Button
                    variant="outlined"
                    color="error"
                    onClick={() =>
                      addUserToFollowing(id, user, profileDetails, dispatch, setUserProfile, profileDetails?.id)
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
            <Button component={Link} color="error" onClick={handleOpenFollowersModal}>
              <Stack direction={"row"} gap={1} alignItems="center">
                <Box sx={{ typography: "subtitle2" }}> {profileDetails?.followers?.length}</Box>
                <Box sx={{ typography: "body2", textTransform: "lowerCase" }}>
                  {profileDetails?.followers?.length > 1 ? "followers" : "follower"}
                </Box>
              </Stack>
            </Button>
            {(isFollowingUser || id === profileDetails?.id) && (
              <Stack direction={"row"} gap={1} alignItems="center">
                <Box sx={{ typography: "subtitle2" }}> {myposts?.length}</Box>
                <Box sx={{ typography: "body2" }}>{myposts?.length > 1 ? "posts" : "post"}</Box>
              </Stack>
            )}

            <Followers
              open={openFollowers}
              handleClose={handleCloseFollowersModal}
              followers={profileDetails?.followers}
            />
            <Button component={Link} color="error" onClick={handleOpenFollowingModal}>
              <Stack direction={"row"} gap={1} alignItems="center">
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
    </>
  );
}
