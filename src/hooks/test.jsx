import React, { useState } from 'react';
import { TextField, Typography, Container } from '@mui/material';

export default function Test() {
  const [name, setName] = useState("");

  const handleInputChange = (event) => {
    setName(event.target.value); // Update the name state with the input's value
  };

  return (
    <div>
      <Container align="center">
        <Typography variant="h1" fontSize="2rem">
          Your name is {name || "?"} 
        </Typography>
        <TextField
          className="inputname"
          variant="outlined"
          label="Enter your name"
          value={name}
          onChange={handleInputChange} 
        />
      </Container>
    </div>
  );
}
