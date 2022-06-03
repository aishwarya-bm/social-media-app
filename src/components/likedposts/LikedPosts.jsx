import { ThemeProvider } from "@mui/material/styles";
import { theme } from "App";
import { Postlist } from "components";
export function LikedPosts() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Postlist type="liked" />
      </ThemeProvider>
    </>
  );
}
