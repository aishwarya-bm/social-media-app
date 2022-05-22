import { FilterAlt } from "@mui/icons-material";
import { IconButton, Stack, Typography } from "@mui/material";
import { Box, ThemeProvider } from "@mui/system";
import { theme } from "App";
import { FilterChips, Postlist } from "components";
import { setUserProfile } from "features/auth/authSlice";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getLoggedInUserData } from "utils/auth";

export function Home() {
  const [showFilter, setShowFilter] = useState(false);
  const { id, isLoggedIn } = useSelector(store => store.auth);
  const dispatch = useDispatch();
  useEffect(() => {
    getLoggedInUserData(id, dispatch, setUserProfile);
  }, [isLoggedIn]);
  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ marginTop: 4 }}>
        <Stack direction="row" justifyContent="space-between" alignItems="center" margin={1} mt={4}>
          <Typography variant="h6" gutterBottom component="div">
            Home
          </Typography>
          <IconButton aria-label="filter" color="secondary" onClick={() => setShowFilter(prev => !prev)}>
            <FilterAlt />
          </IconButton>
        </Stack>
      </Box>
      {showFilter && <FilterChips setShowFilter={setShowFilter} />}
      <Postlist />
    </ThemeProvider>
  );
}
