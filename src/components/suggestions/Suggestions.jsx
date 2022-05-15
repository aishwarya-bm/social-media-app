import { Avatar, Box, Button, Card, Container, Grid, Typography } from "@mui/material";

export function Suggestions() {
  return (
    <>
      <Grid 
        item
        position="fixed"
        right="2rem"
        mt="2rem"
        sx={{
          display: { xs: "none", sm: "none", md: "none", lg: "grid" },
        }}
      >
          Suggestions
          <Card sx={{ display: "flex", mt: 1, pr: "1rem" }}>
            <Avatar
              alt="Remy Sharp"
              src="/static/images/avatar/1.jpg"
              sx={{ m: 1 }}
            />
            <Box sx={{ display: "flex", alignItems: "center", ml: 1, gap: 1 }}>
              <Typography component="div">Aishwarya Biradar</Typography>
              <Button variant="outlined" color="error">
                Follow
              </Button>
            </Box>
          </Card>
          <Card sx={{ display: "flex", mt: 1 }}>
            <Avatar
              alt="Remy Sharp"
              src="/static/images/avatar/1.jpg"
              sx={{ m: 1 }}
            />
            <Box sx={{ display: "flex", alignItems: "center", ml: 1, gap: 1 }}>
              <Typography component="div">Aishwarya Biradar</Typography>
              <Button variant="outlined" color="error">
                Follow
              </Button>
            </Box>
          </Card>
          <Card sx={{ display: "flex", mt: 1 }}>
            <Avatar
              alt="Remy Sharp"
              src="/static/images/avatar/1.jpg"
              sx={{ m: 1 }}
            />
            <Box sx={{ display: "flex", alignItems: "center", ml: 1, gap: 1 }}>
              <Typography component="div">Aishwarya Biradar</Typography>
              <Button variant="outlined" color="error">
                Follow
              </Button>
            </Box>
          </Card>
      </Grid>
    </>
  );
}
