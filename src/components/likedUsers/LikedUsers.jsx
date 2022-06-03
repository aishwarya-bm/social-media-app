import { ThemeProvider } from "@emotion/react";
import { Close } from "@mui/icons-material";
import { IconButton, Stack, Typography } from "@mui/material";
import { theme } from "App";
import { Dialog, DialogContent, DialogContentText, DialogTitle } from "@mui/material";
import { UserNameCard } from "components";
export function LikedUsers({ open, handleClose, likedUsers }) {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Dialog
          open={open}
          onClose={handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description">
          <DialogTitle id="alert-dialog-title">
            <Stack direction="row" justifyContent="space-between" alignItems="center">
              <Typography variant="h6" gutterBottom component="div">
                Liked by:
              </Typography>
              <IconButton aria-label="filter" color="secondary" onClick={handleClose}>
                <Close />
              </IconButton>
            </Stack>
          </DialogTitle>

          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              {likedUsers?.map(user => {
                return (
                  <div key={"user" + user.id}>
                    <UserNameCard fellowUser={user} cardType={"likedUsers"} handleClose={handleClose} />
                  </div>
                );
              })}
            </DialogContentText>
          </DialogContent>
        </Dialog>
      </ThemeProvider>
    </>
  );
}
