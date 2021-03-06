import { Avatar, Button, Container, IconButton, Stack, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { login } from "features/auth/authSlice";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { createUser, isValidEmail, isValidPassword } from "firebaseUtils/auth";
import "./login.css";
import { profileAvatars } from "constants/profileAvatars";
import { RemoveRedEyeOutlined, VisibilityOffOutlined } from "@mui/icons-material";

export function Signup({ setIsSignupForm }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const toggleShowPassword = e => {
    e.preventDefault();
    setShowPassword(showPassword => !showPassword);
  };
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
      avatar: profileAvatar,
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
    createUser(userData, dispatch, login, navigate, location);
  };

  return (
    <>
      <Container component="main" maxWidth="xs">
        <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center" }} mt={5}>
          <Typography component="h1" variant="h5" mt={2}>
            Sign up
          </Typography>
          <Stack direction="row" gap={1} mt={1} mb={1} flexWrap="wrap" justifyContent="center">
            {profileAvatars.map(({ hero_avatar, id }) => {
              return (
                <Box
                  component="span"
                  key={hero_avatar + id}
                  className={profileAvatar === hero_avatar ? "signup-avatar-focus" : "signup-avatar"}>
                  <Avatar
                    onClick={() => setProfileAvatar(hero_avatar)}
                    alt={"Avatar" + id}
                    src={hero_avatar}
                    sx={{
                      width: 56,
                      height: 56,
                    }}
                  />
                </Box>
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
            />
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              error={formErrors.email ? true : false}
              helperText={formErrors.email ? formErrors.email : ""}
            />
            <Box position="relative">
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type={showPassword ? "text" : "password"}
                id="password"
                autoComplete="current-password"
                error={formErrors.password ? true : false}
                helperText={formErrors.password ? formErrors.password : ""}
              />
              {showPassword ? (
                <IconButton onClick={e => toggleShowPassword(e)} className="eye-icon" sx={{ position: "absolute" }}>
                  <RemoveRedEyeOutlined />
                </IconButton>
              ) : (
                <IconButton className="eye-icon" onClick={e => toggleShowPassword(e)} sx={{ position: "absolute" }}>
                  <VisibilityOffOutlined />
                </IconButton>
              )}
            </Box>
            <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
              Sign up
            </Button>
            <Button size="small" onClick={() => setIsSignupForm(false)}>
              {"Already have an account? Login"}
            </Button>
          </Box>
        </Box>
      </Container>
    </>
  );
}
