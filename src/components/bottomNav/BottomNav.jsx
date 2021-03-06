import { Paper, Stack } from "@mui/material";
import { sidenavItems } from "constants/sidenav";
import { useSelector } from "react-redux";
import { Box, Typography } from "@mui/material";
import { NavLink } from "react-router-dom";
import { appTheme } from "theme-util";
export function BottomNav() {
  const { theme:{mode}, auth : {id: userId} } = useSelector(store => store);
  const theme = appTheme(mode);
  const getActiveStyle = ({ isActive }) =>
    isActive
      ? {
          color: theme.palette.primary.main,
          borderRadius: "50%",
          fontWeight: "600",
          fontSize: "1.2rem",
        }
      : {
          color: theme.palette.icon.main,
          fontWeight: "400",
        };

  return (
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
                    <NavLink
                      key={"bottomnav" + id}
                      to={title === "Profile" ? nextUrl + `/${userId}` : nextUrl}
                      style={getActiveStyle}>
                      <Box sx={{ display: "flex", alignItems: "center", flexDirection: "column" }}>
                        {nav_icon}
                        <Typography variant="body1" component="span" sx={{ display: { sm: "none", md: "inherit" } }}>
                          {title}
                        </Typography>
                      </Box>
                    </NavLink>
              );
            })}
          </Stack>
        </Paper>
  );
}
