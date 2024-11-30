import { Button, Typography } from "@mui/material";
import { Container, Stack } from "@mui/system";
import React, { useState } from "react";

function CardCounter() {
  const Increasement = () => {
    setCount(count + 4);
  };
  const Decreasement = () => {
    setCount(count - 4);
  };
  const [count, setCount] = useState(0);
  return (
    <div>
      <Container align="center">
        <Typography variant="h1" sx={{ fontSize: "3rem", my: "5rem" }}>
          Card counter!
        </Typography>
        <Typography variant="p" sx={{ fontSize: "2rem" }} gutterBottom>
          Count:{count}
        </Typography>
        <Stack direction={"row"} my={"2rem"} mx={"30rem"} spacing={3}>
          <Button variant="contained" color="success" onClick={Increasement}>
            Increase
          </Button>
          <Button variant="contained" color="error" onClick={Decreasement}>
            Decrease
          </Button>
        </Stack>
      </Container>
    </div>
  );
}

export default CardCounter;
