import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import { Postlist } from "components";
import { useEffect } from "react";

export function Home() {
  useEffect(() => {
    document.title = `Home | Ssup`;
  }, []);

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
      <Postlist  />
    </>
  );
}
