import { Link as RouterLink } from "react-router-dom";
import {
  BookmarkAdded,
  BookmarkAddOutlined,
  ChatBubbleOutline,
  FavoriteBorderOutlined,
  ThumbUpAlt,
} from "@mui/icons-material";
import {
  Avatar,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  createTheme,
  Divider,
  Link,
  Stack,
  Typography,
} from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { CommentList, CreatePostModal, LikedUsers, PostMenu } from "components";
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

  const [openLikes, setOpenLikes] = useState(false);

  const handleOpenLikes = () => {
    setOpenLikes(true);
  };

  const handleCloseLikes = () => {
    setOpenLikes(false);
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
  const { mode } = useSelector(store => store.theme);


    const theme1 = createTheme({
      palette: {
        mode: mode,
        primary: {
          main: "#407BFF",
        },
        secondary: {
          main: "#6068e2",
        },
        icon: {
          main: "#666666",
          light: "#F0F2F5",
          dark: "#363636",
        },
       
      },
      typography: {
        fontFamily: `"Ubuntu", "Helvetica", "Arial","Dancing Script, cursive", sans-serif`,
        fontSize: 14,
        fontWeightLight: 300,
        fontWeightRegular: 400,
        fontWeightMedium: 500,
      },
    });
  return (
    <>
        <Card
          sx={{ minWidth: "10rem", boxShadow: "rgb(0 0 0 / 15%) 0px 2px 8px", borderRadius: "5px" }}
          className="post-card">
          <CardHeader
            avatar={
              <RouterLink to={`/profile/${author?.id}`}>
                <Avatar
                  aria-label="author"
                  alt={author?.firstname}
                  src={author?.avatar || author?.firstname?.charAt(0)}></Avatar>
              </RouterLink>
            }
            title={<RouterLink to={`/profile/${author?.id}`}>{author?.firstname + " " + author?.lastname}</RouterLink>}
            subheader={postDateTime}
            action={author?.id === id && <PostMenu handlePostModalOpen={handleClickOpen} postId={props.post.postId} />}
          />

          <CardContent sx={{ paddingTop: "0" }}>
            <Typography variant="subtitle1">{content}</Typography>
          </CardContent>
          {media && <CardMedia component="img" alt="card-media" height="140" image={media} />}
          <Divider />

          <Link
            component="button"
            color="inherit"
            underline="none"
            sx={{ pt: 1, pb: 1, pl: 2, pr: 2 }}
            onClick={handleOpenLikes}>
            <Stack direction="row" gap={1}>
              <ThumbUpAlt fontSize="inherit" color="primary" />
              {isLiked
                ? likes?.length > 1
                  ? `You and ${likes?.length - 1} others liked this`
                  : "You liked this"
                : likes.length > 1
                ? `${likes[0]?.firstname + " " + likes[0]?.lastname} & ${likes.length - 1} other liked this`
                : likes.length
                ? `${likes[0]?.firstname + " " + likes[0]?.lastname} liked this`
                : "Be the first one to like this"}{" "}
            </Stack>
          </Link>

          <Divider />
         {!props.isExplorePage && <CardActions sx={{ display: "flex", justifyContent: "space-evenly" }}>
            <Button
              size="small"
              color="icon"
              startIcon={
                isLiked ? (
                  <FavoriteIcon color="red" fontSize="inherit" />
                ) : (
                  <FavoriteBorderOutlined fontSize="inherit" />
                )
              }
              onClick={() =>
                isLiked
                  ? removePostFromLiked(postId, user, id, dispatch, getUserFeedPosts)
                  : addPostToLiked(postId, user, id, dispatch, getUserFeedPosts)
              }>
              <Link underline="none" color="icon">
                {likes?.length || ""} {likes?.length > 1 ? "Likes" : "Like"}
              </Link>
            </Button>

            <LikedUsers open={openLikes} handleClose={handleCloseLikes} likedUsers={likes} />

            <Button
              size="small"
              color="icon"
              startIcon={<ChatBubbleOutline />}
              onClick={() => setViewComments(prev => !prev)}>
              <Link underline="none" color="icon">
                {comments?.length || ""} {comments?.length > 1 ? "Comments" : "Comment"}
              </Link>
            </Button>
            <Stack
              direction="row"
              alignItems="center"
              onClick={() =>
                isSaved
                  ? removePostFromSaved(postId, id, dispatch, getUserFeedPosts)
                  : addPostToSaved(postId, id, dispatch, getUserFeedPosts)
              }>
              <Button
                size="small"
                color="icon"
                startIcon={
                  isSaved ? (
                    <BookmarkAdded fontSize="inherit" color="primary" />
                  ) : (
                    <BookmarkAddOutlined color="icon" fontSize="inherit" />
                  )
                }>
                <Link underline="none" color="icon">
                  {isSaved ? "Saved" : "Save"}
                </Link>
              </Button>
            </Stack>
          </CardActions>}
          {viewComments && <CommentList viewComments={viewComments} comments={comments} postId={postId} />}
        </Card>
        <CreatePostModal open={open} handleClose={handleClose} editPost={props.post} />
    </>
  );
}
