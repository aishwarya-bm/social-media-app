import { BottomNavigation, BottomNavigationAction, Paper, Stack } from "@mui/material";
import { sidenavItems } from "constants/sidenav";
import { useSelector } from "react-redux";
import { Routes, useNavigate } from "react-router-dom";
import { ThemeProvider } from "@mui/material/styles";
import { Button, Box, Grid, Typography } from "@mui/material";
import { theme } from "App";
import { NavLink } from "react-router-dom";
import { Add } from "@mui/icons-material";
import React, { useState } from "react";
import { CreatePostModal } from "components";
export function BottomNav() {
  const [value, setValue] = useState(0);
  const { id: userId } = useSelector(store => store.auth);
  const navigate = useNavigate();
  const getActiveStyle = ({ isActive }) =>
    isActive
      ? {
          // backgroundColor: theme.palette.primary.main,
          color: theme.palette.primary.main,
          borderRadius: "50%",
          fontWeight: "600",
          // padding: ".5rem",
          fontSize: "1.2rem",
        }
      : {
          color: theme.palette.icon.main,
          fontWeight: "400",
          // padding: "0 .5rem",
        };

  console.log(value);
  return (
    <>
      <ThemeProvider theme={theme}>
        <Paper
          className="paper-bottomnav"
          sx={{
            position: "fixed",
            bottom: 0,
            left: 0,
            right: 0,
            display: { xs: "inherit", sm: "none", md: "none" },
          }}
          elevation={3}>
          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="center"
            sx={{ display: { xs: "flex", sm: "flex" }, p: 1 }}>
            {sidenavItems.map(({ id, nav_icon, title, nextUrl }) => {
              return (
                <>
                  <NavLink
                    key={"nav" + id}
                    to={title === "Profile" ? nextUrl + `/${userId}` : nextUrl}
                    style={getActiveStyle}>
                    <Box sx={{ display: "flex", alignItems: "center", flexDirection:"column" }}>
                      {nav_icon}
                      <Typography variant="body1" component="span" sx={{ display: { sm: "none", md: "inherit" } }}>
                        {title}
                      </Typography>
                    </Box>
                  </NavLink>
                </>
              );
            })}
          </Stack>
        </Paper>
      </ThemeProvider>
    </>
  );
}
