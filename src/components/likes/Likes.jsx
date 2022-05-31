import { ThemeProvider } from "@mui/material/styles";
import { theme } from "App";
import { Postlist } from "components";
export function Likes() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Postlist isLikedPage={true} />
      </ThemeProvider>
    </>
  );
}
