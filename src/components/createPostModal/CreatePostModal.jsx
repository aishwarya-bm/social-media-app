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
import { useDispatch, useSelector } from "react-redux";
import { createPost, getUserFeedPosts, updatePost } from "firebaseUtils/posts";

export function CreatePostModal({ open, handleClose, editPost }) {
  const { id, user } = useSelector(store => store.auth);
  const { firstname, lastname, avatar } = user;
  const [chosenEmoji, setChosenEmoji] = useState(null);
  const [showEmoji, setShowEmoji] = useState(false);
  const dispatch = useDispatch();

  const onEmojiClick = (event, emojiObject) => {
    setChosenEmoji(emojiObject);
    const post_content = postForm.content + emojiObject.emoji;
    setPostForm({ ...postForm, content: post_content });
  };
  const [postForm, setPostForm] = useState(
    editPost
      ? editPost
      : {
          content: "",
          comments: [],
          media: "",
          author: {},
          createdAt: "",
        }
  );

  const handleChange = e => {
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
        <DialogTitle id="alert-dialog-title" align="center">
          <Typography component="span" variant="h5" color="primary">
            {editPost ? "Edit post" : "Create post"}
          </Typography>
        </DialogTitle>
        <DialogContent>
          <TextField
            fullWidth
            placeholder="what'SSUP with you..."
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
              <input id="post-image" type="file" name="post-image" accept="image/*" />
            </label>
            {showEmoji && (
              <div style={{ position: "inherit" }}>
                <EmojiPicker onEmojiClick={onEmojiClick} />
              </div>
            )}
          </Box>
        </DialogContent>
        <DialogActions>
          {editPost ? (
            <Button
              variant="contained"
              onClick={() => {
                const post_author = { firstname, lastname, avatar, id: id };
                updatePost({ ...postForm, author: post_author }, setPostForm, handleClose, dispatch, getUserFeedPosts);
              }}>
              Update
            </Button>
          ) : (
            <Button
              variant="contained"
              onClick={() => {
                const post_author = { firstname, lastname, avatar, id: id };
                createPost(
                  { ...postForm, author: post_author, createdAt: new Date() },
                  setPostForm,
                  handleClose,
                  dispatch,
                  getUserFeedPosts
                );
              }}>
              Post
            </Button>
          )}
          <Button variant="outlined" onClick={handleClose} autoFocus>
            Cancel
          </Button>
        </DialogActions>
      </Dialog>
    </ThemeProvider>
  );
}
