import { ThemeProvider } from "@mui/material/styles";
import { theme } from "App";
import { BottomNavigation, BottomNavigationAction, Box, Button, Fab, Grid, Paper } from "@mui/material";
import "./explore.css"
import { Leftnav, NewsFeed, Rightnav, Suggestions } from "components";
import AddIcon from "@mui/icons-material/Add";
import { ArchiveOutlined, FavoriteOutlined, Restore } from "@mui/icons-material";
import { useState } from "react";


export function Explore() {
  const [value, setValue] = useState(0);
  return (
    <>
      <ThemeProvider theme={theme}>
        <Box sx={{ flexGrow: 1 }} className="explore-body">
          <Grid container spacing={3}>
            <Leftnav />
            <Grid item className="explore-newsfeed">
              <NewsFeed />
            </Grid>
            <Grid
              item
              position="fixed"
              right="2rem"
              sx={{ display: { xs: "none", sm: "none", md: "none",lg:"grid" } }}
            >
              <Suggestions />
            </Grid>
          </Grid>
          <Fab
            color="primary"
            size="small"
            aria-label="add"
            className="floating-addpost"
            sx={{
              position: "fixed",
              display: {xs:"none", sm: "inherit", md: "none" },
            }}
          >
            <AddIcon />
          </Fab>
          <Paper
            sx={{
              position: "fixed",
              bottom: 0,
              left: 0,
              right: 0,
              display: { xs: "inherit", sm: "none",md:"none" },
            }}
            elevation={3}
          >
            <BottomNavigation
              showLabels
              value={value}
              onChange={(event, newValue) => {
                setValue(newValue);
              }}
            >
              <BottomNavigationAction label="Recents" icon={<Restore />} />
              <BottomNavigationAction
                label="Favorites"
                icon={<FavoriteOutlined />}
              />
              <BottomNavigationAction
                label="Archive"
                icon={<ArchiveOutlined />}
              />
              <BottomNavigationAction label="Recents" icon={<Restore />} />
              <BottomNavigationAction label="Recents" icon={<Restore />} />
            </BottomNavigation>
          </Paper>
        </Box>
      </ThemeProvider>
    </>
  );
}
