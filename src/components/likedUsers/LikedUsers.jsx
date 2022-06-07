import { Close } from "@mui/icons-material";
import { IconButton, Stack, Typography } from "@mui/material";
import { Dialog, DialogContent, DialogContentText, DialogTitle } from "@mui/material";
import { UserNameCard } from "components";
export function LikedUsers({ open, handleClose, likedUsers }) {
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
                Liked by:
              </Typography>
              <IconButton aria-label="filter" color="secondary" onClick={handleClose}>
                <Close />
              </IconButton>
            </Stack>
          </DialogTitle>

          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              {likedUsers?.length ? (
                likedUsers?.map(user => {
                  return (
                    <div key={"user" + user.id}>
                      <UserNameCard fellowUser={user} cardType={"likedUsers"} handleClose={handleClose} />
                    </div>
                  );
                })
              ) : (
                <Stack alignItems="center">
                  <Typography gutterBottom component="div" textAlign="center">
                    No likes on this post yet.
                  </Typography>
                  <img
                    src="https://cdn.iconscout.com/icon/premium/png-128-thumb/like-3926003-3261770.png"
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
