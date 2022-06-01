import { Avatar, Box, Button, Card, Grid, Typography } from "@mui/material";
import { UserNameCard } from "components";
import { getAllUsers } from "firebaseUtils/auth";
import { getSuggestionsList } from "firebaseUtils/filters";
import { useEffect, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AllSuggestions } from "./AllSuggestions";

export function Suggestions() {
  const [openSuggestions, setOpenSuggestions] = useState(false);
  const handleOpenSuggestionsModal = () => setOpenSuggestions(true);
  const handleCloseSuggestionsModal = () => setOpenSuggestions(false);

  const { allUsers, user,id } = useSelector(store => store.auth);
  const dispatch = useDispatch();
  const suggestedUsers = useMemo(() => getSuggestionsList(allUsers, user, id), [user]);

  useEffect(() => {
    dispatch(getAllUsers());
  }, []);

  return (
    <>
      <Grid
        item
        position="fixed"
        right="3rem"
        mt="2rem"
        sx={{
          display: { xs: "none", sm: "none", md: "none", lg: "grid" },
        }}>
        <Typography gutterBottom component="div" sx={{ marginTop: 3 }} textAlign="center" >
          Suggestions for you: <Button variant="text" onClick={handleOpenSuggestionsModal} >see more</Button>
        </Typography>
        {(suggestedUsers.slice(0,5))?.map((follower, idx) => (
          <div key={"suggestion" + idx}>
            <UserNameCard fellowUser={follower} isSuggestionCard={true} />
          </div>
        ))}
      </Grid>
      <AllSuggestions
        open={openSuggestions}
        handleClose={handleCloseSuggestionsModal}
        allSuggestions={suggestedUsers}
      />
    </>
  );
}
