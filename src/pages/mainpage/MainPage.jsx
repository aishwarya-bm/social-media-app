import { BottomNav, CreatePostModal, Header, Leftnav, Suggestions } from "components";
import AddIcon from "@mui/icons-material/Add";
import { Box, Fab, Grid } from "@mui/material";
import "./mainpage.css";
import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getUserData } from "firebaseUtils/auth";
import { setMode } from "features/theme/themeSlice";

export function MainPage() {
  const userId = localStorage.getItem("userId");
  const { mode } = useSelector(store => store.theme);
  const appTheme = mode;
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    dispatch(getUserData(userId));
    dispatch(setMode(appTheme))
  }, []);
  return (
    <>
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
            size="medium"
            aria-label="add"
            className="floating-addpost"
            onClick={handleClickOpen}
            sx={{
              position: "fixed",
              display: { sm: "inline-flex", md: "none" },
            }}>
            <AddIcon />
          </Fab>
          <CreatePostModal open={open} handleClose={handleClose} />
          <BottomNav />
        </Box>
    </>
  );
}
