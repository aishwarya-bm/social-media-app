import "./leftnav.css";
import {ThemeProvider } from "@mui/material/styles";
import { Button,Box, Grid } from "@mui/material";
import { theme } from "App";

export function Leftnav() {
  const getActiveStyle = ({ isActive }) =>
    isActive
      ? {
          backgroundColor: theme.palette.primary.main,
          borderRadius:"5px"
        }
      : {};

      console.log(theme.palette)

  return (
    <ThemeProvider theme={theme}>
      <Grid
        sm={6}
        md={1.5}
        item
        sx={{
          flexDirection: "column",
          marginRight: "2rem",
          gap: "1rem",
          display: { xs: "none", sm: "none", md: "flex" },
        }}
      >
        <Button variant="contained">+ Post</Button>
        <Button variant="outlined" color="secondary">
          Saved
        </Button>
      </Grid>
    </ThemeProvider>
  );
}
