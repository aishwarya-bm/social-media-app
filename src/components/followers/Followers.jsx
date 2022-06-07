import { Close } from "@mui/icons-material";
import { IconButton, Stack, Typography } from "@mui/material";
import { Dialog, DialogContent, DialogContentText, DialogTitle } from "@mui/material";
import { UserNameCard } from "components";
export function Followers({ open, handleClose, followers }) {
  return (
    <>
        <Dialog
          open={open}
          onClose={handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description">
          <DialogTitle id="alert-dialog-title">
            <Stack direction="row" justifyContent="space-between" alignItems="center">
              <Typography variant="h6" gutterBottom component="div">
                Followers
              </Typography>
              <IconButton aria-label="filter" color="secondary" onClick={handleClose}>
                <Close />
              </IconButton>
            </Stack>
          </DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              {followers?.length ? (
                followers?.map(follower => {
                  return (
                    <div key={"follower" + follower.id}>
                      <UserNameCard fellowUser={follower} cardType="follower" handleClose={handleClose} />
                    </div>
                  );
                })
              ) : (
                <Stack alignItems="center">
                  <Typography gutterBottom component="div" textAlign="center">
                    No followers yet, follow your friends to show your presence.
                  </Typography>
                  <img
                    src="https://cdn.iconscout.com/icon/premium/png-128-thumb/unfriend-4216872-3498419.png"
                    alt="follower-empty-list"
                  />
                </Stack>
              )}
            </DialogContentText>
          </DialogContent>
        </Dialog>
    </>
  );
}
