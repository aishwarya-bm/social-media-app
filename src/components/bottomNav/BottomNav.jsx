import { BottomNavigation, BottomNavigationAction, Paper } from "@mui/material";
import {
  ArchiveOutlined,
  FavoriteOutlined,
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
          <BottomNavigationAction label="Recents" icon={<Restore />} />
          <BottomNavigationAction
            label="Favorites"
            icon={<FavoriteOutlined />}
          />
          <BottomNavigationAction label="Archive" icon={<ArchiveOutlined />} />
          <BottomNavigationAction label="Recents" icon={<Restore />} />
          <BottomNavigationAction label="Recents" icon={<Restore />} />
        </BottomNavigation>
      </Paper>
    </>
  );
}
