import { Stack, ThemeProvider } from "@mui/material";
import { Avatar, Box, Button, Card, Typography } from "@mui/material";
import { theme } from "App";
import { setUserProfile } from "features/auth/authSlice";
import { addUserToFollowing } from "firebaseUtils/auth";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
export function UserNameCard({ isSuggestionCard, isFollowerCard, isFollowingCard, isAllSuggestions, fellowUser }) {
  const { id, user } = useSelector(store => store.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {profileId} = useParams()
  return (
    <>
      <ThemeProvider theme={theme}>
        <Card
          onClick={e => {
            navigate(`/profile/${fellowUser.id}`);
          }}
          elevation={isSuggestionCard ? 2 : 0}
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            gap: 2,
            marginBottom: 2,
            paddingRight: 1,
            cursor:"pointer"
          }}>
          <Stack direction={"row"} alignItems={"center"} gap={1}>
            <Avatar alt="user-avatar" src={fellowUser?.avatar || fellowUser?.firstname?.charAt(0)} sx={{ m: 1 }} />
            <Typography component="div">{fellowUser?.firstname + " " + fellowUser?.lastname}</Typography>
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
          {(isSuggestionCard || isAllSuggestions) && (
            <Button
              variant="outlined"
              color="error"
              onClick={e => {
                e.stopPropagation();
                addUserToFollowing(id, user, fellowUser, dispatch, setUserProfile, profileId);
              }}>
              follow
            </Button>
          )}
        </Card>
      </ThemeProvider>
    </>
  );
}
