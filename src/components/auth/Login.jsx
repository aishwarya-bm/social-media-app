import { Avatar, Button, Container, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import "./login.css";
import { loginUser } from "firebaseUtils/auth";
import { useDispatch } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { login } from "features/auth/authSlice";

export function Login({ setIsSignupForm }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const location = useLocation();
  const handleSubmit = event => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const userData = {
      email: data.get("email"),
      password: data.get("password"),
    };
    loginUser(userData, dispatch, login, navigate, location);
  };
  return (
    <>
      <Container component="main" maxWidth="xs">
        <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Login
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }} textAlign="center">
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
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
            />

            <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
              Sign In
            </Button>
            <Button size="small" onClick={() => setIsSignupForm(true)}>
              {"Don't have an account? Sign Up"}
            </Button>
          </Box>
          OR
          <Button
            type="submit"
            fullWidth
            variant="outlined"
            sx={{ mt: 1 }}
            onClick={() => {
              const userData = {
                email: "aishwarya@gmail.com",
                password: "Aishwarya@1",
              };
              loginUser(userData, dispatch, login, navigate, location);
            }}>
            Login with test credentials
          </Button>
        </Box>
      </Container>
    </>
  );
}
