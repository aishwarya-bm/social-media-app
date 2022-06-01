import "./leftnav.css";
import { ThemeProvider } from "@mui/material/styles";
import { Button, Box, Grid, Typography } from "@mui/material";
import { theme } from "App";
import { NavLink } from "react-router-dom";
import { Add } from "@mui/icons-material";
import React, { useState } from "react";
import { CreatePostModal } from "components";
import { sidenavItems } from "constants/sidenav";
import { useSelector } from "react-redux";

export function Leftnav() {
  const { id: userId, user } = useSelector(store => store.auth);
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const getActiveStyle = ({ isActive }) =>
    isActive
      ? {
          color: theme.palette.primary.main,
          fontWeight: "600",
          padding: ".5rem",
          fontSize: "1.2rem",
        }
      : {
          color: theme.palette.iconColor,
          fontWeight: "400",
          padding: "0 .5rem",
        };

  return (
    <ThemeProvider theme={theme}>
      <Grid
        position="fixed"
        left="3rem"
        paddingTop="1rem"
        item
        sx={{
          flexDirection: "column",
          margin: "0 1rem",
          gap: "1rem",
          display: { xs: "none", sm: "flex", md: "flex" },
        }}>
        <Box component={"div"} sx={{ display: { xs: "none", sm: "inline" } }}>
          {sidenavItems.map(({ id, nav_icon, title, nextUrl }) => {
            return (
              <>
                  <NavLink key={"nav" + id} to={title === "Profile" ? nextUrl + `/${userId}` : nextUrl} style={getActiveStyle}>
                    <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                      {nav_icon}
                      <Typography variant="string" component="span" sx={{ display: { sm: "none", md: "inherit" } }}>
                        {title}
                      </Typography>
                    </Box>
                  </NavLink>
              </>
            );
          })}

          <Button
            variant="contained"
            onClick={handleClickOpen}
            sx={{
              mt: 2,
              display: { xs: "none", sm: "none", md: "inherit" },
            }}>
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <Add />
              <Typography variant="string" component="span" sx={{ display: { sm: "none", md: "inherit" } }}>
                Post
              </Typography>
            </Box>
          </Button>

          <CreatePostModal open={open} handleClose={handleClose} />
        </Box>
      </Grid>
    </ThemeProvider>
  );
}
