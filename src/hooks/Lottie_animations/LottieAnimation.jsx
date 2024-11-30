import React from "react";
import anm1 from "./404 not found.json";
import Lottie from "lottie-react";
import { Typography } from "@mui/material";

function App() {
  return (
    <div>
      <Typography variant="h1" fontSize={"3rem"}>
        404 error
      </Typography>
      <Lottie
        animationData={anm1}
        loop
        style={{ height: "500px", width: "500px" }}
      />
    </div>
  );
}

export default App;
