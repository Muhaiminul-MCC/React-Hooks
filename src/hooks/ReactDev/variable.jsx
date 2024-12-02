import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

export default function Variable() {
  const user = {
    name: "Muhaiminul",
    age: 17,
    class: 10,
  };
  return (
    <div align="center">
      <Typography variant="h1" fontSize={"3rem"} mt={"3rem"} gutterBottom>
        USER INFO
      </Typography>
      <Box>
        <Typography variant="h2" fontSize={"2rem"} color="textSecondary">
          Hello My name is {user.name}. I'm {user.age} years old. I'm
        </Typography>
      </Box>
    </div>
  );
}
