import { ThemeProvider } from "@emotion/react";
import { Stack } from "@mui/material";
import login from "assets/login.svg";
import { theme } from "App";
import { Login } from "components/auth/Login";
import { Header } from "components";
import { Box } from "@mui/system";
import { Signup } from "components/auth/Signup";
import { useState } from "react";
export function Auth() {
  const [isSignupForm, setIsSignupForm] = useState(false);
  return (
    <>
      <ThemeProvider theme={theme}>
        <Header />
        <Stack direction="row" height="100vh" alignItems="center">
          <Box component="img" src={login} alt="login-img" className="login-image" display={{ xs: "none", sm: "none", md: "inherit" }} />
          {isSignupForm ? <Signup setIsSignupForm={setIsSignupForm}/> : <Login setIsSignupForm={setIsSignupForm}/>}
        </Stack>
      </ThemeProvider>
    </>
  );
}
