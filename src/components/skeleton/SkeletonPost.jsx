import * as React from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import IconButton from "@mui/material/IconButton";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import Skeleton from "@mui/material/Skeleton";

export function SkeletonPost() {
  return (
    <>
      <Card sx={{ m: 2 }}>
        <CardHeader
          avatar={<Skeleton animation="wave" variant="circular" width={40} height={40} />}
          action={
            <IconButton aria-label="settings">
              <MoreVertIcon />
            </IconButton>
          }
          title={<Skeleton animation="wave" height={10} width="80%" style={{ marginBottom: 6 }} />}
          subheader={<Skeleton animation="wave" height={10} width="40%" />}
        />
        {<Skeleton sx={{ height: 120 }} animation="wave" variant="rectangular" />}
      </Card>
    </>
  );
}
