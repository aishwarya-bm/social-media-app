import { ThemeProvider } from "@emotion/react";
import { Avatar, Grid, Stack, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { theme } from "App";
import "./commentcard.css";
export function CommentCard({ comment }) {
  const { comment_author, comment_author_avatar, comment_content, comment_date } = comment;
  return (
    <>
      <ThemeProvider theme={theme}>
        <div>
          <Stack direction="row" spacing={1.5} alignItems="center">
            <Avatar alt="Remy Sharp" src={comment_author_avatar} sx={{ width: 32, height: 32 }} />
            <Typography variant="subtitle2">{comment_author}</Typography>
            <Typography variant="caption">{comment_date}</Typography>
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
            {comment_content}
          </Typography>
        </div>
      </ThemeProvider>
    </>
  );
}
