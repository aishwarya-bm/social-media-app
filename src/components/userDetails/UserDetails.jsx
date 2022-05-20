import { Button} from "@mui/material";
import { Box } from "@mui/system";
import { EditProfileForm } from "components";
import { useState } from "react";
import { Link } from "react-router-dom";
import "./userdetails.css"

export function UserDetails() {
  const [open, setOpen] = useState(false);
  const handleOpenModal = () => setOpen(true);
  const handleCloseModal = () => setOpen(false);
  return (
    <>
      <Box
        variant={"section"}
        className="profile-details" marginTop="12px"
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
          <Box sx={{ display: "flex", gap: 1 }}>
            <Box sx={{ typography: "subtitle2" }}> 20</Box>
            <Box sx={{ typography: "body2" }}>followers</Box>
          </Box>
          <Box sx={{ display: "flex", gap: 1 }}>
            <Box sx={{ typography: "subtitle2" }}> 25</Box>
            <Box sx={{ typography: "body2" }}>following</Box>
          </Box>
        </Box>
        <Link to="">mywebsitelink</Link>
        <Box component={"div"} sx={{ typography: "body1" }}>
          This is my bio
        </Box>
      </Box>
    </>
  );
}
