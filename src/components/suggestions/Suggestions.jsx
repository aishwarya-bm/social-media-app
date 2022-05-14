import { Avatar, Box, Card, Container, Typography } from "@mui/material";

export function Suggestions() {
  return (
    <>
      <Container>
        Suggestions
        <Card sx={{ display: "flex", mt: 1 }}>
          <Avatar
            alt="Remy Sharp"
            src="/static/images/avatar/1.jpg"
            sx={{ m: 1 }}
          />
          <Box sx={{ display: "flex", alignItems: "center", ml: 1 }}>
            <Typography component="div">Aishwarya Biradar</Typography>
          </Box>
        </Card>
        <Card sx={{ display: "flex", mt: 1 }}>
          <Avatar
            alt="Remy Sharp"
            src="/static/images/avatar/1.jpg"
            sx={{ m: 1 }}
          />
          <Box sx={{ display: "flex", alignItems: "center", ml: 1 }}>
            <Typography component="div">Aishwarya Biradar</Typography>
          </Box>
        </Card>
        <Card sx={{ display: "flex", mt: 1 }}>
          <Avatar
            alt="Remy Sharp"
            src="/static/images/avatar/1.jpg"
            sx={{ m: 1 }}
          />
          <Box sx={{ display: "flex", alignItems: "center", ml: 1 }}>
            <Typography component="div">Aishwarya Biradar</Typography>
          </Box>
        </Card>
      </Container>
    </>
  );
}
