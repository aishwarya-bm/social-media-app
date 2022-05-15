import { BottomNavigation, BottomNavigationAction, Paper } from "@mui/material";
import {
    AccountBoxOutlined,
  AccountCircle,
  Add,
  ArchiveOutlined,
  Bookmark,
  FavoriteOutlined,
  Home,
  Message,
  Restore,
} from "@mui/icons-material";
import { useState } from "react";
export function BottomNav() {
const [value, setValue] = useState(0);
  return (
    <>
      <Paper
        sx={{
          position: "fixed",
          bottom: 0,
          left: 0,
          right: 0,
          display: { xs: "inherit", sm: "none", md: "none" },
        }}
        elevation={3}
      >
        <BottomNavigation
          showLabels
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
        >
          <BottomNavigationAction label="Home" icon={<Home />} />
          <BottomNavigationAction
            label="Post"
            icon={<Add />}
          />
          <BottomNavigationAction label="Archive" icon={<ArchiveOutlined />} />
          <BottomNavigationAction label="Saved" icon={<Bookmark />} />
          <BottomNavigationAction label="Profile" icon={<AccountCircle />} />
        </BottomNavigation>
      </Paper>
    </>
  );
}
