import React from "react";
import { makeStyles, createStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Product from "../Product/Product";

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
  })
);

const Products = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={3}>
          <Product />
        </Grid>
        <Grid item xs={3}>
          <Product />
        </Grid>
        <Grid item xs={3}>
          <Product />
        </Grid>
        <Grid item xs={3}>
          <Product />
        </Grid>
        <Grid item xs={3}>
          <Product />
        </Grid>
        <Grid item xs={3}>
          <Product />
        </Grid>
      </Grid>
    </div>
  );
};

export default Products;
