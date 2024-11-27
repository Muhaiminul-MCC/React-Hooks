import { Button, Typography } from "@mui/material";
import { Box, Stack } from "@mui/system";
import React, { useState } from "react";

export default function MaltipleStateVar() {
  const [car, setCar] = useState({
    brand: "Ferrari",
    year: "2024",
    color: "Black",
  });
  const updatefun = () => {
    setCar((prev) => {
      return { ...prev, color: "Blue", year: "2025" };
    });
  };

  return (
    <div>
      <Box my={"5rem"}>
        <Typography variant="h1" fontSize={"3rem"} align="center">
          Multiple State Variable
        </Typography>
        <Box my={"5rem"} mx={"5rem"}>
          <u>
            <Typography variant="h2" fontSize={"3rem"} color="textSecondary">
              # Car Details
            </Typography>
          </u>
          <Stack mt={3} spacing={3}>
            <Typography variant="body1" fontSize={"2rem"}>
              My {car.brand}
            </Typography>
            <Typography fontSize={"2rem"} variant="body1">
              Car color: {car.color}, This car made on {car.year}.
            </Typography>
          </Stack>
          <Button variant="contained" onClick={updatefun}>
            Blue
          </Button>
        </Box>
      </Box>
    </div>
  );
}
