import { Avatar, Box, Button, Card, Grid, Typography } from "@mui/material";
import { UserNameCard } from "components";

export function Suggestions() {
  const suggestedUsers = [
    {
      username: "Aishwarya Biradar",
      avatar: "",
    },
    {
      username: "Aishwarya Biradar",
      avatar: "",
    },
    {
      username: "Aishwarya Biradar",
      avatar: "",
    },
  ];
  return (
    <Grid
      item
      position="fixed"
      right="3rem"
      mt="2rem"
      sx={{
        display: { xs: "none", sm: "none", md: "none", lg: "grid" },
      }}>
      <Typography gutterBottom component="div" sx={{ marginTop: 3 }}>
        Suggestions for you:
      </Typography>
      {suggestedUsers.map(follower => {
        return <UserNameCard fellowUser={follower} isSuggestionCard={true} />;
      })}
    </Grid>
  );
}
