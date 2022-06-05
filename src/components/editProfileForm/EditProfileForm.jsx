import { ThemeProvider } from "@emotion/react";
import {
  Avatar,
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  TextField,
  Typography,
} from "@mui/material";
import "./editProfileForm.css";
import { theme } from "App";
import { updateUserProfile } from "firebaseUtils/auth";
import { useDispatch, useSelector } from "react-redux";
import { setUserProfile } from "features/auth/authSlice";
export function EditProfileForm({ open, handleCloseModal }) {
  const { user, id } = useSelector(store => store.auth);
  const { avatar, firstname, lastname, bio, website } = user;

  const dispatch = useDispatch();
  const handleSubmit = event => {
    event.preventDefault();
    handleCloseModal();
    const data = new FormData(event.target.form);
    const userData = {
      ...user,
      bio: data.get("bio"),
      website: data.get("website"),
    };
    updateUserProfile(id, userData, dispatch, setUserProfile);
  };
  return (
    <>
      <ThemeProvider theme={theme}>
        <Dialog
          open={open}
          onClose={handleCloseModal}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description">
          <DialogTitle id="alert-dialog-title">
            <Box sx={{ display: "flex", justifyContent: "space-between" }}>
              <Typography id="modal-modal-title" variant="h6" component="h2" color="primary" >
                Edit profile
              </Typography>

              <Avatar
                className="profile-cover"
                alt={firstname}
                src={avatar || firstname?.charAt(0)}
                sx={{ width: 56, height: 56 }}></Avatar>
            </Box>
            <Typography id="modal-modal-title" variant="h6" component="h2">
              {firstname + " " + lastname}
            </Typography>
          </DialogTitle>

          <DialogContent>
            <DialogContentText id="alert-dialog-description" component="div">
              <Box component="form" id="profile-edit">
                <TextField
                  margin="normal"
                  fullWidth
                  id="website"
                  label="Website"
                  name="website"
                  autoComplete="website"
                  defaultValue={website}
                  autoFocus
                  color="secondary"
                />
                <TextField
                  margin="normal"
                  fullWidth
                  name="bio"
                  label="Bio"
                  type="bio"
                  id="bio"
                  defaultValue={bio}
                  autoComplete="current-bio"
                  color="secondary"
                />
              </Box>
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button form="profile-edit" type="submit" autoFocus variant="contained" onClick={e => handleSubmit(e)}>
              Update
            </Button>
            <Button onClick={handleCloseModal} variant="outlined" color="secondary">
              Cancel
            </Button>
          </DialogActions>
        </Dialog>
      </ThemeProvider>
    </>
  );
}
