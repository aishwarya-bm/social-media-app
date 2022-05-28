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
import { useState } from "react";
import { useSelector } from "react-redux";
import { createPost } from "firebaseUtils/posts";

export function CreatePostModal({ open, handleClose }) {
  const { id, user } = useSelector(store => store.auth);
  const { firstname, lastname, avatar } = user;
  const [chosenEmoji, setChosenEmoji] = useState(null);
  const [showEmoji, setShowEmoji] = useState(false);

  const onEmojiClick = (event, emojiObject) => {
    setChosenEmoji(emojiObject);
    const post_content = postForm.content + emojiObject.emoji;
    setPostForm({ ...postForm, content: post_content });
  };
console.log(user)
  const [postForm, setPostForm] = useState({
    content: "",
    comments: [],
    image: "",
    author: {},
  });

  const handleChange = (e) => {
    setPostForm({ ...postForm, content: e.target.value });
  };

  return (
    <ThemeProvider theme={theme}>
      <Dialog
        fullWidth
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description">
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
            placeholder="Type something..."
            multiline
            autoFocus
            rows={3}
            value={postForm.content}
            onChange={e => handleChange(e)}
          />
          <Box component="div">
            <IconButton aria-label="add-photo" color="icon">
              <CameraAlt style={{ cursor: "pointer" }} />
            </IconButton>
            <IconButton aria-label="add-emoji" color="icon" onClick={() => setShowEmoji(prev => !prev)}>
              <EmojiEmotions />
            </IconButton>
            <label htmlFor="post-image">
              <input
                // style={{ display: "none" }}
                id="post-image"
                type="file"
                name="post-image"
                accept="image/*"
              />
            </label>
            {showEmoji && (
              <div style={{ position: "inherit" }}>
                <EmojiPicker onEmojiClick={onEmojiClick} />
              </div>
            )}
          </Box>
        </DialogContent>
        <DialogActions>
          <Button variant="contained" onClick={() => 
          {
            createPost({...postForm, author:{firstname, lastname,avatar,id}}, setPostForm, handleClose)
          }
            }>
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
