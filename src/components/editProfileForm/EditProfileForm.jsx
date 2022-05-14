import { Box, IconButton, Modal, Typography } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import "./editProfileForm.css"
export function EditProfileForm({open,handleCloseModal}){
    return (
      <>
        <Modal
          open={open}
          onClose={handleCloseModal}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box className="modal-edit-profile">
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <Typography id="modal-modal-title" variant="h6" component="h2">
                Edit profile
              </Typography>
              <IconButton
                aria-label="close"
                onClick={() => handleCloseModal()}
                size="small"
              >
                <CloseIcon fontSize="small" />
              </IconButton>
            </Box>
            <Box sx={{display:"flex", flexDirection:"column"}}>
              <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
              </Typography>
            </Box>
          </Box>
        </Modal>
      </>
    );
}