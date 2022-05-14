import { ThemeProvider } from "@mui/material/styles";
import { theme } from "App";
import { Box, Button, Fab, Grid } from "@mui/material";
import "./explore.css"
import { Leftnav, NewsFeed, Rightnav, Suggestions } from "components";
import AddIcon from "@mui/icons-material/Add";


export function Explore() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Box sx={{ flexGrow: 1 }} className="explore-body">
          <Grid container spacing={1} columns={{ xs: 4, sm: 8, md: 12 }}>
            <Leftnav/>
            <Grid item xs={12} sm={5} md={7}>
              <NewsFeed />
            </Grid>
            <Grid item sm={3} md={3} sx={{ display: { xs: "none", sm: "grid"} }}
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
              display: { sm: "block", md: "none" },
            }}
          >
            <AddIcon />
          </Fab>
        </Box>
      </ThemeProvider>
    </>
  );
}
