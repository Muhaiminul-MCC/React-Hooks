import { Typography } from "@mui/material";
import React from "react";

export default function ReuseComponent(user) {
  return (
    <div align="center">
      <Typography variant="h4" gutterBottom>
        Hello{user.name}
      </Typography>
    </div>
  );
}
