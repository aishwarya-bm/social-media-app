import { Avatar, Box, Card, CssBaseline, Stack, Typography } from "@mui/material";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import "./searchProfiles.css";
export function SearchProfiles({ searchText, showSearch, setShowSearch }) {
  const navigate = useNavigate();
  const { allUsers } = useSelector(store => store.auth);
  const matchingProfiles = allUsers.filter(user =>
    (user.firstname + " " + user.lastname).toLowerCase().includes(searchText.toLowerCase())
  );

  const openProfile = userid => {
    console.log("clicked");
    navigate(`/profile/${userid}`);
    setShowSearch(false);
  };

  return (
    <>
      <CssBaseline />
      {showSearch && searchText !== "" && (
        <Box component="div" className="matching-users" textAlign="center" border={1} borderColor="icon.main">
          {matchingProfiles?.length ? (
            matchingProfiles?.map(({ firstname, lastname, avatar }, idx) => (
              <div key={"matching" + idx} onClick={() => openProfile(fellowUser.id)}>
                <Card
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
                    <Avatar alt={firstname} src={avatar || firstname?.charAt(0)} sx={{ m: 1 }} />
                    <Typography component="div">{firstname + " " + lastname}</Typography>
                  </Stack>
                </Card>
              </div>
            ))
          ) : (
            <Box component="div" sx={{ bgcolor: "background.paper", color: "text.primary", p: 2 }}>
              <Typography component="div">No results for your search</Typography>
            </Box>
          )}
        </Box>
      )}
    </>
  );
}
