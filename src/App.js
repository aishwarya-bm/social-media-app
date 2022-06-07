import { RoutePaths } from "RoutePaths";
import "./App.css";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { ToastContainer } from "react-toastify";
import { CssBaseline } from "@mui/material";
import { useSelector } from "react-redux";
import { appTheme } from "theme-util";
import { grey, red } from "@mui/material/colors";

// export const theme = createTheme({
//   palette: {
//     mode:  "light" ,
//     primary: {
//       main: "#407BFF",
//     },
//     secondary: {
//       main: "#6068e2",
//     },
//     icon: {
//       main: "#666666",
//       light: "#F0F2F5",
//       dark: "#363636",
//     },
//     red: {
//       main: red[500],
//     },
//     black: {
//       main: grey[900],
//     },
//     white: {
//       main: grey[50],
//     },
//   },
//   typography: {
//     fontFamily: `"Ubuntu", "Helvetica", "Arial","Dancing Script, cursive", sans-serif`,
//     fontSize: 14,
//     fontWeightLight: 300,
//     fontWeightRegular: 400,
//     fontWeightMedium: 500,
//   },
// });

function App() {
  const {mode} = useSelector(store=>store.theme)
  const theme = appTheme(mode)
 
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <RoutePaths />
      <ToastContainer />
    </ThemeProvider>
  );
}

export default App;
