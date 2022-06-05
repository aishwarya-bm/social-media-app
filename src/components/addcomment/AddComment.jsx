import { ThemeProvider } from "@emotion/react";
import { theme } from "App";
import { Avatar, Box, Button, TextField } from "@mui/material";
import "./addComment.css";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addCommentToPost, getUserFeedPosts } from "firebaseUtils/posts";
export function AddComment({ postId }) {
  const { mode } = useSelector(store => store.theme);
  const { id, user } = useSelector(store => store.auth);
  const {palette:{common :{black, white}}} = theme;
  const bgColor = mode === "light" ? white : black;
  const fColor = mode === "light" ? black : white;

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

  return (
    <>
      <ThemeProvider theme={theme}>
        <Box sx={{ display: "flex", margin: ".5rem", marginTop: "1rem", backgroundColor: bgColor, color:fColor }}>
          <Avatar
            alt={user?.firstname}
            src={user?.avatar || user?.firstname?.charAt(0)}
            sx={{ width: 32, height: 32 }}
          />
          <TextField
            fullWidth
            className="comment-input"
            sx={{
              margin: "0 .5rem",
              borderRadius: 5,
              backgroundColor: `${theme.palette.icon.light}`,
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
      </ThemeProvider>
    </>
  );
}
