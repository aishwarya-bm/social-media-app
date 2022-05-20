import { Stack, ThemeProvider } from "@mui/material";
import { Avatar, Box, Button, Card, Typography } from "@mui/material";
import { theme } from "App";
export function UserNameCard({ isSuggestionCard, isFollowerCard, isFollowingCard, fellowUser }) {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Card
          elevation={2}
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            gap: 2,
            marginBottom: 2,
            paddingRight: 1,
          }}>         
            <Stack direction={"row"} alignItems={"center"} gap={1}>
              <Avatar alt="Remy Sharp" src={fellowUser.avatar} sx={{ m: 1 }} />
              <Typography component="div">{fellowUser.username}</Typography>
            </Stack>         
          {isFollowingCard && (
            <Button variant="outlined" color="error">
              unfollow
            </Button>
          )}
          {isFollowerCard && (
            <Button variant="outlined" color="error">
              remove
            </Button>
          )}
          {isSuggestionCard && (
            <Button variant="outlined" color="error">
              follow
            </Button>
          )}
        </Card>
      </ThemeProvider>
    </>
  );
}
