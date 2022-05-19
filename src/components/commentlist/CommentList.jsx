import { ThemeProvider } from "@mui/material/styles";
import { theme } from "App";
import { Box } from "@mui/system";
import { Divider} from "@mui/material";
import { AddComment, CommentCard } from "components";

export function CommentList({comments}) {
  return (
    <>
      <ThemeProvider theme={theme}>
          <Divider />
          <AddComment/>
          <Box className="comments-section" component={"div"} sx={{ maxHeight: "12rem", overflowY: "auto", display: "grid", margin: ".5rem",
            }}>
              <Box sx={{ display: "flex", flexDirection: "column", marginTop: ".5rem", marginBottom: ".5rem", }}>
                {comments.map((comment) => <CommentCard comment={comment} />)}
            </Box>
          </Box>
      </ThemeProvider>
    </>
  );
}
