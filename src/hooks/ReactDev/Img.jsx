import React from "react";
import { Typography } from "@mui/material";
import { Container } from "@mui/system";

export default function Img() {
  const INFO = {
    imgName: "Google",
    imgUrl:
      "https://freelogopng.com/images/all_img/1657955547black-google-icon.png",
    size: "10%",
  };
  return (
    <Container>
      <Typography variant="h3">{INFO.imgName}</Typography>
      <img
        src={INFO.imgUrl}
        alt={INFO.imgName}
        height={INFO.size}
        width={INFO.size}
        style={{ borderRadius: "50%" }}
      />
    </Container>
  );
}
