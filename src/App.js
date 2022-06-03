import { RoutePaths } from "RoutePaths";
import "./App.css";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { ToastContainer } from "react-toastify";
import { red } from "@mui/material/colors";

export const theme = createTheme({
  palette: {
    mode: "light",
    primary: {
      // main: "#21e6c1",
      // main: "#fd6297",
      main: "#407BFF",
    },
    secondary: {
      main: "#6068e2",
    },
    icon: {
      main: "#666666",
      light: "#F0F2F5",
    },
    red: {
      main: red[500],
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

function App() {
  return (
    <ThemeProvider theme={theme}>
      <RoutePaths />
      <ToastContainer/>
    </ThemeProvider>
  );
}

export default App;
