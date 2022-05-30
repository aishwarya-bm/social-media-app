import { ThemeProvider } from "@mui/material/styles";
import { theme } from "App";
import { Box } from "@mui/system";
import { Divider, Stack} from "@mui/material";
import { AddComment, CommentCard } from "components";

export function CommentList({comments, postId}) {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Divider />
        <AddComment postId={postId} />
        <Box
          className="comments-section"
          component={"div"}
          sx={{ maxHeight: "12rem", overflowY: "auto", display: "grid", margin: 1 }}>
          <Stack direction="column" spacing={1} margin="1 0">
            {comments?.map(comment => (
              <CommentCard comment={comment} />
            ))}
          </Stack>
        </Box>
      </ThemeProvider>
    </>
  );
}
