import { RoutePaths } from "RoutePaths";
import "./App.css";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Header, Leftnav } from "components";

export const theme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#21e6c1",
    },
    secondary: {
      main: "#6068e2",
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Header />
      <RoutePaths />
    </ThemeProvider>
  );
}

export default App;
