import { Button, Typography } from "@mui/material";
import "./Style.css";
import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";

export default function TimeCounter() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    document.title = `count: ${count}`;
  }, [count]);

  function AddCount() {
    setCount((c) => c + 1);
  }

  return (
    <div align="center">
      <Box mt={"2rem"}>
        <Typography
          variant="h1"
          fontSize={"2rem"}
          className="heading"
          color="antiquewhite"
          gutterBottom
        >
          UseEffect
        </Typography>
        <Typography variant="h4" color="white">
          Count: {count}
        </Typography>

        <Button
          className="btn1"
          variant="outlined"
          sx={{ color: "white", backgroundColor: "skyblue" }}
          onClick={AddCount}
          disableRipple
        >
          Click me!
        </Button>
      </Box>
    </div>
  );
}
