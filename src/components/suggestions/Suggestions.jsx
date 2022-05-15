import { Avatar, Box, Button, Card, Container, Typography } from "@mui/material";

export function Suggestions() {
  return (
    <>
      <Container >
        Suggestions
        <Card sx={{ display: "flex", mt: 1, pr:"1rem" }}>
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
      </Container>
    </>
  );
}
