import { Typography } from "@mui/material";
import React, { useRef } from "react";
import { useEffect, useState } from "react";

export default function IncreaseNum() {
  //Title
  document.title = `Using hook`;

  //Use Hooks
  const [count, setCount] = useState(0);
  useEffect(() => {
    setTimeout(() => {
      console.log(count, "counting");
      setCount((count) => count + 1);
    }, 1000);
  }, [count]);
  return (
    <div align="center">
      <Typography variant="h1" fontSize={"4rem"} mt={"2rem"} gutterBottom>
        Auto update Number !
      </Typography>
      <Typography variant="h1" fontSize={"3rem"}>
        Number: {count}
      </Typography>
    </div>
  );
}
