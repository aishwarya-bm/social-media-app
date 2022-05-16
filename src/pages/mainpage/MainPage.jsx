import { ThemeProvider } from "@mui/material/styles";
import { theme } from "App";
import {
  BottomNav,
  Header,
  Leftnav,
  Suggestions,
} from "components";
import AddIcon from "@mui/icons-material/Add";
import { Box, Fab, Grid } from "@mui/material";
import "./mainpage.css"

export function MainPage(props){
    return (
      <>
        <ThemeProvider theme={theme}>
          <Header />
          <Box sx={{ flexGrow: 1 }} className="main-container">
            <Grid container>
              <Leftnav />
              <Grid item className="main-body">
                {props.children}
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
                display: { xs: "none", sm: "inline-flex", md: "none" },
              }}
            >
              <AddIcon />
            </Fab>
            <BottomNav />
          </Box>
        </ThemeProvider>
      </>
    );
}