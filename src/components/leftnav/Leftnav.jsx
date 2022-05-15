import "./leftnav.css";
import { ThemeProvider } from "@mui/material/styles";
import { Button, Box, Grid, Typography } from "@mui/material";
import { theme } from "App";
import { NavLink } from "react-router-dom";
import {
  AccountCircle,
  Add,
  Bookmark,
  Home,
  Message,
  Notifications,
} from "@mui/icons-material";

export function Leftnav() {
  const getActiveStyle = ({ isActive }) =>
    isActive
      ? {
          color: theme.palette.secondary.main,
          fontWeight: "600",
          padding: ".5rem",
        }
      : {
          color: "black",
          fontWeight: "400",
          padding: "0 .5rem",
        };

  return (
    <ThemeProvider theme={theme}>
      <Grid
        position="fixed"
        left="3rem"
        item
        sx={{
          flexDirection: "column",
          margin: "0 1rem",
          gap: "1rem",
          display: { xs: "none", sm: "flex", md: "flex" },
        }}
      >
        <Box component={"div"} sx={{ display: { xs: "none", sm: "inline" } }}>
          <NavLink to="/" style={getActiveStyle}>
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <Home size={25} /> &nbsp;
              <Typography
                variant="string"
                component="span"
                sx={{ display: { sm: "none", md: "inherit" } }}
              >
                Home
              </Typography>
            </Box>
          </NavLink>

          <NavLink to="/notifications" style={getActiveStyle}>
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <Notifications size={25} /> &nbsp;
              <Typography
                variant="string"
                component="span"
                sx={{ display: {sm: "none", md: "inherit" } }}
              >
                Notifications
              </Typography>
            </Box>
          </NavLink>

          <NavLink to="/notifications" style={getActiveStyle}>
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <Message size={25} /> &nbsp;
              <Typography
                variant="string"
                component="span"
                sx={{ display: {  sm: "none", md: "inherit" } }}
              >
                Messages
              </Typography>
            </Box>
          </NavLink>

          <NavLink to="/bookmarks" style={getActiveStyle}>
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <Bookmark size={25} /> &nbsp;
              <Typography
                variant="string"
                component="span"
                sx={{ display: {  sm: "none", md: "inherit" } }}
              >
                Bookmarks
              </Typography>
            </Box>
          </NavLink>

          <NavLink to="/profile" style={getActiveStyle}>
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <AccountCircle size={25} /> &nbsp;
              <Typography
                variant="string"
                component="span"
                sx={{ display: {  sm: "none", md: "inherit" } }}
              >
                Profile
              </Typography>
            </Box>
          </NavLink>
          <Button
            variant="contained"
            sx={{
              mt: 2,
              display: { xs: "none", sm: "none", md: "inherit" },
            }}
          >
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <Add />
              <Typography
                variant="string"
                component="span"
                sx={{ display: { sm: "none", md: "inherit" } }}
              >
                Post
              </Typography>
            </Box>
          </Button>
        </Box>
      </Grid>
    </ThemeProvider>
  );
}
