import { ThemeProvider } from "@emotion/react";
import {Link as RouterLink} from "react-router-dom"
import {
  BookmarkAdded,
  BookmarkAddOutlined,
  FavoriteBorderOutlined,
  RemoveRedEye,
  VisibilityOff,
} from "@mui/icons-material";
import {
  Avatar,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Divider,
  IconButton,
  Link,
  Stack,
  Typography,
} from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { theme } from "App";
import { CommentList, CreatePostModal, PostMenu } from "components";
import {
  addPostToLiked,
  addPostToSaved,
  getUserFeedPosts,
  isPostLiked,
  isPostSaved,
  removePostFromLiked,
  removePostFromSaved,
} from "firebaseUtils/posts";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./postcard.css";
export function Postcard(props) {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const { id, user } = useSelector(store => store.auth);
  const dispatch = useDispatch();
  const [viewComments, setViewComments] = useState(false);
  const { postId, author, createdAt, content, media, comments, likes, saved } = props.post;
  const isLiked = isPostLiked(id, likes);
  const isSaved = isPostSaved(id, saved);
  const postDateTime =
    new Date(createdAt?.seconds * 1000).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }) +
    ", " +
    new Date(createdAt?.seconds * 1000).toLocaleDateString();
  return (
    <>
      <ThemeProvider theme={theme}>
        <Card sx={{ minWidth: "10rem", boxShadow: "rgb(0 0 0 / 15%) 0px 2px 8px" }} className="post-card">
          <CardHeader
            sx={{ color: "black" }}
            avatar={
              <RouterLink to={`/profile/${author?.id}`}>
                <Avatar aria-label="author">{author?.avatar || author?.firstname?.charAt(0)}</Avatar>
              </RouterLink>
            }
            title={<RouterLink to={`/profile/${author?.id}`}>{author?.firstname + " " + author?.lastname}</RouterLink>}
            subheader={postDateTime}
            action={author?.id === id && <PostMenu handlePostModalOpen={handleClickOpen} postId={props.post.postId} />}
          />

          <CardContent sx={{ paddingTop: "0" }}>
            <Typography variant="subtitle1">{content}</Typography>
            <Typography variant="caption"> {postDateTime}</Typography>
          </CardContent>
          {media && <CardMedia component="img" alt="card-media" height="140" image={media} />}
          <Divider />
          <CardActions sx={{ display: "flex", justifyContent: "space-evenly" }}>
            <Stack direction="row">
              <IconButton
                color={isLiked ? "red" : "icon"}
                size="small"
                onClick={() =>
                  isLiked
                    ? removePostFromLiked(postId, user, id, dispatch, getUserFeedPosts)
                    : addPostToLiked(postId, user, id, dispatch, getUserFeedPosts)
                }>
                {isLiked ? <FavoriteIcon fontSize="inherit" /> : <FavoriteBorderOutlined fontSize="inherit" />}
              </IconButton>
              <Link underline="none" component="button" color="icon">
                {likes?.length || ""} {likes?.length > 1 ? "Likes" : "Like"}
              </Link>
            </Stack>
            <Stack direction="row" alignItems="center" onClick={() => setViewComments(prev => !prev)}>
              <IconButton color="icon" size="small">
                {viewComments ? <VisibilityOff fontSize="inhehit" /> : <RemoveRedEye fontSize="inherit" />}
              </IconButton>
              <Link underline="none" component="button" color="icon">
                Comment
              </Link>
            </Stack>
            <Stack
              direction="row"
              alignItems="center"
              onClick={() =>
                isSaved
                  ? removePostFromSaved(postId, id, dispatch, getUserFeedPosts)
                  : addPostToSaved(postId, id, dispatch, getUserFeedPosts)
              }>
              <IconButton color={isSaved ? "primary" : "icon"} size="small">
                {isSaved ? <BookmarkAdded fontSize="inherit" /> : <BookmarkAddOutlined fontSize="inherit" />}
              </IconButton>
              <Link underline="none" component="button" color="icon">
                {isSaved ? "Saved" : "Save"}
              </Link>
            </Stack>
          </CardActions>
          {viewComments && <CommentList viewComments={viewComments} comments={comments} postId={postId} />}
        </Card>
        <CreatePostModal open={open} handleClose={handleClose} editPost={props.post} />
      </ThemeProvider>
    </>
  );
}
