import {
  Avatar,
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  FormControl,
  FormControlLabel,
  IconButton,
  Input,
  InputLabel,
  Modal,
  TextField,
  Typography,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import "./editProfileForm.css";
import { Label } from "@mui/icons-material";
import { Link } from "react-router-dom";
export function EditProfileForm({ open, handleCloseModal }) {
  const handleSubmit = event => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
  };
  return (
    <>
      <Dialog
        open={open}
        onClose={handleCloseModal}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <Typography id="modal-modal-title" variant="h6" component="h2">
              Edit profile
            </Typography>
            <Avatar
              className="profile-cover"
              src="https://picsum.photos/200/300"
              sx={{ width: 56, height: 56 }}
            ></Avatar>
          </Box>
        </DialogTitle>

        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            <Box
              component="form"
              onSubmit={handleSubmit}
              noValidate
              sx={{ mt: 1 }}
            >
              <TextField
                margin="normal"
                fullWidth
                id="name"
                label="Name"
                name="name"
                autoComplete="name"
                autoFocus
                color="secondary"
              />
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
                color="secondary"
              />
              <TextField
                margin="normal"
                fullWidth
                id="website"
                label="Website"
                name="website"
                autoComplete="website"
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
                autoComplete="current-bio"
                color="secondary"
              />
            </Box>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseModal} autoFocus variant="contained">
            Update
          </Button>
          <Button
            onClick={handleCloseModal}
            variant="outlined"
            color="secondary"
          >
            Cancel
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
