import { theme } from "App";
import { ThemeProvider } from "@emotion/react";
import { Box, Button, Stack, Typography } from "@mui/material";
import socialmedia from "assets/socialmedia.svg";
import "./landingpage.css"
import { Header } from "components";
import { useNavigate } from "react-router-dom";
export function LandingPage() {
    const navigate = useNavigate()
  return (
    <>
      <ThemeProvider theme={theme}>
        <Stack direction="row" height="100vh" alignItems="center" flexWrap="wrap">
          <Stack direction="column" alignItems="center" justifyContent="center" width="45vw" gap={1}>
            <Typography variant="h3"> Welcome to Ssup!</Typography>
            <Typography variant="h5"> Connect with your loved ones here...</Typography>
            <Button variant="contained" onClick={() => navigate("/login")}>
              Get started
            </Button>
          </Stack>
          <Box component="img" src={socialmedia} alt="home-banner" width="50vw" />
        </Stack>
      </ThemeProvider>
    </>
  );
}
