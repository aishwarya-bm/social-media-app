import { Button,Link} from "@mui/material";
import { Box } from "@mui/system";
import { EditProfileForm, Followers, Following } from "components";
import { useState } from "react";
import "./userdetails.css"

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
  return (
    <>
      <Box
        variant={"section"}
        className="profile-details"
        marginTop="12px"
        sx={{ display: "flex", flexDirection: "column", gap: 1 }}
      >
        <Box
          component={"div"}
          sx={{
            typography: "body1",
            mt: 3,
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <Box sx={{ fontWeight: "bold" }}>
            Aishwarya Biradar &nbsp;
            <Button variant="outlined" color="error">
              Follow
            </Button>
          </Box>

          <Button
            variant="outlined"
            color="secondary"
            onClick={handleOpenModal}
          >
            Edit profile
          </Button>
          <EditProfileForm open={open} handleCloseModal={handleCloseModal} />
        </Box>
        <Box
          component={"div"}
          sx={{
            display: "flex",
            justifyContent: "flex-start",
            gap: "1rem",
          }}
        >
          <Box sx={{ display: "flex", gap: 1 }}>
            <Box sx={{ typography: "subtitle2" }}> 2</Box>
            <Box sx={{ typography: "body2" }}>posts</Box>
          </Box>
          <Link underline="none" color="inherit">
            <Box
              sx={{ display: "flex", gap: 1, cursor: "pointer" }}
              onClick={handleOpenFollowersModal}
            >
              <Box sx={{ typography: "subtitle2" }}> 20</Box>
              <Box sx={{ typography: "body2" }}>followers</Box>
            </Box>
          </Link>
          <Followers
            open={openFollowers}
            handleClose={handleCloseFollowersModal}
          />
          <Link underline="none" color="inherit">
            <Box
              sx={{ display: "flex", gap: 1, cursor: "pointer" }}
              onClick={handleOpenFollowingModal}
            >
              <Box sx={{ typography: "subtitle2" }}> 25</Box>
              <Box sx={{ typography: "body2" }}>following</Box>
            </Box>
            <Following
              open={openFollowing}
              handleClose={handleCloseFollowingModal}
            />
          </Link>
        </Box>
        <Link href="#" target="_blank" underline="none" >mywebsitelink</Link>
        <Box component={"div"} sx={{ typography: "body1" }}>
          This is my bio
        </Box>
      </Box>
    </>
  );
}
