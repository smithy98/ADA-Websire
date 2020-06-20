import React from "react";
import { AppBar, Toolbar, Typography } from "@material-ui/core";

const Header = () => {
  return (
    <header>
      <AppBar position="static">
        <Toolbar>
          <Typography>Away Days Apparel</Typography>
        </Toolbar>
      </AppBar>
    </header>
  );
};

export default Header;
