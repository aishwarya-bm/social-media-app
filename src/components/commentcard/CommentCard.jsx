import { ThemeProvider } from "@emotion/react";
import { Avatar, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { theme } from "App";
import "./commentcard.css";
export function CommentCard({comment}) {
  const {
         comment_author,
         comment_author_avatar,
         comment_content,
         comment_date,
        } = comment
  return (
    <>
      <ThemeProvider theme={theme}>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              // justifyContent: "space-between",
              gap: "1rem",
              marginTop: ".5rem",
              marginRight: ".5rem",
            }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: ".5rem",
              }}
            >
              <Avatar
                alt="Remy Sharp"
                src={comment_author_avatar}
                sx={{ width: 32, height: 32 }}
              />
              <Typography variant="subtitle2">{comment_author}</Typography>
            </Box>
            <Typography variant="caption">{comment_date}</Typography>
          </Box>
          <Typography
            variant="body2"
            sx={{
              backgroundColor: "var(--grey-bg)",
              padding: "8px",
              borderRadius: 4,
              marginLeft: "2.5rem",
              marginRight: "8px",
              width:"fit-content"
            }}
          >
            {comment_content}
          </Typography>
      </ThemeProvider>
    </>
  );
}