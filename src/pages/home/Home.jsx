import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import { theme } from "App";
import { FilterChips, Postlist } from "components";
import { useState } from "react";

export function Home() {
  const [showFilter, setShowFilter] = useState(false);
  const [filterBy, setFilterBy] = useState("recent");
  const handleClick = e => {
    setFilterBy(e.target.innerText);
  };

  return (
    <>
      <Box sx={{ mt: 4, mb: 2 }}>
        <Typography
          variant="h5"
          gutterBottom
          component="div"
          sx={{ display: { xs: "none", sm: "block", md: "block" } }}>
          Home
        </Typography>
      </Box>
      {showFilter && <FilterChips filterBy={filterBy} handleClick={handleClick} />}
      <Postlist filterByChip={filterBy} />
    </>
  );
}
