import { styled, alpha } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "App";
import { Add, Logout } from "@mui/icons-material";
import { CreatePostModal, SearchProfiles } from "components";
import { logoutUser } from "firebaseUtils/auth";
import { logout } from "features/auth/authSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { Stack } from "@mui/material";
import "./header.css";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.black, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.black, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    transition: theme.transitions.create("width"),
    width: "100%",
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
}));

export function Header() {
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const [searchText, setSearhText] = useState("");
  const [showSearch,setShowSearch] = useState(false);

  const handleSearchTextChange = e => {
    debouncedText(e.target.value);
  };

  function debounce(cb, delay = 500) {
    let timer;
    return (...args) => {
      clearTimeout(timer);
      timer = setTimeout(() => {
        cb(...args);
      }, delay);
    };
  }
 const debouncedText = debounce(text => setSearhText(text));

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar
          position="fixed"
          sx={{ backgroundColor: theme.palette.common.white, color: theme.palette.common.black }}>
          <Toolbar className="app-header">
            <Stack direction="row" alignItems="center">
              {
                <IconButton size="large" edge="start" color="inherit" aria-label="open drawer">
                  <img src="https://cdn.iconscout.com/icon/premium/png-32-thumb/social-374-297540.png" alt="logo" />
                </IconButton>
              }
              <Typography
                color="primary"
                component="div"
                sx={{
                  display: { xs: "none", sm: "block" },
                  fontSize: "2rem",
                  fontFamily: "Dancing Script, cursive",
                  fontWeight: "bolder",
                }}>
                Ssup
              </Typography>
            </Stack>
            <Search>
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
              <StyledInputBase
                onFocus={() => setShowSearch(true)}
                onBlur={() => setShowSearch(false)}
                type="search"
                placeholder="Search user…"
                inputProps={{ "aria-label": "search" }}
                onChange={handleSearchTextChange}
                defaultValue=""
              />
            </Search>
            <Box sx={{ display: { md: "flex" } }}>
              <IconButton
                size="large"
                aria-label="show 4 new mails"
                color="inherit"
                onClick={() => logoutUser(dispatch, logout, navigate)}>
                <Logout />
              </IconButton>
            </Box>

            <Box sx={{ display: { xs: "flex", sm: "none" } }}>
              <IconButton size="medium" color="inherit" onClick={handleClickOpen}>
                <Add />
              </IconButton>
            </Box>
          </Toolbar>
        </AppBar>
        <SearchProfiles searchText={searchText} showSearch={showSearch} />
      </Box>
      <CreatePostModal open={open} handleClose={handleClose} />
    </ThemeProvider>
  );
}
