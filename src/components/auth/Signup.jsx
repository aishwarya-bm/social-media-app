import { ThemeProvider } from "@emotion/react";
import { Avatar, Button, Container, Stack, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { theme } from "App";
import { login } from "features/auth/authSlice";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { createUser, isValidEmail, isValidPassword } from "firebaseUtils/auth";
import "./login.css";
import { profileAvatars } from "constants/profileAvatars";

export function Signup({ setIsSignupForm }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [profileAvatar, setProfileAvatar] = useState("");
  const [formErrors, setFormErrors] = useState({ email: "", password: "" });
  const location = useLocation();

  const handleSubmit = event => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const userData = {
      email: data.get("email"),
      password: data.get("password"),
      firstname: data.get("firstname"),
      lastname: data.get("lastname"),
      avatar : profileAvatar
    };
    if (!isValidEmail(userData.email)) {
      setFormErrors({ ...formErrors, email: "invalid email id" });
      return;
    }
    if (!isValidPassword(userData.password)) {
      setFormErrors({
        email: "",
        password: "Password must be atleast 6 characters, with 1 special character & a number",
      });
      return;
    }
    setFormErrors({ email: "", password: "" });
    createUser(userData, dispatch, login, navigate,location);
  };

  return (
    <>
      <ThemeProvider theme={theme}>
        <Container component="main" maxWidth="xs">
          <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center" }} mt={5}>
            <Typography component="h1" variant="h5" mt={2} >
              Sign up
            </Typography>
            <Stack direction="row" gap={1} mt={1} mb={1} flexWrap="wrap" justifyContent="center">
              {profileAvatars.map(({ hero_avatar, id }) => {
                return (
                  <span className= { profileAvatar === hero_avatar ? "signup-avatar-focus" : "signup-avatar"}>
                    <Avatar
                      onClick={() => setProfileAvatar(hero_avatar)}
                      alt={"Avatar" + id}
                      src={hero_avatar}
                      sx={{
                        width: 56,
                        height: 56,
                      }}
                    />
                  </span>
                );
              })}
            </Stack>
            <Box component="form" onSubmit={handleSubmit} textAlign="center">
              <TextField
                margin="normal"
                required
                fullWidth
                id="firstname"
                label="First name"
                name="firstname"
                autoComplete="firstname"
                autoFocus
              />
              <TextField
                margin="normal"
                required
                fullWidth
                id="lastname"
                label="Last name"
                name="lastname"
                autoComplete="lastname"
                autoFocus
              />
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
                error={formErrors.email ? true : false}
                helperText={formErrors.email ? formErrors.email : ""}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                error={formErrors.password ? true : false}
                helperText={formErrors.password ? formErrors.password : ""}
              />
              <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
                Sign up
              </Button>
              <Button size="small" onClick={() => setIsSignupForm(false)}>
                {"Already have an account? Login"}
              </Button>
            </Box>
          </Box>
        </Container>
      </ThemeProvider>
    </>
  );
}
