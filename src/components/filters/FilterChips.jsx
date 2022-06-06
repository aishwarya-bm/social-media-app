import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import { useEffect, useState } from "react";
import { filterChipsData } from "constants/filterChips";

export function FilterChips({filterBy, handleClick}) {
  return (
    <>
        <Stack direction="row" spacing={1} marginBottom={2} justifyContent="center">
          {filterChipsData.map(({ label, id }) => (
            <Chip
              label={label}
              variant={filterBy === label ? "contained" : "outlined"}
              onClick={handleClick}
              key={"filterChip" + id}
              color="primary"
            />
          ))}
        </Stack>
    </>
  );
}