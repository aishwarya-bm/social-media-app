import { ThemeProvider } from "@emotion/react";
import { Close } from "@mui/icons-material";
import { Avatar, Box, Button, Card, IconButton, Modal, Stack, Typography } from "@mui/material";
import { theme } from "App";
import { Dialog, DialogContent, DialogContentText, DialogTitle } from "@mui/material";
import { UserNameCard } from "components";
export function AllSuggestions({ open, handleClose, allSuggestions }) {
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
                Suggestions
              </Typography>
              <IconButton aria-label="filter" color="secondary" onClick={handleClose}>
                <Close />
              </IconButton>
            </Stack>
          </DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              {allSuggestions?.map(user => {
                return (
                  <div key={"allSuggestions" + user.id}>
                    <UserNameCard fellowUser={user} cardType="allSuggestions" handleClose={handleClose} />
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
