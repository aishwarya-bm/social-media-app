import { ThemeProvider } from "@emotion/react";
import { Close } from "@mui/icons-material";
import { Avatar, Box, Button, Card, IconButton, Modal, Stack, Typography } from "@mui/material";
import { theme } from "App";
import {
  Dialog,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";
import { UserNameCard } from "components";
export function Followers({ open, handleClose }) {

    const followers = [
      {
        username: "Aishwarya Biradar",
        avatar: "",
      },
      {
        username: "Aishwarya Biradar",
        avatar: "",
      },
      {
        username: "Aishwarya Biradar",
        avatar: "",
      },
    ];
  return (
    <>
      <ThemeProvider theme={theme}>
        <Dialog
          open={open}
          onClose={handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Typography variant="h6" gutterBottom component="div">
                Followers
              </Typography>
              <IconButton
                aria-label="filter"
                color="secondary"
                onClick={handleClose}
              >
                <Close />
              </IconButton>
            </Box>
          </DialogTitle>

          <DialogContent>
            <DialogContentText id="alert-dialog-description">

              { followers.map(follower=>{
                  return <UserNameCard fellowUser={follower} isFollowerCard={true} />
              }) }
              
            </DialogContentText>
          </DialogContent>
        </Dialog>
      </ThemeProvider>
    </>
  );
}