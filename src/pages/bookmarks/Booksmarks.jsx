import { ThemeProvider } from "@mui/material/styles";
import { theme } from "App";
import { Typography } from "@mui/material";
import { Postlist } from "components";
export function Bookmarks({ type }) {
  return (
    <>
      <ThemeProvider theme={theme}>
        {type !== "profile" && (
          <Typography variant="h6" gutterBottom component="div" sx={{ marginTop: 4, marginBottom: 3 }}>
            Saved posts
          </Typography>
        )}
        <Postlist type="saved" />
      </ThemeProvider>
    </>
  );
}
