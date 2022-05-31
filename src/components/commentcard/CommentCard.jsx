import { ThemeProvider } from "@emotion/react";
import { Avatar, Stack, Typography } from "@mui/material";
import { theme } from "App";
import { Link } from "react-router-dom";
import "./commentcard.css";
export function CommentCard({ comment }) {
  const { author, createdAt, comment: content } = comment;
  const commentDateTime =
    new Date(createdAt?.seconds * 1000).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }) +
    ", " +
    new Date(createdAt?.seconds * 1000).toLocaleDateString();
  return (
    <>
      <ThemeProvider theme={theme}>
        <div>
          <Stack direction="row" spacing={1.5} alignItems="center">
            <Link to={`/profile/${author?.id}`}>
              <Avatar aria-label="comment-author" sx={{ width: 32, height: 32 }}>
                {author?.avatar || author?.firstname?.charAt(0)}
              </Avatar>
            </Link>
            <Link to={`/profile/${author?.id}`}>
              <Typography variant="subtitle2">{`${author?.firstname} ${author?.lastname}`}</Typography>
            </Link>
            <Typography variant="caption">{commentDateTime}</Typography>
          </Stack>
          <Typography
            variant="body2"
            sx={{
              backgroundColor: "var(--grey-bg)",
              padding: 1,
              borderRadius: 4,
              marginLeft: 5,
              marginRight: 2,
              width: "fit-content",
            }}>
            {content}
          </Typography>
        </div>
      </ThemeProvider>
    </>
  );
}
