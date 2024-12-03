import { Typography, Button } from "@mui/material";
import React, { useState } from "react";

export default function TernaryOperator() {
  const [status, setStatus] = useState(true);
  const name = "Muhaminul";
  return (
    <div align="center">
      <Button variant="contained" onClick={() => setStatus(!status)}>
        {status ? "offline" : "Active"}
      </Button>
      <Typography variant="h3" color="textSecondary" className="text">
        Hello {name} {status ? "Active" : "Offline"}
      </Typography>
    </div>
  );
}
