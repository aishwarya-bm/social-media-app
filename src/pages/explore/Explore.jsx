import { Filter, Filter1Outlined, FilterAlt } from "@mui/icons-material";
import { IconButton, Typography } from "@mui/material";
import { Box, ThemeProvider } from "@mui/system";
import {theme} from "App";
import { FilterChips, Postlist } from "components";
import { useState } from "react";

export function Explore() {
  const [showFilter, setShowFilter] = useState(false)
  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ marginTop: 4 }}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems:"center",
            margin:"1rem"
          }}
        >
          <Typography variant="h6" gutterBottom component="div">
            Home
          </Typography>
          <IconButton aria-label="filter" color="secondary" onClick={()=>setShowFilter(prev=>!prev)} >
            <FilterAlt />
          </IconButton>
        </Box>
        {showFilter && <FilterChips setShowFilter={setShowFilter} />}
      </Box>
      <Postlist />
    </ThemeProvider>
  );
}
