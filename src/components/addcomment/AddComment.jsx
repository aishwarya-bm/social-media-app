import { Avatar, Box, Button, TextField } from "@mui/material";
import "./addComment.css";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addCommentToPost, getUserFeedPosts } from "firebaseUtils/posts";
import { appTheme } from "theme-util";
export function AddComment({ postId }) {
  const {
    auth: { id, user },
    theme: { mode },
  } = useSelector(store => store);

  const dispatch = useDispatch();
  const [commentForm, setCommentForm] = useState({
    author: {},
    comment: "",
    createdAt: null,
    postId: null,
  });

  const handleChange = e => {
    setCommentForm({ ...commentForm, comment: e.target.value });
  };

  const theme = appTheme(mode);
  return (
    <>
      <Box sx={{ display: "flex", alignItems: "center", margin: ".5rem", marginTop: "1rem" }}>
        <Avatar alt={user?.firstname} src={user?.avatar || user?.firstname?.charAt(0)} sx={{ width: 32, height: 32 }} />
        <TextField
          fullWidth
          className="comment-input"
          sx={{
            margin: "0 .5rem",
            borderRadius: 5,
            border: `1px solid ${theme.palette.icon.main}`,
          }}
          placeholder="add a comment"
          id="outlined-name"
          value={commentForm.comment}
          onChange={e => handleChange(e)}
        />
        <Button
          variant="outlined"
          color="secondary"
          onClick={() => addCommentToPost(postId, id, user, commentForm, setCommentForm, dispatch, getUserFeedPosts)}>
          enter
        </Button>
      </Box>
    </>
  );
}
