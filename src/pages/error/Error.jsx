import { Button, Stack, Typography } from "@mui/material";
import { Header } from "components";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export function Error() {
  const navigate = useNavigate();

  useEffect(() => {
    document.title = `Error | Ssup`;
  }, []);
  return (
    <>
      <Header />
      <Stack mt={10} direction="column" alignItems="center" gap={2}>
        <Typography gutterBottom component="div" sx={{ mt: 5 }} textAlign="center">
          Oops, page not found
        </Typography>
        <img src="https://cdn.iconscout.com/icon/premium/png-128-thumb/404-1531318-1297475.png" alt="page-not-found" />
        <Button variant="contained" onClick={() => navigate("/home")}>
          Go back to home
        </Button>
      </Stack>
    </>
  );
}
