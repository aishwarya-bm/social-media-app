import { Stack, ThemeProvider } from "@mui/material";
import { Avatar, Box, Button, Card, Typography } from "@mui/material";
import { theme } from "App";
import { setUserProfile } from "features/auth/authSlice";
import { addUserToFollowing, isFollower, isFollowing, removeUserFromFollowing } from "firebaseUtils/auth";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";

export function UserNameCard({
  cardType,
  fellowUser,
  handleClose,
}) 
{
  const { id, user } = useSelector(store => store.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { profileId } = useParams();

  const border = cardType === "suggestions" ? "1px solid var(--primary-color)" : "0";
  return (
    <>
      <ThemeProvider theme={theme}>
        <Card
          onClick={e => {
            navigate(`/profile/${fellowUser.id}`);
            handleClose();
          }}
          elevation={cardType === "suggestions" ? 2 : 0}
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            gap: 2,
            marginBottom: 2,
            paddingRight: 1,
            cursor: "pointer",
          }}>
          <Stack direction={"row"} alignItems={"center"} gap={1}>
            <Avatar
              alt={fellowUser?.firstname}
              src={fellowUser?.avatar || fellowUser?.firstname?.charAt(0)}
              sx={{ m: 1 }}
            />
            <Typography component="div">{fellowUser?.firstname + " " + fellowUser?.lastname}</Typography>
          </Stack>
          {(cardType === "follower" || cardType === "following") &&
            (isFollowing(fellowUser?.id, user?.following) ? (
              <Button
                variant="outlined"
                color="error"
                onClick={e => {
                  e.stopPropagation();
                  removeUserFromFollowing(id, user, fellowUser, dispatch, setUserProfile, profileId);
                }}>
                Following
              </Button>
            ) : (
              id !== fellowUser.id && (
                <Button
                  variant="contained"
                  color="primary"
                  onClick={e => {
                    e.stopPropagation();
                    addUserToFollowing(id, user, fellowUser, dispatch, setUserProfile, profileId);
                  }}>
                  Follow
                </Button>
              )
            ))}
          {(cardType === "suggestions" || cardType === "allSuggestions") && (
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
