import { ThemeProvider } from "@emotion/react";
import { theme } from "App";
import { Avatar, Box, Button, Divider, TextField, Typography } from "@mui/material";
export function AddComment(){
    return (
      <>
        <ThemeProvider theme={theme} >
          <Box sx={{ display: "flex", margin: ".5rem", marginTop: "1rem" }}>
            <Avatar alt="Remy Sharp" src="" sx={{ width: 32, height: 32 }} />
            <TextField
              fullWidth
              className="comment-input"
              sx={{
                margin: "0 .5rem",
                borderRadius: 5,
                backgroundColor: `${theme.palette.icon.light}`,
              }}
              placeholder="add a comment"
              id="outlined-name"
              label=""
              onChange={() => {}}
            />
            <Button variant="outlined" color="secondary">
              enter
            </Button>
          </Box>
        </ThemeProvider>
      </>
    );
}