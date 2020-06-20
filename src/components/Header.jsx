import React from "react";
import { AppBar, Toolbar, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles(() => ({
  header: {
    "font-family": "Constantia",
    "font-size": 50,
  },
}));

const Header = () => {
  const classes = useStyles();

  return (
    <header>
      <AppBar position="static">
        <Toolbar>
          <Typography className={classes.header}>Away Days Apparel</Typography>
        </Toolbar>
      </AppBar>
    </header>
  );
};

export default Header;
