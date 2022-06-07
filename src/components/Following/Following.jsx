import { Close } from "@mui/icons-material";
import { IconButton, Stack, Typography } from "@mui/material";
import {
  Dialog,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";
import { UserNameCard } from "components";
export function Following({open,handleClose,following}) {

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
                Following
              </Typography>
              <IconButton aria-label="filter" color="secondary" onClick={handleClose}>
                <Close />
              </IconButton>
            </Stack>
          </DialogTitle>

          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              {following?.length ? (
                following?.map(following => {
                  return (
                    <div key={"following" + following.id}>
                      <UserNameCard fellowUser={following} cardType="following" handleClose={handleClose} />
                    </div>
                  );
                })
              ) : (
                <Stack alignItems="center">
                  <Typography gutterBottom component="div" textAlign="center">
                    Not following anyone yet, see <i>Suggestions</i> to follow your friends.
                  </Typography>
                  <img
                    src="https://cdn.iconscout.com/icon/premium/png-128-thumb/add-friend-4216840-3498387.png"
                    alt="following-empty-list"
                  />
                </Stack>
              )}
            </DialogContentText>
          </DialogContent>
        </Dialog>
    </>
  );
}
