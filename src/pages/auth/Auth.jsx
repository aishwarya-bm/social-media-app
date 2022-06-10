import { Stack } from "@mui/material";
import login from "assets/login.svg";
import { Login } from "components/auth/Login";
import { Header } from "components";
import { Box } from "@mui/system";
import { Signup } from "components/auth/Signup";
import { useState } from "react";
import { useEffect } from "react";
export function Auth() {
  const [isSignupForm, setIsSignupForm] = useState(false);
  useEffect(()=>{
    const title = isSignupForm ? "Signup" : "Login"
    document.title = `${title} | Ssup`
  },[])
  return (
    <>
      <Header isAuthPage={true} />
      <Stack direction="row" height="100vh" alignItems="center">
        <Box
          component="img"
          src={login}
          alt="login-img"
          className="login-image"
          display={{ xs: "none", sm: "none", md: "inherit" }}
        />
        {isSignupForm ? <Signup setIsSignupForm={setIsSignupForm} /> : <Login setIsSignupForm={setIsSignupForm} />}
      </Stack>
    </>
  );
}
