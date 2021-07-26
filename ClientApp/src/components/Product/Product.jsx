import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import IconButton from "@material-ui/core/IconButton";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import { showAlert } from "../../store/app-slice";
const useStyles = makeStyles({
  media: {
    height: 220,
  },
});

const Product = (props) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { product } = props;

  const handleAddToCart = () => {
    dispatch(
      showAlert({ open: true, message: "Added to cart", level: "success" })
    );
  };
  return (
    <Card>
      <CardMedia
        component={Link}
        to="/detail"
        className={classes.media}
        image={`https://localhost:5001${product.productImages[0].imageUrl}`}
        title={product.name}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="h2">
          {product.name}
        </Typography>
        <Typography gutterBottom variant="h5" component="h2">
          {product.price} ₫
        </Typography>
      </CardContent>
      <CardActions>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton
          aria-label="add to favorites"
          onClick={handleAddToCart}
        >
          <ShoppingCartIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
};

export default Product;
