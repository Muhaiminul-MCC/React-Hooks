import { Typography } from "@mui/material";
import "./Style.css";
import React, { useEffect, useState } from "react";

export default function UpdateDateTime() {
  const [date, setDate] = useState(0);
  useEffect(() => {
    setInterval(() => {
      const updateDate = new Date();
      setDate(updateDate.toLocaleTimeString());
    });
  }, []);
  return (
    <div align="center">
      <Typography
        variant="h1"
        sx={{ color: "white" }}
        fontSize={"3rem"}
        my={"3rem"}
      >
        Time :{date}
      </Typography>
    </div>
  );
}
