import { SortOutlined } from "@mui/icons-material";
import { IconButton, Stack, Typography } from "@mui/material";
import { Box, ThemeProvider } from "@mui/system";
import { theme } from "App";
import { FilterChips, Postlist } from "components";
import { setUserProfile } from "features/auth/authSlice";
import { getUserData } from "firebaseUtils/auth";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

export function Home() {
  const dispatch = useDispatch();
  const {id} = useSelector(store=>store.auth)
  const [showFilter, setShowFilter] = useState(false);
  const [filterBy, setFilterBy] = useState("recent");
  const handleClick = e => {
    setFilterBy(e.target.innerText);
  };

  const handleClose = () =>{
    setShowFilter(prev => !prev);
    // setFilterBy("recent")
  }

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ marginTop: 4 }}>
        <Stack direction="row" justifyContent="space-between" alignItems="center" margin={1} mt={5}>
          <Typography variant="h6" gutterBottom component="div">
            Home
          </Typography>
          <IconButton aria-label="filter" color="secondary" onClick={() => handleClose()}>
            <SortOutlined />
          </IconButton>
        </Stack>
      </Box>
      {showFilter && <FilterChips filterBy={filterBy} handleClick={handleClick} />}
      <Postlist filterByChip={filterBy} />
    </ThemeProvider>
  );
}
