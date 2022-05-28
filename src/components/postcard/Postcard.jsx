import { ThemeProvider } from "@emotion/react";
import { BookmarkAdd, FavoriteBorderOutlined, MessageOutlined } from "@mui/icons-material";
import { Avatar, Button, Card, CardActions, CardContent, CardHeader, CardMedia, Divider, Typography } from "@mui/material";
import { theme } from "App";
import { CommentList } from "components";
import { useState } from "react";
export function Postcard(props){
    const [viewComments, setViewComments] = useState(false);
    const { postId, author, createdAt, content, media, comments } = props.post;

    return (
      <>
        <ThemeProvider theme={theme}>
          <Card
            sx={{ minWidth: "10rem"}}
            className="post-card"
          >
            <CardHeader
              sx={{ color: "black" }}
              avatar={<Avatar aria-label="author">{author.avatar}</Avatar>}
              title={author?.firstname + " "+author?.lastname}
              subheader={createdAt}
            />
            <CardContent sx={{ paddingTop: "0" }}>
              <Typography variant="subtitle1">
                {content}
              </Typography>
            </CardContent>
           {media && <CardMedia
              component="img"
              alt="card-media"
              height="140"
              image={media}
            />}
            <Divider />
            <CardActions
              sx={{ display: "flex", justifyContent: "space-evenly" }}
            >
              <Button
                color="icon"
                startIcon={<FavoriteBorderOutlined />}
                size="small"
              >
                Like
              </Button>
              <Button
                size="small"
                color="icon"
                startIcon={<MessageOutlined />}
                onClick={() => setViewComments(prev => !prev)}
              >
                Comment
              </Button>
              <Button size="small" color="icon" startIcon={<BookmarkAdd />}>
                Save
              </Button>
            </CardActions>
         {viewComments &&   <CommentList viewComments={viewComments} comments={comments}/>}
          </Card>
        </ThemeProvider>
      </>
    );
}