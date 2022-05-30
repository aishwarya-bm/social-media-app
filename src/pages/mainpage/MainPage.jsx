import { ThemeProvider } from "@mui/material/styles";
import { theme } from "App";
import { BottomNav, CreatePostModal, Header, Leftnav, Suggestions } from "components";
import AddIcon from "@mui/icons-material/Add";
import { Box, Fab, Grid } from "@mui/material";
import "./mainpage.css";
import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getUserData } from "firebaseUtils/auth";


export function MainPage() {
  const userId=localStorage.getItem("userId");
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    dispatch(getUserData(userId))
  }, []);
  return (
    <>
      <ThemeProvider theme={theme}>
        <Header />
        <Box sx={{ flexGrow: 1 }} className="main-container">
          <Grid container>
            <Leftnav />
            <Grid item className="main-body">
              <Outlet />
            </Grid>
            <Suggestions />
          </Grid>
          <Fab
            color="primary"
            size="small"
            aria-label="add"
            className="floating-addpost"
            onClick={handleClickOpen}
            sx={{
              position: "fixed",
              display: { xs: "none", sm: "inline-flex", md: "none" },
            }}>
            <AddIcon />
          </Fab>
          <CreatePostModal
            open={open}
            handleClose={handleClose}
          />
          <BottomNav />
        </Box>
      </ThemeProvider>
    </>
  );
}
