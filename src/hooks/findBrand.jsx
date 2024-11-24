import { Button, Typography, Box } from '@mui/material';
import React, { useState } from 'react';

export default function CustomizeBrand() {
  const [brand, setBrand] = useState("?");

  const updateBrand = (newBrand) => {
    setBrand(newBrand);
  };

  return (
    <Box>
      <Typography mt={5} variant="h1" fontSize={"2.5rem"} color='#71dd43' gutterBottom>
        Enter your brand: {brand}
      </Typography>
      <Button variant="contained" sx={{":hover":{bgcolor:"#71dd43", color:"black"}}} onClick={() => updateBrand("BD")}>
        BD
      </Button>
      <Button variant="contained" sx={{ ":hover":{bgcolor:"#71dd43", color:"black"}, mx:3}} onClick={() => updateBrand("JP")}>
        JP
      </Button>
      <Button variant="contained" sx={{":hover":{bgcolor:"#71dd43", color:"black"}}} onClick={() => updateBrand("CH")}>
        CH
      </Button>
    </Box>
  );
}
