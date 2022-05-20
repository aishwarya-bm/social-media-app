import { ThemeProvider } from "@mui/system";
import {theme} from "App";
import { Postlist } from "components";

export function Explore() {

  return (
    <ThemeProvider theme={theme}>
      <Postlist/>
    </ThemeProvider>
  );
}
