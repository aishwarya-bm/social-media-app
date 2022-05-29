import { ThemeProvider } from "@emotion/react";
import { BookmarkAdd, Edit, FavoriteBorderOutlined, MessageOutlined } from "@mui/icons-material";
import { Avatar, Button, Card, CardActions, CardContent, CardHeader, CardMedia, Divider, IconButton, Typography } from "@mui/material";
import { theme } from "App";
import { CommentList, CreatePostModal, PostMenu } from "components";
import { useState } from "react";
import { useSelector } from "react-redux";
export function Postcard(props){
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const {id} = useSelector(store=>store.auth)
    const [viewComments, setViewComments] = useState(false);
    const { author, createdAt, content, media, comments } = props.post;
    const postDateTime = (new Date(createdAt.seconds * 1000).toLocaleDateString() + ", "+ new Date(createdAt.seconds * 1000).toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'}))
    return (
      <>
        <ThemeProvider theme={theme}>
          <Card sx={{ minWidth: "10rem" }} className="post-card">
            <CardHeader
              sx={{ color: "black" }}
              avatar={<Avatar aria-label="author">{author.avatar || author.firstname.charAt(0) }</Avatar>}
              title={author?.firstname + " " + author?.lastname}
              subheader={postDateTime}
              action={
                author?.id === id && (
                  <PostMenu handlePostModalOpen={handleClickOpen} postId={props.post.postId}/>
                )
              }
            />
            <CardContent sx={{ paddingTop: "0" }}>
              <Typography variant="subtitle1">{content}</Typography>
            </CardContent>
            {media && <CardMedia component="img" alt="card-media" height="140" image={media} />}
            <Divider />
            <CardActions sx={{ display: "flex", justifyContent: "space-evenly" }}>
              <Button color="icon" startIcon={<FavoriteBorderOutlined />} size="small">
                Like
              </Button>
              <Button
                size="small"
                color="icon"
                startIcon={<MessageOutlined />}
                onClick={() => setViewComments(prev => !prev)}>
                Comment
              </Button>
              <Button size="small" color="icon" startIcon={<BookmarkAdd />}>
                Save
              </Button>
            </CardActions>
            {viewComments && <CommentList viewComments={viewComments} comments={comments} />}
          </Card>
          <CreatePostModal open={open} handleClose={handleClose} editPost = {props.post} />
        </ThemeProvider>
      </>
    );
}