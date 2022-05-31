import { Avatar, Box, Button, Card, Grid, Typography } from "@mui/material";
import { UserNameCard } from "components";
import { getAllUsers } from "firebaseUtils/auth";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

export function Suggestions() {
  const { suggested } = useSelector(store => store.auth);
  const dispatch = useDispatch();
  console.log(suggested);
  useEffect(() => {
    dispatch(getAllUsers());
  }, []);
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
      {suggested?.map((follower, idx) => {
        return (
          <div key={"suggestion" + idx}>
            <UserNameCard fellowUser={follower} isSuggestionCard={true} />
          </div>
        );
      })}
    </Grid>
  );
}
