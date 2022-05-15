import { RoutePaths } from "RoutePaths";
import "./App.css";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Header } from "components";

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
    breakpoints: {
      values: {
        xs: 0,
        sm: 450,
        md: 640,
        lg: 900,
        xl: 1200,
      },
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
