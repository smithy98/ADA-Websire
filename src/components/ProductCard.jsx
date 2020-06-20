import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  root: {
    padding: "30px",
    margin: "30px",
    width: "350px",
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  cardImages: {
    width: "80%",
  },
});

export default function ProductCard(props) {
  const classes = useStyles();
  const { product } = props;

  return (
    <Card>
      <CardContent>
        <img
          src={product.imgURL}
          alt="shirt"
          className={classes.cardImages}
        ></img>
        <Typography>{product.name}</Typography>
        <Typography>£{product.price}</Typography>
      </CardContent>
      <CardActions>
        <Button size="small">More Info...</Button>
      </CardActions>
    </Card>
  );
}
