import { AppBar, Button, Toolbar, Typography } from "@mui/material";
import React from "react";

const NavBar = () => {
  return (
    <>
      <AppBar position="static" >
        <Toolbar>
          <Typography variant="h6" flexGrow={1}>BlissFull Bytes</Typography>
          <Button variant="text" color="inherit">LOGIN</Button>
          <Button variant="text" color="inherit">LOGOUT</Button>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default NavBar;
