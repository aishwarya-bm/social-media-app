import { Typography } from "@mui/material";
import { Postlist } from "components";
import { useEffect } from "react";

export function Bookmarks({ type }) {
  useEffect(() => {
    document.title = `Saved | Ssup`;
  }, []);
  return (
    <>
      {type !== "profile" && (
        <Typography
          variant="h6"
          gutterBottom
          component="div"
          sx={{ marginTop: 4, marginBottom: 3, display: { xs: "none", sm: "block", md:"block" } }}>
          Saved posts
        </Typography>
      )}
      <Postlist type="saved" />
    </>
  );
}
