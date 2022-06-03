import { ThemeProvider } from "@emotion/react";
import { Avatar, Box, Card, Stack, Typography } from "@mui/material";
import { theme } from "App";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import "./searchProfiles.css";
export function SearchProfiles({ searchText , showSearch}) {
  const navigate = useNavigate()
  const { allUsers } = useSelector(store => store.auth);

  const matchingProfiles = allUsers.filter(user =>
    (user.firstname + " " + user.lastname).toLowerCase().includes(searchText.toLowerCase())
  );

  return (
    <>
      <ThemeProvider theme={theme}>
       {showSearch && <Box component="div" className="matching-users" textAlign="center" sx={{backgroundColor:"white"}} >
          { searchText !=="" ? (matchingProfiles.length ? matchingProfiles?.map((fellowUser, idx) => (
            <div key={"matching" + idx}>
              <Card
                onClick={e => {
                  navigate(`/profile/${fellowUser.id}`);
                }}
                elevation={0}
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  paddingRight: 1,
                  cursor: "pointer",
                  borderRadius: "0",
                }}>
                <Stack direction={"row"} alignItems={"center"} gap={1}>
                  <Avatar
                    alt={fellowUser?.firstname}
                    src={fellowUser?.avatar || fellowUser?.firstname?.charAt(0)}
                    sx={{ m: 1 }}
                  />
                  <Typography component="div">{fellowUser?.firstname + " " + fellowUser?.lastname}</Typography>
                </Stack>
              </Card>
            </div>
          )) : "No results for your search") : "Search for your friends..."}
        </Box>}
      </ThemeProvider>
    </>
  );
}
