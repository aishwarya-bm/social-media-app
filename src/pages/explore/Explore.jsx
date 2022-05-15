import { ThemeProvider } from "@mui/material/styles";
import { theme } from "App";
import {Box, Button, Fab, Grid } from "@mui/material";
import "./explore.css"
import { BottomNav, Leftnav, NewsFeed, Rightnav, Suggestions } from "components";
import AddIcon from "@mui/icons-material/Add";
import { Profile } from "pages";


export function Explore() {
  
  return (
    <>
      <ThemeProvider theme={theme}>
        <Box sx={{ flexGrow: 1 }} className="explore-body">
          <Grid container>
            <Leftnav />
            <Grid item className="explore-newsfeed">
              {/* <NewsFeed /> */}
              <Profile />
            </Grid>          
              <Suggestions />
          </Grid>
          <Fab
            color="primary"
            size="small"
            aria-label="add"
            className="floating-addpost"
            sx={{
              position: "fixed",
              display: { xs: "none", sm: "inherit", md: "none" },
            }}
          >
            <AddIcon />
          </Fab>
          <BottomNav/>
        </Box>
      </ThemeProvider>
    </>
  );
}
