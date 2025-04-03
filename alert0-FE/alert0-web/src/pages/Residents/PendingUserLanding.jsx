import React from "react";
import { Card, CardContent, CardMedia, Typography, Button, CardActions } from "@mui/material";

const PendingLandingPage = () => {
  return (
    <Card sx={{ maxWidth: 345, margin: "auto", boxShadow: 3 }}>
     
      <CardContent>
        <Typography variant="h5" component="div">
          MUI Card
        </Typography>
        <Typography variant="body2" color="text.secondary">
          This is a simple card component using Material-UI. You can customize it as needed.
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" color="primary">Learn More</Button>
      </CardActions>
    </Card>
  );
};

export default PendingLandingPage;
