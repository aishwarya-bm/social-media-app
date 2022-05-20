import { RoutePaths } from "RoutePaths";
import "./App.css";
import { createTheme, ThemeProvider } from "@mui/material/styles";

export const theme = createTheme({
  palette: {
    mode: "light",
    primary: {
      // main: "#21e6c1",
      main: "#fd6297",
    },
    secondary: {
      main: "#6068e2",
    },
    iconColor: "#666666",
    icon: {
      main: "#666666",
      light: "#F0F2F5",
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <RoutePaths />
    </ThemeProvider>
  );
}

export default App;
