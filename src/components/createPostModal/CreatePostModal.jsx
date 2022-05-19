import {
  Box,
  IconButton,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Button,
  TextField,
  Typography,
  ThemeProvider,
} from "@mui/material";
import { CameraAlt, EmojiEmotions } from "@mui/icons-material";
import EmojiPicker from "emoji-picker-react";
import { theme } from "App";

export function CreatePostModal({
  open,
  handleClose,
  showEmoji,
  setShowEmoji,
  onEmojiClick,
}) {
  return (
    <ThemeProvider theme={theme}>
      <Dialog
        fullWidth
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"what'"}
          <Typography component="span" variant="h5" color="primary">
            <i>ssup</i>
          </Typography>
          {" with you..."}
        </DialogTitle>
        <DialogContent>
          <TextField
            fullWidth
            sx={{}}
            placeholder="Type soemthing..."
            multiline
            autoFocus
            rows={3}
          />
          <Box component="div">
            <IconButton aria-label="add-photo" color="icon">
              <CameraAlt />
            </IconButton>
            <IconButton
              aria-label="add-emoji"
              color="icon"
              onClick={() => setShowEmoji(prev => !prev)}
            >
              <EmojiEmotions />
            </IconButton>
            {showEmoji && (
              <div style={{ position: "inherit" }}>
                <EmojiPicker onEmojiClick={onEmojiClick} />
              </div>
            )}
          </Box>
        </DialogContent>
        <DialogActions>
          <Button variant="contained" onClick={handleClose}>
            Post
          </Button>
          <Button variant="outlined" onClick={handleClose} autoFocus>
            Cancel
          </Button>
        </DialogActions>
      </Dialog>
    </ThemeProvider>
  );
}
