import React from "react";
import "./App.css";
import { Grid } from "@material-ui/core";
import Header from "./components/Header";
import ProductCard from "./components/ProductCard";

function App() {
  const shirtList = [
    {
      name: "Everton Shirt",
      price: 12.99,
      description: "A 1995 Everton Shirt",
      imgURL: "https://www.scoredraw.com/siteimg/prodhires/99-189.jpg",
    },
    {
      name: "Green Shirt",
      price: 6.99,
      description: "A green shirt",
      imgURL:
        "https://images-na.ssl-images-amazon.com/images/I/719gBZyPBZL._AC_UL1500_.jpg",
    },
    {
      name: "Grey Shirt",
      price: 4.99,
      description: "A grey shirt",
      imgURL:
        "https://images-na.ssl-images-amazon.com/images/I/61z1bkpppgL._AC_UX385_.jpg",
    },
  ];

  return (
    <div className="App">
      <Grid container direction="column">
        <Grid item xs={12}>
          <Header />
        </Grid>
        <Grid item container>
          <Grid item xs={false} s={2} />
          <Grid item xs={12} s={8}>
            {shirtList.map((shirt, index) => {
              return (
                <Grid item xs={2} m={4} key={index}>
                  <ProductCard product={shirt} />;
                </Grid>
              );
            })}
          </Grid>
          <Grid item xs={false} s={2} />
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
