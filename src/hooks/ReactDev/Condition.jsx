import { Typography } from "@mui/material";
import React from "react";

export default function Condition() {
  //some user data
  const userInfo = {
    LoginStatus: false,
    uaerName: "Muhaiminul",
  };
  //Statement
  if (userInfo.LoginStatus) {
    return (
      <Typography variant="h3">User {userInfo.uaerName} is loged in</Typography>
    );
  } else {
    return (
      <Typography variant="h3">
        User {userInfo.uaerName} is not loged in
      </Typography>
    );
  }
}
