import React from "react";
import "./App.css";
import { Typography, Grid } from "@material-ui/core";
import Header from "./components/Header";

function App() {
  return (
    <div className="App">
      <Grid container direction="column">
        <Grid item xs={12}>
          <Header />
        </Grid>
        <Grid item container>
          <Grid item xs={false} s={2} />
          <Grid item xs={8} s={12}>
            <Typography>Hello Away Days</Typography>
          </Grid>
          <Grid item xs={false} s={2} />
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
