import { createTheme } from "@mui/material";
import { grey, red } from "@mui/material/colors";

export const appTheme = mode => {
 return createTheme({
    palette: {
      mode: mode,
      primary: {
        main: "#407BFF",
      },
      secondary: {
        main: "#6068e2",
      },
      icon: {
        main: "#666666",
        light: "#F0F2F5",
        dark: "#363636",
      },
      red: {
        main: red[500],
      },
      black: {
        main: grey[900],
      },
      white: {
        main: grey[50],
      },
    },
    typography: {
      fontFamily: `"Ubuntu", "Helvetica", "Arial","Dancing Script, cursive", sans-serif`,
      fontSize: 14,
      fontWeightLight: 300,
      fontWeightRegular: 400,
      fontWeightMedium: 500,
    },
  });
};
