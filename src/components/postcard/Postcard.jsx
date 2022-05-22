import { ThemeProvider } from "@emotion/react";
import { BookmarkAdd, FavoriteBorderOutlined, MessageOutlined } from "@mui/icons-material";
import { Avatar, Button, Card, CardActions, CardContent, CardHeader, CardMedia, Divider, Typography } from "@mui/material";
import { theme } from "App";
import { CommentList } from "components";
import { useState } from "react";
export function Postcard(props){
    const [viewComments, setViewComments] = useState(false);
    const { id,author, postDate, content, media, comments } = props.post
    return (
      <>
        <ThemeProvider theme={theme}>
          <Card
            sx={{ minWidth: "10rem"}}
            className="post-card"
          >
            <CardHeader
              sx={{ color: "black" }}
              avatar={<Avatar aria-label="author">R</Avatar>}
              title={author}
              subheader={postDate}
            />
            <CardContent sx={{ paddingTop: "0" }}>
              <Typography variant="subtitle1">
                {content}
              </Typography>
            </CardContent>
            <CardMedia
              component="img"
              alt="card-media"
              height="140"
              image={media}
            />
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