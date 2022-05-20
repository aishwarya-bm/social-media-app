import { ThemeProvider } from "@emotion/react";
import { theme } from "App";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";

export function FilterChips({ setShowFilter }) {
  const handleClick = () => {
    console.info("You clicked the Chip.");
  };
  const clearFilter = () => {
      setShowFilter(false);
      // TODO: code to clear filter value
  };
  return (
    <>
      <ThemeProvider theme={theme}>
        <Stack
          direction="row"
          spacing={1}
          marginBottom={2}
          justifyContent="center"
        >
          <Chip label="trending" onClick={handleClick} />
          <Chip label="recent" onClick={handleClick} />
          <Chip label="oldest" onClick={handleClick} />.
          <Chip label="x" variant="outlined" onClick={() => clearFilter()} />
        </Stack>
      </ThemeProvider>
    </>
  );
}