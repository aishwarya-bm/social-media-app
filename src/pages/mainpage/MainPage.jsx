import { ThemeProvider } from "@mui/material/styles";
import { theme } from "App";
import {
  BottomNav,
  CreatePostModal,
  Header,
  Leftnav,
  Suggestions,
} from "components";
import AddIcon from "@mui/icons-material/Add";
import { Box, Fab, Grid } from "@mui/material";
import "./mainpage.css"
import { useState } from "react";
import { Outlet } from "react-router-dom";

export function MainPage(){
  const [open, setOpen] = useState(false);
  const [chosenEmoji, setChosenEmoji] = useState(null);
  const [showEmoji, setShowEmoji] = useState(false);

  const onEmojiClick = (event, emojiObject) => {
    setChosenEmoji(emojiObject);
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
    return (
      <>
        <ThemeProvider theme={theme}>
          <Header />
          <Box sx={{ flexGrow: 1 }} className="main-container">
            <Grid container>
              <Leftnav />
              <Grid item className="main-body">
                <Outlet/>
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
              }}
            >
              <AddIcon />
            </Fab>
            <CreatePostModal
              showEmoji={showEmoji}
              open={open}
              handleClose={handleClose}
              setShowEmoji={setShowEmoji}
              onEmojiClick={onEmojiClick}
            />
            <BottomNav />
          </Box>
        </ThemeProvider>
      </>
    );
}