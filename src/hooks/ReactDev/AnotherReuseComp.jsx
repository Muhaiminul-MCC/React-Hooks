import { Button } from "@mui/material";
import React, { useState } from "react";

function ChangeName() {
  const [name, setName] = useState("Name?");

  const names = ["Adrita", "Ayaan", "Mehedi", "Mahi"];

  const changeName = () => {
    const randomIndex = Math.floor(Math.random() * names.length);
    setName(names[randomIndex]);
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>{name}</h1>
      <Button onClick={changeName} variant="contained">
        Click me!
      </Button>
    </div>
  );
}

export default ChangeName;
