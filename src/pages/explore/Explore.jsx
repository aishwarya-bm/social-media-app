import { Filter, Filter1Outlined, FilterAlt, SortOutlined } from "@mui/icons-material";
import { IconButton, Stack, Typography } from "@mui/material";
import { Box, ThemeProvider } from "@mui/system";
import { theme } from "App";
import { FilterChips, Postlist } from "components";
import { useState } from "react";

export function Explore() {
  const [showFilter, setShowFilter] = useState(false);
  const [filterBy, setFilterBy] = useState("recent");
  const handleClick = e => {
    setFilterBy(e.target.innerText);
  };

  const handleClose = () => {
    setShowFilter(prev => !prev);
  };

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ marginTop: 4 }}>
        <Stack direction="row" justifyContent="space-between" alignItems="center" margin={1} mt={5}>
          <Typography variant="h6" gutterBottom component="div">
            Explore
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
