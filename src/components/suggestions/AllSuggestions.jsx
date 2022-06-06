import { Close } from "@mui/icons-material";
import { IconButton, Stack, Typography } from "@mui/material";
import { Dialog, DialogContent, DialogContentText, DialogTitle } from "@mui/material";
import { UserNameCard } from "components";
export function AllSuggestions({ open, handleClose, allSuggestions }) {
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
                Suggestions
              </Typography>
              <IconButton aria-label="filter" color="secondary" onClick={handleClose}>
                <Close />
              </IconButton>
            </Stack>
          </DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              { allSuggestions?.length ? allSuggestions?.map(user => {
                return (
                  <div key={"allSuggestions" + user.id}>
                    <UserNameCard fellowUser={user} cardType="allSuggestions" handleClose={handleClose} />
                  </div>
                );
              }) : <Stack alignItems="center" >
              <Typography gutterBottom component="div" sx={{ marginTop: 1 }} textAlign="center">
                No suggestions, check out your news feed to stay updated.
              </Typography>
              <img
                src="https://cdn.iconscout.com/icon/premium/png-128-thumb/empty-folder-5400756-4557891.png"
                alt="no-suggestions"
              />
            </Stack>}
            </DialogContentText>
          </DialogContent>
        </Dialog>
    </>
  );
}
